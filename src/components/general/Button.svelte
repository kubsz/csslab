<script>
	export let href;
	export let modifiers = [];

	let classes = ['btn', ...modifiers].join(' ');
</script>

{#if href}
	<a {href} class={classes}> <slot /></a>
{:else}
	<button class={classes}> <slot /></button>
{/if}

<style lang="scss">
	.btn {
		background-color: $col-dark-2;
		color: $col-light-3;
		padding: 1em 1.5em;
		font-size: 1.4rem;
		font-weight: 500;
		border-radius: $radius;

		cursor: pointer;
		transition: all 0.15s ease;

		&:hover {
			background-color: $col-dark-3;
			color: $col-light-2;
		}

		&.primary {
			background-color: $col-primary;
			color: $col-dark-2;
			font-weight: 700;
			&:hover {
				background-color: lighten($col-primary, 5%);
				color: $col-dark-1;
			}
		}

		&.secondary {
			background-color: $col-secondary;
			color: $col-light-1;
			&:hover {
				background-color: lighten($col-secondary, 5%);
				color: $col-light-1;
			}
		}

		&.large {
			font-size: 1.6rem;
		}
	}
</style>
