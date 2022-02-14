<script>
	import Frame from '../general/Frame.svelte';
	import IconButtons from '../general/IconButtons.svelte';

	import code from '../../tempdata/code';
	import CodeEditor from '../general/CodeEditor.svelte';
	import Button from '../general/Button.svelte';

	export let technologies = [];

	let technology = 'react';

	const components = [
		{
			label: 'ClassicButton',
			value: 'classicbutton'
		},
		{
			label: 'IconInput',
			value: 'iconinput'
		},
		{
			label: 'Cheeseburger',
			value: 'cheeseburger'
		},
		{
			label: 'SelectDropdown',
			value: 'selectdropdown'
		}
	];
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
					on:update={(e) => (technology = e.detail.value)}
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
				<IconButtons modifiers={['wrap']} items={components} />
			</div>
		</div>
	</div>
	<div class="split-section">
		<div class="stack stack-gutter">
			<Frame modifiers={['center']}>
				<Button>Explore Components</Button>
			</Frame>
			<CodeEditor code={code[technology]} />
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
