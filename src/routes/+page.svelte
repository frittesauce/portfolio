<script lang="ts">
	import { onMount } from 'svelte';

	let api = $state('');

	onMount(async () => {
		const res = await fetch('/api');
		const j = await res.json();
		api = j;
	});
</script>

<p>this is my website!</p>
<img src="https://media1.tenor.com/m/_15yYkqVX8EAAAAd/cat-vibing.gif" alt="dance cat" />
<p>{api}</p>
