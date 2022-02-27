<script>
	import Icon from '@iconify/svelte';

	export let title;
	export let icon;
	export let subtext;
</script>

<div class="modal-header">
	<div class="icon-container">
		<Icon {icon} />
	</div>
	<h3>{title}</h3>
	<p>{subtext}</p>
</div>

<style lang="scss">
	.modal-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;

		.icon-container {
			width: 64px;
			height: 64px;
			padding: 15px;
			margin-bottom: 2rem;

			background-color: rgba($col-secondary, 0.2);
			border: 1px solid rgba($col-secondary, 0.3);
			color: darken($col-secondary, 0%);
			border-radius: 50%;

			:global(svg) {
				height: 100%;
				width: auto;
			}
		}

		h3 {
			font-family: 'InterSemiBold';
			font-size: 2.4rem;
			margin-bottom: 0.6rem;
		}

		p {
			text-align: center;
			font-size: 1.4rem;
			color: $col-dark-4;
		}
	}
</style>
