<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let placeholder;
	export let units;
	export let type;

	let value;

	$: dispatch('update', { value });
</script>

<div class="input-container">
	<input type="text" {placeholder} bind:value />
</div>

<style lang="scss">
	.input-container {
		display: flex;
		width: 100%;

		input {
			padding: 1rem;
			background-color: rgba(255, 255, 255, 0.1);
			border-radius: $radius;
			font-size: 1.2rem;
			flex: 1;
		}
	}
</style>
