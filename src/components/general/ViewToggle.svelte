<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import Icon from '@iconify/svelte';

	export let options = [];
	export let defaultValue = options[0].value;

	let value = defaultValue;

	$: dispatch('update', value);
</script>

<div class="container">
	{#each options as option}
		<button class:active={value === option.value} on:click={() => (value = option.value)}>
			<Icon icon={option.icon} />
		</button>
	{/each}
</div>

<style lang="scss">
	.container {
		display: flex;
		gap: 1rem;
		button {
			background-color: $col-light-2;
			border: 1px solid rgba(0, 0, 0, 0.1);
			border-radius: 0.2rem;
			width: 3.2rem;
			height: 3.2rem;

			@include flexCenter;

			&.active {
				background-color: $col-primary;
				color: darken($col-primary, 60%);
			}

			&:not(.active):hover {
				background-color: rgba($col-primary, 0.2);
				color: darken($col-primary, 40%);
			}

			:global(svg) {
			}
		}
	}
</style>
