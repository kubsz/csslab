<script>
	import { createEventDispatcher } from 'svelte/internal';
	const dispatch = createEventDispatcher();

	import { scale } from 'svelte/transition';

	import Icon from '@iconify/svelte';

	import tickIcon from '@iconify/icons-charm/tick.js';

	export let active = false;
	export let label;
	export let color;

	$: dispatch('update', { active });
</script>

<button class:active on:click={() => (active = !active)} class:color style="--col-bg:{color}3d;--color:{color}">
	<div class="checkbox">
		{#if active}
			<div class="icon" transition:scale={{ duration: 300 }}>
				<Icon icon={tickIcon} />
			</div>
		{/if}
	</div>
	<slot name="icon" />
	<span>{label}</span>
</button>

<style lang="scss">
	button {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 1rem;
		border-radius: 0.3rem;
		// padding: 1.5rem;

		user-select: none;
		cursor: pointer;

		&:hover {
			background-color: rgba(0, 0, 0, 0.04);
		}

		.checkbox {
			position: relative;
			@include flexCenter;
			width: 1.6rem;
			height: 1.6rem;
			background-color: $col-light-2;
			border-radius: 0.2rem;
			border: 1px solid rgba(0, 0, 0, 0.1);
			overflow: hidden;

			font-size: 1rem;

			transition: 0.15s ease;
		}
		&.active .checkbox {
			background-color: $col-secondary;
			border-color: $col-secondary;
			color: #fff;
		}

		&.color .checkbox {
			background-color: var(--col-bg);
			color: var(--color);
		}

		&.color.active .checkbox {
			border-color: var(--color);
		}

		span {
			font-size: 1.3rem;
			display: block;
			color: $col-dark-5;
		}
	}
</style>
