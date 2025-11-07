
import { env } from '$env/dynamic/private'; // runtime env for SvelteKit server

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_CURRENT_PLAYING = 'https://api.spotify.com/v1/me/player/currently-playing';
const SPOTIFY_RECENT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

async function getAccessToken() {
  const clientId = env.SPOTIFY_CLIENT_ID;
  const clientSecret = env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = env.SPOTIFY_REFRESH_TOKEN;

  const body = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  });

  const resp = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body.toString()
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Token refresh failed: ${resp.status} ${text}`);
  }

  const j = await resp.json();
  return j.access_token;
}

function simplifyTrack(item: { item: any; is_playing: any; }) {
  if (!item) return null;
  const track = item.item || item; // currently-playing returns item; recently-played returns track in .track
  if (!track) return null;
  return {
    title: track.name,
    artists: track.artists?.map((a: { name: any; }) => a.name).join(', '),
    album: track.album?.name,
    albumArt: track.album?.images?.[0]?.url,
    is_playing: item.is_playing ?? false,
    spotify_url: track.external_urls?.spotify
  };
}

export async function GET() {
  try {
    const accessToken = await getAccessToken();

    // try currently playing first
    let r = await fetch(SPOTIFY_CURRENT_PLAYING, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    // 204 -> nothing playing; fallback to recently-played
    let json;
    if (r.status === 204 || !r.ok) {
      const rr = await fetch(SPOTIFY_RECENT, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      if (!rr.ok) {
        const t = await rr.text();
        throw new Error('Spotify recent failed: ' + t);
      }
      const j = await rr.json();
      // recent returns items[0].track
      json = simplifyTrack(j.items?.[0]?.track || j.items?.[0]);
    } else {
      const j = await r.json();
      json = simplifyTrack(j);
    }

    if (!json) return new Response(JSON.stringify({ error: 'no track' }), { status: 204 });

    // Cache lightly on CDN side (so we don't hammer Spotify); adjust as you like
    return new Response(JSON.stringify(json), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=5, s-maxage=20, stale-while-revalidate=60'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
