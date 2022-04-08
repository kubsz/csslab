<script>
	import Section from '../../components/layout/Section.svelte';

	const options = [
		{ label: 'Buttons', value: 'buttons', icon: '' },
		{ label: 'Inputs', value: 'inputs', icon: '' },
		{ label: 'Dropdowns', value: 'dropdowns', icon: '' },
		{ label: 'Hamburgers', value: 'hamburgers', icon: '' },
		{ label: 'Checkboxes', value: 'checkboxes', icon: '' }
	];
</script>

<Section margin modifiers={['u-padding-top-5']}>
	<div class="u-center-text">
		<span class="typ-heading-tertiary u-color-secondary u-weight-900 large">Fully Responsive Components</span>
		<h2 class="typ-heading-primary bold">All Components</h2>
		<p class="typ-subtext">
			Browse a variety of components that have been uploaded to CSSLab by fellow developers! Search, sort, and filter the components to help
			find what you're looking for.
		</p>
	</div>
	<div class="filters">
		<!-- <Radio {options} /> -->
	</div>
	<div class="component-list" />
</Section>

<style lang="scss">
</style>
