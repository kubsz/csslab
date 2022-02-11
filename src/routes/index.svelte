<script>
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { javascriptFill } from '@iconify/icons-akar-icons/javascript-fill';
	import { svelteIcon } from '@iconify/icons-cib/svelte';
	import { vueFill } from '@iconify/icons-akar-icons/vue-fill';
	import { reactFill } from '@iconify/icons-akar-icons/react-fill';
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
	<h1 class="initanim initanim-s-600 initanim-d-300">Coming Soon</h1>
	<p class="description initanim initanim-s-600 initanim-d-400">Q3, 2022</p>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 110rem;
		margin: 5rem auto;
		gap: $gutter;
		max-width: calc(100% - #{$gutter * 2});

		flex: 1;

		.top-text {
			color: $col-light-4;
			font-size: 1.4rem;
			margin: 0;
			text-align: center;
		}
		h1 {
			color: #fff;
			text-align: center;
			font-size: 8rem;

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
			font-size: 3.6rem;
			text-align: center;
			margin: 0;
			color: $col-light-3;
			max-width: 90rem;
		}
	}
</style>
