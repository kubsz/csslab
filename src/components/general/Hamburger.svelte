<script>
	export let thickness;
	export let width;

	export let active = false;

	$: variables = Object.entries({ thickness, width })
		.map(([key, val]) => `--${key}:${val}`)
		.join(';');
</script>

<button class="hamburger" class:active on:click={() => (active = !active)} style={variables}>
	<span />
	<span />
	<span />
</button>

<style lang="scss">
	.hamburger {
		width: var(--width);
		height: calc(var(--width) * 0.65);

		position: relative;
		cursor: pointer;

		span {
			display: block;
			width: 100%;
			height: var(--thickness);
			position: absolute;
			background-color: rgba(255, 255, 255, 0.7);
			border-radius: 0.2rem;

			transition: 0.2s ease;

			&:nth-of-type(1) {
				top: 0;
			}

			&:nth-of-type(2) {
				top: calc(50% - (var(--thickness) / 2));
			}

			&:nth-of-type(3) {
				top: calc(100% - var(--thickness));
			}
		}

		&:hover span {
			background-color: $col-light-1;
		}

		&.active {
			span {
				&:nth-of-type(1) {
					top: calc(50% - (var(--thickness) / 2));
					transform: rotate(45deg);
				}

				&:nth-of-type(2) {
					opacity: 0;
				}

				&:nth-of-type(3) {
					top: calc(50% - (var(--thickness) / 2));
					transform: rotate(-45deg);
				}
			}
		}
	}
</style>
