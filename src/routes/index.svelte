<script>
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import javascriptFill from '@iconify/icons-akar-icons/javascript-fill.js';
	import svelteIcon from '@iconify/icons-cib/svelte.js';
	import vueFill from '@iconify/icons-akar-icons/vue-fill.js';
	import reactFill from '@iconify/icons-akar-icons/react-fill.js';
	const technologies = [
		{
			title: 'React',
			link: '/technologies/react',
			icon: reactFill,
			color: [110, 208, 241]
		},
		{
			title: 'Vue',
			link: '/technologies/vue',
			icon: vueFill,
			color: [63, 185, 132]
		},
		{
			title: 'Svelte',
			link: '/technologies/svelte',
			icon: svelteIcon,
			color: [242, 57, 0]
		},
		{
			title: 'JavaScript',
			link: '/technologies/javascript',
			icon: javascriptFill,
			color: [240, 220, 27],
			recentlyAdded: true
		}
	];
</script>

<div class="container">
	<p class="top-text initanim initanim-s-600 initanim-d-200">
		Language support for
		{#each technologies as tech, i}
			<span>
				{tech.title}{i < technologies.length - 1 ? ',' : '.'}
				{i === technologies.length - 2 ? 'and' : ''}
			</span>
		{/each}
	</p>
	<h1 class="initanim initanim-s-600 initanim-d-300">Beautiful web components to <span>catalize</span> your JavaScript projects.</h1>
	<p class="description initanim initanim-s-600 initanim-d-400">
		CSSLab is a user-generated platform and takes a developer-first approach. Slot beautifully customizble web components directly into your
		applications. Have a glance at all of our custom components, and copy them directly into your projects for FREE.
	</p>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 110rem;
		margin: 5rem auto;
		gap: $gutter;
		max-width: calc(100% - #{$gutter * 2});

		.top-text {
			color: $col-light-4;
			font-size: 1.4rem;
			margin: 0;
			text-align: center;
		}
		h1 {
			color: #fff;
			text-align: center;
			font-size: 5.5rem;

			@include respond(992) {
				font-size: 4rem;
			}

			span {
				background: linear-gradient(to bottom right, $col-primary, lighten($col-primary, 10%) 50%, $col-primary 100%);
				background-size: 200% auto;

				background-clip: text;
				text-fill-color: transparent;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;

				animation: shine 2s linear infinite;
				@keyframes shine {
					to {
						background-position: 200% center;
					}
				}
			}
		}

		.description {
			font-size: 1.8rem;
			text-align: center;
			margin: 0;
			color: $col-light-3;
			max-width: 90rem;
		}
	}
</style>
