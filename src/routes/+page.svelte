<script lang="ts">
	import Profile from '$lib/components/Profile.svelte';
</script>

<svelte:head>
	<title>Chris - Software Developer</title>
	<meta
		name="description"
		content="Portfolio of Chris, a passionate software developer from the Netherlands"
	/>
</svelte:head>

<main class="min-h-screen bg-ctp-base p-2 flex justify-center items-center">
	<div class="mx-auto max-w-2xl space-y-3 w-full">
		<!-- Hero Section -->
		<div class="rounded-xl bg-ctp-mantle p-4 w-full">
			<Profile />
			<div>
				<p>
					Software developer in opleiding met een passie voor web-development en systems programming!
				</p>
			</div>

			<!-- Skills Overview -->
			<div class="mt-4">
				<div class="flex flex-row gap-3">
					<!-- Frontend Development -->
					<div class="w-full rounded-lg bg-ctp-surface0 p-2">
						<div class="mb-1.5 flex gap-x-2 text-base text-ctp-lavender">
							<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
							</svg>
							<h3 class="mb-1 text-sm font-semibold text-ctp-text">Frontend Development</h3>
						</div>
						<div class="flex flex-wrap gap-1">
							<span class="rounded-full bg-ctp-blue/20 px-1.5 py-0.5 text-xs text-ctp-blue"
								>React</span
							>
							<span class="rounded-full bg-ctp-lavender/20 px-1.5 py-0.5 text-xs text-ctp-lavender"
								>Svelte</span
							>
							<span class="rounded-full bg-ctp-sapphire/20 px-1.5 py-0.5 text-xs text-ctp-sapphire"
								>TypeScript</span
							>
							<span class="rounded-full bg-ctp-sky/20 px-1.5 py-0.5 text-xs text-ctp-sky"
								>Tailwind CSS</span
							>
						</div>
					</div>

					<!-- Backend Development -->
					<div class="w-full rounded-l bg-ctp-surface0 p-2">
						<div class="mb-1.5 flex gap-x-2 text-base text-ctp-green">
							<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
								/>
							</svg>
							<h3 class="mb-1 text-sm font-semibold text-ctp-text">Backend Development</h3>
						</div>
						<div class="flex flex-wrap gap-1">
							<span class="rounded-full bg-ctp-green/20 px-1.5 py-0.5 text-xs text-ctp-green"
								>Node.js</span
							>
							<span class="rounded-full bg-ctp-peach/20 px-1.5 py-0.5 text-xs text-ctp-peach"
								>Rust</span
							>
							<span class="rounded-full bg-ctp-maroon/20 px-1.5 py-0.5 text-xs text-ctp-maroon"
								>PHP</span
							>
							<span class="rounded-full bg-ctp-red/20 px-1.5 py-0.5 text-xs text-ctp-red"
								>PostgreSQL</span
							>
							<span class="rounded-full bg-ctp-red/20 px-1.5 py-0.5 text-xs text-ctp-red"
								>Ruby On Rails</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Projects Section -->
		<div id="projects" class="rounded-xl bg-ctp-mantle p-4">
			<div class="mb-4 text-center">
				<h2 class="mb-1 text-xl font-bold">
					<span class="name-text">Featured Projects</span>
				</h2>
			</div>

			<div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">

				<div
					class="flex flex-col justify-between rounded-xl bg-ctp-surface0 p-3 transition-colors duration-300 hover:bg-ctp-surface1"
				>
					<div>
						<div class="mb-2">
							<div class="flex h-24 w-full items-center justify-center rounded-lg bg-linear-to-br from-ctp-lavender/20 to-ctp-sapphire/20">
							<svg class="h-10 w-10 text-ctp-lavender" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
							</svg>
						</div>
						</div>
						
					<h3 class="mb-1 text-base font-semibold text-ctp-text">deze Website!</h3>
					<p class="mb-2 text-xs text-ctp-subtext0">
						Een simpele portfolio website gebouwd met SvelteKit en Tailwind CSS
					</p>
					</div>
					<div>
						<div class="mb-2 flex flex-wrap gap-1">
						<span class="rounded bg-ctp-lavender/20 px-2 py-1 text-xs text-ctp-lavender"
							>Svelte</span
						>
						<span class="rounded bg-ctp-sapphire/20 px-2 py-1 text-xs text-ctp-sapphire"
							>TypeScript</span
						>
						<span class="rounded bg-ctp-sky/20 px-2 py-1 text-xs text-ctp-sky">Tailwind</span>
						</div>
						<div class="flex gap-2 text-xs">
							<a
							href="https://github.com/frittesauce/portfolio/"
							class="text-ctp-subtext0 transition-colors hover:text-ctp-text">Code</a
						>
						</div>
					</div>
				</div>
				<div
					class="flex flex-col justify-between rounded-xl bg-ctp-surface0 p-3 transition-colors duration-300 hover:bg-ctp-surface1"
				>
					<div>
						<div class="mb-2">
							<div class="flex w-full items-center justify-center rounded-lg bg-linear-to-br from-ctp-peach/20 to-ctp-red/20 overflow-hidden">
								<img src="https://github.com/frittesauce/turcey/raw/the-great-rewrite/github/turceycat.gif" alt="turcey" class="h-24 w-full object-cover object-center"/>
							</div>
						</div>
						<h3 class="mb-1 text-base font-semibold text-ctp-text">Turcey (W I P)</h3>
						<p class="mb-2 text-xs text-ctp-subtext0">
							Een simple compiler voor een c-like programer taal gemaakt in rust.
						</p>
					</div>
					<div>
						<div class="mb-2 flex flex-wrap gap-1">
							<span class="rounded bg-ctp-peach/20 px-2 py-1 text-xs text-ctp-peach">Rust</span>
						</div>
						<div class="flex gap-2 text-xs">
							<a
								href="https://github.com/frittesauce/turcey"
								class="text-ctp-subtext0 transition-colors hover:text-ctp-text">Code</a
							>
						</div>
					</div>
				</div>

				<div
					class="flex flex-col justify-between rounded-xl bg-ctp-surface0 p-3 transition-colors duration-300 hover:bg-ctp-surface1"
				>
					<div>
						<div class="mb-2">
							<div class="flex h-24 w-full items-center justify-center rounded-lg bg-linear-to-br from-ctp-green/20 to-ctp-teal/20">
								<svg class="h-10 w-10 text-ctp-green" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
									/>
								</svg>
							</div>
						</div>
						<h3 class="mb-1 text-base font-semibold text-ctp-text">Fishtrest</h3>
						<p class="mb-2 text-xs text-ctp-subtext0">
							Een eenvoudige social media platform voor het delen van foto's, gemaakt in sveltekit
							en docker!
						</p>
					</div>
					<div>
						<div class="mb-2 flex flex-wrap gap-1">
							<span class="rounded bg-ctp-lavender/20 px-2 py-1 text-xs text-ctp-lavender"
								>SvelteKit</span
							>
							<span class="rounded bg-ctp-sky/20 px-2 py-1 text-xs text-ctp-sky">Tailwind</span>
							<span class="rounded bg-ctp-teal/20 px-2 py-1 text-xs text-ctp-teal">Docker</span>
							<span class="rounded bg-ctp-red/20 px-2 py-1 text-xs text-ctp-red">Postgres</span>
						</div>
						<div class="flex gap-2 text-xs">
							<a
								href="https://github.com/frittesauce/fishtrest"
								class="text-ctp-subtext0 transition-colors hover:text-ctp-text">Code</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

