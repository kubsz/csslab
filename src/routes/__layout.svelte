<script context="module">
	export async function load(pg) {
		const darkPathnames = ['/'];
		return {
			props: {
				dark: darkPathnames.indexOf(pg.url.pathname) > -1
			}
		};
	}
</script>

<script>
	import Nav from '../components/layout/Nav.svelte';

	export let dark = false;

	let mousePosition = { left: 0, top: 0 };

	const handleMouseMove = (e) => {
		if (!dark) return;
		mousePosition = { left: e.clientX, top: e.clientY };
	};
</script>

<svelte:window on:mousemove={handleMouseMove} />
<div class="root" class:dark>
	<Nav dark={!dark} />
	<div class="content">
		<slot />
	</div>
	{#if dark}
		<div class="texture-overlay">
			<span class="texture-opening" style="left:{mousePosition.left}px;top:{mousePosition.top}px" />
		</div>
	{/if}
</div>

<style lang="scss">
	.root {
		&.dark {
			background-color: $col-dark-1;
		}
		.texture-overlay {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
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
				opacity: 0.7;
			}
			.texture-opening {
				background-image: radial-gradient(transparent, $col-dark-1 600px);
				background-position: center;
				width: 200vw;
				height: 200vw;
				z-index: 1;

				transform: translate(-50%, -50%);

				// background-image: linear-gradient(to top, $col-dark-1, transparent, $col-dark-1);
				// background-image: linear-gradient(to top, transparent, $col-dark-1);
			}
		}
	}

	.content {
		position: relative;
		z-index: 2;
	}
</style>
