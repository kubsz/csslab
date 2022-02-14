<script>
	export let placeholder = 'Start typing...';
	export let buttonText = 'Search';
</script>

<div class="container">
	<input {placeholder} />
	<button on:click>{buttonText}</button>
</div>

<style lang="scss">
	.container {
		display: flex;
		align-items: stretch;
		background-color: rgba(255, 255, 255, 0.05);
		// border: 2px solid rgba(255, 255, 255, 0.07);
		border-radius: $radius;

		input {
			padding: $gutter;
			color: $col-light-1;
		}

		button {
			background-color: $col-primary;
			padding: 10px 15px;
			color: $col-dark-3;
			// margin: 0.5rem;
			border-radius: 0 $radius $radius 0;

			// font-weight: 900;
			// font-size: 1.2rem;
			// letter-spacing: 1px;
			// text-transform: uppercase;

			font-weight: 600;
			cursor: pointer;

			&:hover {
				background-color: darken($col-primary, 10%);
				color: $col-dark-1;
			}
		}
	}
</style>
