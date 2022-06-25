<script>
	import { closeModal } from 'svelte-modals';

	import { scale, fade } from 'svelte/transition';

	import Icon from '@iconify/svelte';
	import closeOutline from '@iconify/icons-eva/close-outline.js';
</script>

<div class="background" transition:fade>
	<div class="modal" transition:scale>
		<button class="close-button" on:click={closeModal}>
			<Icon icon={closeOutline} />
		</button>
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
		backdrop-filter: blur(10px);

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

		.close-button {
			cursor: pointer;
			color: $col-dark-5;
			transition: 0.1s ease;

			&:hover {
				color: $col-dark-1;
			}
		}
	}
</style>
