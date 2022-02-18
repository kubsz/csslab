<script>
	import Icon from '@iconify/svelte';

	export let icon;
	export let size = '48px';
	export let color = 'rgba(255,255,255,.8)';
	export let speed = '1.5s';
</script>

<div class="spinning-icon" style="--size: {size}; --color: {color}; --speed: {speed}">
	<Icon {icon} />
</div>

<style lang="scss">
	.spinning-icon {
		display: block;
		width: var(--size);
		height: var(--size);
		color: var(--color);

		animation: spin var(--speed) ease infinite;

		:global(svg) {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
</style>
