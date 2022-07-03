<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import Icon from '@iconify/svelte';

	export let placeholder;
	export let units;
	export let type;
	export let iconButton;
	export let iconButtonRef;
	export let defaultValue;
	export let color;

	let value = defaultValue;

	console.log(defaultValue);

	export const setInputValue = (newVal) => {
		value = newVal;
	};

	$: dispatch('update', { value });
</script>

<div class="input-container">
	{#if color}
		<div class="icon color-box" on:click={() => dispatch('iconClick')} style="background-color:{value}" />
	{/if}
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

		.icon {
			display: block;
			min-width: 1.5rem;
			width: 1.8rem;
			height: 1.8rem;
			margin-right: 0.75rem;

			&.color-box {
				border-radius: 0.2rem;
				box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);

				cursor: pointer;
			}
		}

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
