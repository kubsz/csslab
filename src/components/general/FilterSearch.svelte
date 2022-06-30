<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import searchIcon from '@iconify/icons-bytesize/search.js';
	import closeOutline from '@iconify/icons-eva/close-outline.js';

	export let placeholder;
	export let defaultValue = '';

	let value = defaultValue;

	$: dispatch('update', value);
</script>

<div class="input-container">
	<input spellcheck="false" type="text" {placeholder} bind:value />
	{#if value.length}
		<button on:click={() => (value = '')} transition:fly={{ y: 15 }}>
			<Icon icon={closeOutline} />
		</button>
	{/if}
</div>

<style lang="scss">
	.input-container {
		display: flex;
		align-items: center;
		// background-color: $col-light-2;
		border: 1px solid rgba(0, 0, 0, 0.08);
		background-color: rgba(0, 0, 0, 0.02);
		padding: 1.5rem;
		border-radius: 0.3rem;
		gap: 1.5rem;

		width: 100%;

		& > :global(svg) {
			color: rgba(0, 0, 0, 0.3);
		}

		input {
			flex: 1;
			font-size: 1.4rem;
			padding: 0.4rem 0;
		}

		button {
			@include flexCenter;
			font-size: 1.8rem;

			color: $col-dark-6;

			cursor: pointer;
			transition: 0.1s ease;

			&:hover {
				color: $col-dark-3;
			}

			:global(svg) {
				display: block;
			}
		}
	}
</style>
