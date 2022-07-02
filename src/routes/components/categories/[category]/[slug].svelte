<script context="module">
	export const load = async ({ url, params, props, session, fetch, stuff }) => {
		const component = await fetch(`/api/components/${params.slug}`).then((res) => res.json());
		return {
			props: {
				component: component.data
			}
		};
	};
</script>

<script>
	import { backOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	import { strapiImage } from '$lib/strapi';

	import Card from '$components/general/Card.svelte';
	import Section from '$components/layout/Section.svelte';
	import Jumbo from '$components/layout/Jumbo.svelte';
	import IconButtons from '$components/general/IconButtons.svelte';
	import ComponentOptions from '$components/general/ComponentOptions.svelte';
	import GlowingButton from '$components/csslab_components/GlowingButton.svelte';

	import Icon from '@iconify/svelte';
	import likeIconFilled from '@iconify/icons-icon-park-solid/like';

	export let component;
	export let defaultTechnology = 'svelte';

	let activeTechnology = defaultTechnology;
	let liked = false;
	let likes = 16;

	const arrToObject = (arr) => arr.reduce((obj, item) => Object.assign(obj, { [item.name]: item.config.value || null }), {});

	console.log(component);

	const getInitialConfig = () => ({
		variables: arrToObject(component.variables),
		props: arrToObject(component.props)
	});

	let config = getInitialConfig();

	const objectToCssVariables = (object) =>
		Object.entries(object)
			.map(([key, value]) => `--${key}:${value};`)
			.join('');
</script>

<Section margin modifiers={['padding', 'gap']}>
	<Jumbo title={component.name} subtitle={component.description}>
		<div slot="top-info">
			<ul class="tag-list">
				{#each component.tags as tag}
					<li>
						<a style="--col: {tag.hex}" href="/components/tags/{tag.slug}">{tag.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="jumbo-side">
			<ul class="supported-technology-list">
				{#each component.technologies as tech}
					<li>
						<a href="/technologies/{tech.slug}">
							<img src={strapiImage(tech.logo)} alt="{tech.name} logo" />
						</a>
					</li>
				{/each}
			</ul>
			<span class="credit">
				Created by <a href="/">Kubsz</a>
			</span>
			<div class="like-button-container" class:active={liked}>
				<button
					on:click={() => {
						likes += liked ? -1 : 1;
						liked = !liked;
					}}
				>
					{#key likes}
						<div transition:scale={{ duration: 500, easing: backOut }} class="icon">
							<Icon icon={likeIconFilled} />
						</div>
					{/key}
				</button>
			</div>
		</div>
	</Jumbo>
	<IconButtons
		on:update={(e) => (activeTechnology = e.detail.value)}
		modifiers={['horizontal-buttons', 'grow']}
		items={component.technologies.map((tech) => ({ label: tech.name, value: tech.slug, icon: strapiImage(tech.logo), color: tech.rgb }))}
	/>
	<div class="main row">
		<div class="col-5">
			<ComponentOptions
				defaultConfig={config}
				options={[
					{ title: 'Props', configKey: 'props', items: component.props },
					{ title: 'Variables', configKey: 'variables', items: component.variables }
				]}
				on:update={(e) => (config = e.detail.config)}
			/>
		</div>
		<div class="col-15">
			<Card modifiers={['dark-3']}>
				{#if config}
					<div class="showcase" style={objectToCssVariables(config.variables)}>
						<svelte:component this={GlowingButton} {...config.props}>Button Text</svelte:component>
					</div>
				{/if}
			</Card>
		</div>
	</div>
</Section>

<style lang="scss">
	.tag-list {
		display: flex;
		flex-flow: row wrap;
		gap: 0.75rem;
		margin-bottom: 1.2rem;

		li {
			a {
				padding: 0.5rem 1.2rem;
				background-color: var(--col);
				font-size: 1.1rem;

				color: #fff;
				border-radius: 0.15rem;

				transition: 0.1s ease;

				&:hover {
					filter: brightness(1.2);
				}
			}
		}
	}
	.jumbo-side {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 1.5rem;
		color: $col-light-3;
		padding: 2rem;
		flex: 1;

		.supported-technology-list {
			display: flex;
			justify-content: flex-end;
			gap: 1.5rem;

			a {
				opacity: 0.7;
				transition: 0.1s ease;
				display: block;

				&:hover {
					opacity: 1;
				}

				img {
					display: block;
					width: 1.8rem;
					height: 1.8rem;
				}
			}
		}
		.credit {
			font-size: 1.2rem;

			a {
				color: $col-primary;
			}
		}
	}
	.technology-list {
		display: flex;

		li {
			flex: 1;
		}
	}

	.like-button-container {
		$col-like: #dd4d4d;
		position: relative;
		margin-top: auto;
		button {
			background-color: $col-dark-4;
			border-radius: $radius;
			padding: 1rem;
			width: 3.6rem;
			height: 3.6rem;
			position: relative;
			z-index: 3;
			@include flexCenter;

			cursor: pointer;
			transition: 0.2s ease;

			.icon {
				position: absolute;
				left: 50%;
				transform: translate(-50%);
				display: block;
				:global(svg) {
					display: block;
					color: $col-like;
				}
			}
		}
		&.active button {
			background-color: $col-like;

			:global(svg) {
				color: #fff;
			}
		}

		span {
			position: absolute;
			right: calc(100% + 0.75rem);
			top: 50%;
			transform: translateY(-50%);

			font-size: 1.2rem;
			font-weight: 600;

			color: rgba($col-like, 0.5);
		}

		&.active span {
			color: $col-like;
		}
	}
</style>
