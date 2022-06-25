<script>
	import { onMount } from 'svelte';

	import { strapiImage } from '$lib/strapi';

	import Button from './Button.svelte';
	// import ExampleButton from '../../CSSLAB_FILES/components/svelte/ExampleButton/ExampleButton.svelte';
	// import SupportedTechnologyShowcase from '../misc/SupportedTechnologyShowcase.svelte';

	export let title;
	export let description;
	export let href;
	export let tags = [];
	export let creator;
	export let technologies;
	export let vertical = false;

	let Component;

	onMount(async () => {
		// Component = await import('../../../static/CSSLAB_FILES/components/svelte/ExampleButton.svelte').default;
	});
</script>

<div class="frame-card" class:vertical>
	<div class="frame">
		<ul class="technology-icons">
			{#each technologies as tech}
				<li>
					<a href="{href}/{tech.slug}">
						<img src={strapiImage(tech.logo)} />
					</a>
				</li>
			{/each}
		</ul>
		{#if Component}
			<!-- <svelte:component this={Component} /> -->
		{:else}
			<!-- <ExampleButton>Click Me!</ExampleButton> -->
		{/if}
	</div>
	<div class="info">
		<ul class="tag-list">
			{#each tags as tag}
				<li>
					<button style="--col-bg:{tag.hex}3d;--color:{tag.hex}">{tag.name}</button>
				</li>
			{/each}
		</ul>
		<h3 class="title">{title}</h3>
		<p class="description">{description}</p>
		<div class="button-container">
			<Button {href} modifiers={['primary', 'uppercase']}>View Info</Button>
		</div>
	</div>
</div>

<style lang="scss">
	.frame-card {
		display: flex;
		align-items: stretch;

		background-color: $col-light-2;
		border-radius: $radius;
		border: 1px solid rgba(0, 0, 0, 0.1);

		&.vertical {
			flex-direction: column;
		}

		.frame {
			flex: 0 0 50%;
			@include flexCenter;

			position: relative;

			background-color: $col-dark-3;
			border-radius: $radius 0 0 $radius;

			.technology-icons {
				position: absolute;
				top: 1.5rem;
				left: 1.5rem;
				width: 100%;

				display: flex;
				gap: 1.5rem;

				a {
					opacity: 0.4;
					transition: 0.15s ease;
					img {
						width: 1.4rem;
						height: 1.4rem;
					}

					&:hover {
						opacity: 1;
					}
				}
			}
		}

		&.vertical .frame {
			min-height: 13rem;
			flex: unset;
		}

		.info {
			padding: 3rem;
			display: flex;
			flex-direction: column;
			gap: 1rem;

			flex: 1;

			.title {
				font-size: 1.8rem;
				font-weight: 600;
			}

			.description {
				font-size: 1.4rem;
				color: $col-dark-4;
			}

			.tag-list {
				display: flex;
				flex-flow: row wrap;
				gap: 0.5rem;

				li {
					button {
						padding: 0.5rem 0.6rem;
						font-size: 1rem;
						border-radius: 0.2rem;

						text-transform: uppercase;
						letter-spacing: 1px;

						background-color: var(--col-bg);
						color: var(--col-color);
						border: 1px solid var(--col-bg);
					}
				}
			}
		}

		&.vertical .info {
			padding: 1.5rem;
			flex: 1;
		}

		&.vertical .button-container {
			margin-top: auto;
		}
	}
</style>
