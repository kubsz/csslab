<script>
	import Card from './Card.svelte';
	export let modifiers = [];

	$: classes = ['card', ...modifiers].join(' ');
</script>

<div class={classes}>
	<slot />
</div>

<style lang="scss">
	.card {
		padding: 1.5rem;
		background-color: $col-dark-1;
		border-radius: $radius;
		color: $col-light-3;

		&.dark-3 {
			background-color: $col-dark-2;
		}
	}
</style>
