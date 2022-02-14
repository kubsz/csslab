<script>
	export let modifiers = [];

	const classes = ['frame', ...modifiers].join(' ');
</script>

<div class={classes}>
	<slot />
</div>

<style lang="scss">
	.frame {
		background-color: $col-dark-4;
		min-height: 20rem;
		border-radius: $radius;
		padding: $gutter;
		color: $col-light-3;

		&.center {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>
