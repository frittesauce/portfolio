<script lang="ts">
	import type { Song } from '$lib/SongType';
	import { onMount } from 'svelte';

	let loading = $state(true);
	let song: Song | null = $state(null);

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


<div class="bg-ctp-mantle rounded-xl w-full">
	<div class="flex flex-row p-4 items-center justify-between w-full">
		<div class="flex flex-row items-center gap-3">
			<img src="/profile.png" alt="profile" class="w-16 h-16 rounded-full" />
			<div class="flex flex-col justify-center">
				<span class="flex flex-row items-center"><h1 class="name-text text-xl font-extrabold">Chris</h1> <span class=" font-semibold text-md text-ctp-subtext0 ml-1">• Netherlands</span></span>
				<a href="https://github.com/frittesauce" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 mt-1 text-md text-ctp-subtext0 hover:text-ctp-lavender transition-colors duration-200">
					<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
					</svg>
					@frittesauce
				</a>
			</div>
		</div>

		<!-- Spotify Status -->
		<!-- {#if loading}
			<div class="flex items-center justify-center">
				<div class="animate-spin rounded-full h-4 w-4 border-b-2 border-ctp-lavender"></div>
			</div>
		{:else if song}
			<div class="flex items-center gap-2 bg-ctp-surface0 rounded-lg px-2 py-1">
				{#if song.is_playing}
					<div class="w-2 h-2 bg-ctp-green rounded-full animate-pulse"></div>
				{:else}
					<div class="w-2 h-2 bg-ctp-subtext0 rounded-full"></div>
				{/if}
				<div class="flex flex-col">
					<span class=" text-sm font-medium text-ctp-text truncate max-w-32">{song.title}</span>
					<span class=" text-sm text-ctp-subtext0 truncate max-w-32">{song.artists}</span>
				</div>
			</div>
		{:else}
			<div class="flex items-center gap-2 bg-ctp-surface0 rounded-lg px-2 py-1">
				<svg class="w-3 h-3 text-ctp-subtext0" fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 6.627 5.374 12 12 12s12-5.373 12-12c0-6.627-5.374-12-12-12zm5.568 8.16c-.204 0-.408.06-.612.182-1.836.918-4.694 1.124-7.632.816-.612-.06-1.224.306-1.224.918 0 .51.408.918.918.918.102 0 .204 0 .306-.006 2.448.204 4.898-.102 6.426-.816.408-.204.612-.714.612-1.122 0-.51-.408-.918-.918-.918zm.204 3.264c-.102 0-.306.006-.51.018-2.244.408-4.59.204-6.528-.612-.612-.204-1.326.102-1.326.714 0 .51.408.918.918.918.102 0 .204 0 .306-.006 1.632.306 3.366.408 4.992.102 1.326-.306 1.734-1.734.714-2.55-.306-.306-.714-.612-1.122-.612zm-.102 3.162c-.102 0-.204 0-.306.006-1.836.408-3.876.306-5.694-.306-.714-.204-1.428.102-1.428.816 0 .51.408.918.918.918.102 0 .204 0 .306-.006 1.53.408 3.162.408 4.692 0 .51-.204.918-.714.918-1.224 0-.612-.714-1.02-1.326-.816z"/>
				</svg>
				<span class="text-xs text-ctp-subtext0">No music</span>
			</div>
		{/if} -->
	</div>
</div>

<style>
	
	.name-text {
		background: linear-gradient(90deg, var(--color-ctp-lavender), var(--color-ctp-sapphire));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

</style>
