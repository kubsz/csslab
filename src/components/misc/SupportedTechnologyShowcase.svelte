<script>
	import axios from 'axios';
	import { browser } from '$app/env';

	import Frame from '../general/Frame.svelte';
	import IconButtons from '../general/IconButtons.svelte';

	import CodeEditor from '../general/CodeEditor.svelte';

	import ExampleButtonShowcase from '../../CSSLAB_FILES/components/svelte/ExampleButton/index.svelte';
	import HamburgerShowcase from '../../CSSLAB_FILES/components/svelte/Hamburger/index.svelte';
	import IconInputShowcase from '../../CSSLAB_FILES/components/svelte/IconInput/index.svelte';
	import SelectDropdownShowcase from '../../CSSLAB_FILES/components/svelte/SelectDropdown/index.svelte';

	export let technologies = [];

	const showcaseComponents = [
		{ label: 'Button', value: 'ExampleButton', component: ExampleButtonShowcase },
		{ label: 'IconInput', value: 'IconInput', component: IconInputShowcase },
		{ label: 'Hamburger', value: 'Hamburger', component: HamburgerShowcase },
		{ label: 'SelectDropdown', value: 'selectdropdown', component: SelectDropdownShowcase }
	];

	let activeTechnology = 'svelte';
	let activeComponent = 'ExampleButton';
	let componentFiles = '';

	$: componentObject = showcaseComponents.find((comp) => comp.value === activeComponent);
	$: {
		if (activeTechnology && activeComponent) getComponentCode(`/components/${activeTechnology}/${activeComponent}/`);
	}

	const getComponentCode = async (path) => {
		if (!browser) {
			componentCode = 'lol';
			return;
		}

		const res = await axios.post('/api/get-component-code', { path, technology: activeTechnology });

		const { files } = res.data;
		componentFiles = files;
	};
</script>

<div class="row align-center double-gutter full-height">
	<div class="col col-10 col-20-992">
		<div class="stack stack-10">
			<span class="typ-heading-tertiary">Technologies</span>
			<h3 class="typ-heading-primary">Extensive List of Supported Languages and Frameworks</h3>
			<p class="typ-subtext">A myriad of technologies, to minimize the stress of choosing a framework for your next application.</p>
			<div class="technology-buttons">
				<h5 class="typ-heading-secondary">Choose Technology</h5>
				<IconButtons
					requireOne
					defaultValue={activeTechnology}
					on:update={(e) => (activeTechnology = e.detail.value)}
					modifiers={['wrap', 'square']}
					items={technologies.map((x) => ({
						label: x.title,
						value: x.title.toLowerCase().split(' ').join('_'),
						icon: x.icon,
						color: x.color
					}))}
				/>
			</div>
			<div class="technology-buttons">
				<h5 class="typ-heading-secondary">Choose Component</h5>
				<IconButtons
					requireOne
					defaultValue={activeComponent}
					on:update={(e) => (activeComponent = e.detail.value)}
					modifiers={['wrap']}
					items={showcaseComponents}
				/>
			</div>
		</div>
	</div>
	<div class="col col-10 col-20-992">
		<div class="stack stack-gutter">
			<div class="u-overflow-hidden">
				<Frame modifiers={['center', 'overflow-hidden']}>
					<svelte:component this={componentObject.component} showcaseTransition={true} {...componentObject.props}>
						{componentObject.slot}
					</svelte:component>
				</Frame>
			</div>
			<CodeEditor {technologies} technologyId={activeTechnology} tabs={componentFiles} />
		</div>
	</div>
</div>

<style lang="scss">
	.technology-buttons {
		margin-top: $gutter;
		display: flex;
		flex-direction: column;
		gap: $gutter;
	}

	.code-editor {
		background-color: $col-dark-3;
		border-radius: $radius;
		padding: $gutter;
		min-height: 50rem;
	}
</style>
