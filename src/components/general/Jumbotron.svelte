<script>
	export let modifiers = [];

	$: classes = ['container', ...modifiers].join(' ');
</script>

<div class={classes}>
	<slot />
</div>

<style lang="scss">
	.container {
		background-image: linear-gradient(to top left, $col-secondary, darken($col-secondary, 5%));
		width: calc(100% - #{$gutter * 6});
		height: 32rem;
		border-radius: $radius;

		margin: $gutter * 2 $gutter * 3;

		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

		&.center {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
</style>
