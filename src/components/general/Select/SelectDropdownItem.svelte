<script>
	export let label;
	export let icon;
	export let value;
	export let active;

	export let orderToggle;
	export let ascending;

	import Icon from '@iconify/svelte';
	import chevronDown from '@iconify/icons-charm/chevron-down.js';
</script>

<li>
	<button class:active on:click>
		<span>{label}</span>
		{#if orderToggle && active}
			<div class="order-chevron" class:ascending>
				<Icon icon={chevronDown} />
			</div>
		{/if}
	</button>
</li>

<style lang="scss">
	button {
		padding: 1rem;
		display: flex;
		align-items: center;

		span {
			font-size: 1.3rem;
		}

		:global(svg) {
			font-size: 1.1rem;
		}

		.order-chevron {
			margin-left: auto;
			&.ascending {
				transform: rotateX(180deg);
			}
		}
		&.active {
			background-color: $col-primary;
		}
	}
</style>
