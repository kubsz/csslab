<script>
	import javascriptFill from '@iconify/icons-akar-icons/javascript-fill.js';
	import svelteIcon from '@iconify/icons-cib/svelte.js';
	import vueFill from '@iconify/icons-akar-icons/vue-fill.js';
	import reactFill from '@iconify/icons-akar-icons/react-fill.js';

	import Section from './../components/layout/Section.svelte';
	import Button from '../components/general/Button.svelte';

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

<Section dark texture>
	<div class="header">
		<p class="top-text initanim initanim-s-600 initanim-d-200">
			Language support for
			{#each technologies as tech, i}
				<span>
					{tech.title}{i < technologies.length - 1 ? ',' : '.'}
					{i === technologies.length - 2 ? 'and' : ''}
				</span>
			{/each}
		</p>
		<h1 class="initanim initanim-s-600 initanim-d-300">Beautiful Web Components to <span>Catalyze</span> Your JavaScript Projects.</h1>
		<p class="description initanim initanim-s-600 initanim-d-400">
			CSSLab is a user-generated platform and takes a developer-first approach. Slot beautifully customizble web components directly into
			your applications. Have a glance at all of our custom components, and copy them directly into your projects for FREE.
		</p>
		<div class="btn-container">
			<Button modifiers={['large', 'primary', 'initanim', 'initanim-s-600', 'initanim-d-500']}>Browse Components</Button>
			<Button modifiers={['large', 'initanim', 'initanim-s-600', 'initanim-d-600']}>Become a Contributor</Button>
		</div>
	</div>
</Section>
<Section margin>
	<div class="split break-m">
		<div class="split-section">
			<div class="stack stack-10">
				<span class="typ-heading-tertiary">Technologies</span>
			<h3 class="typ-heading-primary">Extensive List of Supported Languages and Frameworks</h3>
			<p class="typ-subtext">A myriad of technologies, to minimize the stress of choosing a framework for your next application.</p>
			</div>
		</div>
		<div class="split-section">
			sec 2
		</div>
	</div>
</Section>

<style lang="scss">

	.split {
		display:grid;
		grid-template-columns:repeat(2,1fr);
		grid-gap:$gutter;

		// temp
		min-height: calc(100vh - var(--nav-height));
		padding:5rem 0;


		&-section {
		}
	}
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: $gutter;

		width: 110rem;
		padding: 5rem 0 20rem 0;
		margin: 0 auto;

		max-width: calc(100% - #{$gutter * 2});
		min-height: calc(100vh - var(--nav-height));
	}
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

	.btn-container {
		display: flex;
		gap: $gutter * 2;
		flex-flow: row wrap;
		justify-content: center;
		margin-top: $gutter;
		perspective: 1300px;
	}
</style>
