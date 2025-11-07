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


<div class="bg-ctp-mantle w-max rounded-xl">
	<div class="flex flex-row p-4  w-max">
		<img src="/profile.gif" alt="profile" class="w-16 h-16 rounded-full" />
		<div class="flex flex-col justify-center ml-2">
			<span class="flex flex-row items-center"><h1 class="name-text text-xl font-extrabold">Chris</h1> <span class=" font-semibold text-md text-ctp-subtext0 ml-1">• Netherlands</span></span>
			<h1 class="text-md font-semibold text-ctp-subtext">Software Developer</h1>
		</div>
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
