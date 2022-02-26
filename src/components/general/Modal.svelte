<script>
	import { scale, fade } from 'svelte/transition';
</script>

<div class="background" transition:fade>
	<div class="modal" transition:scale>
		<slot />
	</div>
</div>

<style lang="scss">
	.background {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		background-color: rgba(0, 0, 0, 0.5);

		z-index: 100;

		/* allow click-through to backdrop */
		pointer-events: none;

		.modal {
			width: 500px;
			background-color: $col-light-1;
			border-radius: $radius;
			pointer-events: all;
			padding: $gutter;
		}
	}
</style>
