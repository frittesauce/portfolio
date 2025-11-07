<script lang="ts">
	import { onMount } from 'svelte';

	let loading = $state(true);
	let song = $state();

	async function loadSong() {
		loading = true;

		try {
			const res = await fetch('/api/spotify');
			if (res.status === 204) {
				song = null;
				return;
			}
			const j = await res.json();
			if (!res.ok) throw new Error(j.error || 'Failed to load');
			song = j;
		} catch (e) {
			console.log('error');
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		loadSong();
		const id = setInterval(loadSong, 15000);
		return () => clearInterval(id);
	});
</script>

<p>this is my website!</p>
<img src="https://media1.tenor.com/m/_15yYkqVX8EAAAAd/cat-vibing.gif" alt="dance cat" />
{#if loading}
	<div>loading your bop…</div>
{:else if !song}
	<div>no song playing recently.</div>
{:else}
	<div class="now-playing">
		<img src={song.albumArt} alt="album art" width="96" height="96" />
		<div>
			<div class="title">
				<a href={song.spotify_url} target="_blank" rel="noopener noreferrer">{song.title}</a>
			</div>
			<div class="artist">{song.artists}</div>
			<div class="album">{song.album}</div>
			<div class="playing">{song.is_playing ? '▶ playing' : '⏸ last played'}</div>
		</div>
	</div>
{/if}
