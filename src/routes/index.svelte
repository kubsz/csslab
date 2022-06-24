<script>
	import IPhone from './../components/general/IPhone.svelte';
	import javascriptFill from '@iconify/icons-akar-icons/javascript-fill.js';
	import svelteIcon from '@iconify/icons-cib/svelte.js';
	import vueFill from '@iconify/icons-akar-icons/vue-fill.js';
	import reactFill from '@iconify/icons-akar-icons/react-fill.js';

	import Section from './../components/layout/Section.svelte';
	import Button from '../components/general/Button.svelte';
	import SupportedTechnologyShowcase from '../components/misc/SupportedTechnologyShowcase.svelte';
	import Jumbotron from '../components/general/Jumbotron.svelte';
	import MacScreen from '../components/general/MacScreen.svelte';

	const technologies = [
		{
			title: 'React',
			value: 'react',
			link: '/technologies/react',
			icon: reactFill,
			color: [110, 208, 241]
		},
		{
			title: 'Vue',
			value: 'vue',
			link: '/technologies/vue',
			icon: vueFill,
			color: [63, 185, 132]
		},
		{
			title: 'Svelte',
			value: 'svelte',
			link: '/technologies/svelte',
			icon: svelteIcon,
			color: [242, 57, 0]
		},
		{
			title: 'JavaScript',
			value: 'javascript',
			link: '/technologies/javascript',
			icon: javascriptFill,
			color: [218, 185, 45],
			recentlyAdded: true
		}
	];
</script>

<Section theme="dark" texture>
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
			<Button modifiers={['large', 'primary', 'hover-scale', 'initanim', 'initanim-s-600', 'initanim-d-500']}>Browse Components</Button>
			<Button modifiers={['large', 'hover-scale', 'initanim', 'initanim-s-600', 'initanim-d-600']}>Become a Contributor</Button>
		</div>
	</div>
</Section>
<Section>
	<SupportedTechnologyShowcase {technologies} />
</Section>

<Section theme="lightish" margin modifiers={['padding-vertical-10']}>
	<div class="responsive-section">
		<span class="typ-heading-tertiary u-color-secondary u-weight-900 large">Fully Responsive Components</span>
		<h2 class="typ-heading-primary bold">Customizable Components Designed For All Devices</h2>
		<p class="typ-subtext">
			Enjoy complete freedom of component choice knowing they will respond to all devices and screen sizes. Choose between a mobile first
			and desktop first design practice.
		</p>

		<div class="graphic">
			<div class="mac">
				<MacScreen>
					<div class="u-center" style="height:100%">mac content here</div>
				</MacScreen>
			</div>
			<div class="iphone">
				<IPhone><div class="u-center" style="height:100%">iphone content here</div></IPhone>
			</div>
		</div>
	</div>
</Section>
<!-- <Section margin>
	<div class="placeholder" />
</Section> -->

<!-- <Jumbotron modifiers={['dark', 'center']}>
	<div class="jumbo-container">
		<div class="jumbo-main">
			<span class="jumbo-text">Want to contribute to CSSLab?</span>
			<span class="jumbo-text">Let's get started...</span>
		</div>
	</div>
</Jumbotron> -->
<style lang="scss">
	.graphic {
		margin-top: $gutter * 2;
		height: 650px;
		width: 100%;
		position: relative;

		width: 90%;
		.mac,
		.iphone {
			position: absolute;
		}

		.mac {
			right: 100%;
			left: 0;
			width: calc(100% - 100px);
			height: calc(100% - 100px);
		}

		.iphone {
			height: 500px;
			width: 240px;

			bottom: 0;
			right: 0;
		}
	}
	.responsive-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $gutter;

		min-height: 700px;
		text-align: center;

		& > h2 {
			max-width: 900px;
		}

		& > p {
			width: 750px;
		}
	}
	.placeholder {
		min-height: 50vh;
	}
	.jumbo-container {
		display: flex;
		align-items: center;
		width: calc(100% - #{$gutter * 10});

		.jumbo-main {
			display: flex;
			flex-direction: column;
			flex: 1;
		}
		.jumbo-text {
			font-size: 42px;
			font-family: 'InterSemiBold';
			color: $col-light-1;

			&:last-of-type {
				font-weight: 400;
				color: $col-dark-1;
			}
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
