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
	import Footer from '../components/layout/Footer.svelte';
	import Nav from '../components/layout/Nav.svelte';

	export let dark = false;
	let navHeight = 94;
</script>

<div class="root" style="--nav-height: {navHeight}px">
	<Nav on:getNavHeight={(e) => (navHeight = e.detail.value > navHeight ? e.detail.value : navHeight)} />
	<div class="content">
		<slot />
	</div>
	<Footer />
</div>

<style lang="scss">
	.root {
		display: flex;
		flex-direction: column;
		&.dark {
			background-color: $col-dark-1;
		}
	}

	.content {
		position: relative;

		flex: 1;
		display: flex;
		flex-direction: column;

		&::before {
			content: '';
			display: block;
			height: var(--nav-height);
			width: 100%;
			background-color: $col-dark-1;
		}
	}
</style>
