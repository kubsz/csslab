<script>
	import Card from '$components/general/Card.svelte';

	import Section from '$components/layout/Section.svelte';
</script>

<Section margin modifiers={['padding-bottom']}>
	<div class="header">
		<div class="info">
			<h1>Component Name</h1>
			<p class="description">The component description will go here...</p>
		</div>
	</div>

	<div class="technology-container" />
	<div class="main row">
		<div class="col-6">
			<Card>prop info</Card>
		</div>
		<div class="col-14">
			<div class="showcase" />
		</div>
	</div>
</Section>

<style lang="scss">
	.header {
		padding: 1.5rem;
	}
</style>
