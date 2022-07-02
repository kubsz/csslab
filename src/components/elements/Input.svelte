<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import Icon from '@iconify/svelte';

	export let placeholder;
	export let units;
	export let type;
	export let iconButton;
	export let iconButtonRef;

	let value;

	export const setInputValue = (newVal) => {
		value = newVal;
	};

	$: dispatch('update', { value });
</script>

<div class="input-container">
	<input type="text" {placeholder} bind:value />
	{#if iconButton}
		<button class="icon-button disable_clickoutside" on:click={() => dispatch('iconClick')} bind:this={iconButtonRef}>
			<Icon icon={iconButton} />
		</button>
	{/if}
</div>

<style lang="scss">
	.input-container {
		display: flex;
		width: 100%;
		padding: 1rem;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: $radius;

		input {
			font-size: 1.2rem;
			flex: 1;
		}

		.icon-button {
			cursor: pointer;

			&:hover {
				color: #fff;
			}
		}
	}
</style>
