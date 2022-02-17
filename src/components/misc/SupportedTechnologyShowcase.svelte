<script>
	import axios from 'axios';
	import { browser } from '$app/env';

	import { fade } from 'svelte/transition';
	import Frame from '../general/Frame.svelte';
	import IconButtons from '../general/IconButtons.svelte';

	import languages from '../../tempdata/code';
	import CodeEditor from '../general/CodeEditor.svelte';

	import Button from '../general/Button.svelte';
	import IconInput from '../general/IconInput.svelte';
	import Hamburger from '../general/Hamburger.svelte';
	import SelectDropdown from '../general/SelectDropdown.svelte';

	import svelteIcon from '@iconify/icons-cib/svelte.js';

	export let technologies = [];

	const components = [
		{
			label: 'ClassicButton',
			value: 'classicbutton',
			component: Button,
			path: '/general/Button.svelte',
			props: {},
			slot: 'Welcome'
		},
		{
			label: 'IconInput',
			value: 'iconinput',
			component: IconInput,
			path: '/general/IconInput.svelte',
			props: {
				placeholder: 'Enter some text...'
			}
		},
		{
			label: 'Hamburger',
			value: 'hamburger',
			component: Hamburger,
			path: '/general/Hamburger.svelte',
			props: {}
		},
		{
			label: 'SelectDropdown',
			value: 'selectdropdown',
			component: SelectDropdown,
			path: '/general/SelectDropdown.svelte',
			props: {
				placeholder: 'lol 3'
			}
		}
	];

	let activeTechnology = 'svelte';
	let activeComponent = 'classicbutton';
	let componentCode = '';

	$: componentObject = components.find((comp) => comp.value === activeComponent);
	$: {
		getComponentCode(componentObject.path);
	}

	const getComponentCode = async (path) => {
		console.log('getting');
		if (!browser) {
			componentCode = 'lol';
			return;
		}

		const res = await axios.post('/api/get-component-code', { path });
		const { file } = res.data;

		componentCode = file;
	};
</script>

<div class="split break-m align-center double-gutter">
	<div class="split-section">
		<div class="stack stack-10">
			<span class="typ-heading-tertiary">Technologies</span>
			<h3 class="typ-heading-primary">Extensive List of Supported Languages and Frameworks</h3>
			<p class="typ-subtext">A myriad of technologies, to minimize the stress of choosing a framework for your next application.</p>
			<div class="technology-buttons">
				<h5 class="typ-heading-secondary">Choose Technology</h5>
				<IconButtons
					requireOne
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
				<IconButtons requireOne on:update={(e) => (activeComponent = e.detail.value)} modifiers={['wrap']} items={components} />
			</div>
		</div>
	</div>
	<div class="split-section">
		<div class="stack stack-gutter">
			<div class="u-overflow-hidden">
				<Frame modifiers={['center', 'overflow-hidden']}>
					<svelte:component this={componentObject.component} showcaseTransition={true} {...componentObject.props}>
						{componentObject.slot}
					</svelte:component>
				</Frame>
			</div>
			<CodeEditor config={languages[activeTechnology]} tabs={[{ name: 'lol.svelte', language: 'javascript', code: componentCode }]} />
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
