<script>
	export let texture;
	export let theme = 'light';
	export let padding = null;
	export let modifiers = [];

	let mousePosition = { left: 0, top: 0 };

	const handleMouseMove = (e) => {
		if (!texture) return;
		mousePosition = { left: e.clientX, top: e.clientY };
	};
</script>

<svelte:window on:mousemove={handleMouseMove} />
<div class="section {theme}{modifiers ? ` ${modifiers.join(' ')}` : ''}" style={padding ? `padding:10rem 0` : ''}>
	<div class="section-content margin">
		<slot />
	</div>
	{#if texture}
		<div class="texture-overlay">
			<span class="texture-opening" style="left:{mousePosition.left}px;top:{mousePosition.top}px" />
		</div>
	{/if}
</div>

<style lang="scss">
	.section {
		position: relative;
		z-index: 1;

		&.padding-bottom {
			padding-bottom: 10rem;
		}

		&.padding-vertical-10 {
			padding: 10rem 0;
		}
		&.dark {
			background-color: $col-dark-1;
		}
		&.lightish {
			background-color: $col-light-2;
		}
	}
	.section-content {
		position: relative;
		z-index: 3;
	}

	.texture-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 1;
		&::before,
		.texture-opening {
			content: '';
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: 1;
		}

		&::before {
			background-image: url('/textures/crisscross.png');
			background-size: 150px;
			opacity: 1;
		}
		.texture-opening {
			background-image: radial-gradient(rgba($col-dark-1, 1), $col-dark-1 20vw);
			background-position: center;
			width: 200vw;
			height: 200vw;
			z-index: 1;

			transform: translate(-50%, -50%);

			// background-image: linear-gradient(to top, $col-dark-1, transparent, $col-dark-1);
			// background-image: linear-gradient(to top, transparent, $col-dark-1);
		}
	}
</style>
