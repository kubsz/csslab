<script context="module">
	import { buildCrumbs } from '$utils';
	export async function load({ url, session }) {
		const darkPathnames = ['/'];

		return {
			props: {
				dark: darkPathnames.indexOf(url.pathname) > -1,
				user: session.user,
				crumbs: buildCrumbs(url.pathname)
			}
		};
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import { Modals, closeModal } from 'svelte-modals';
	import Footer from '$components/layout/Footer.svelte';
	import Nav from '$components/layout/Nav.svelte';
	import Breadcrumbs from '$components/layout/Breadcrumbs.svelte';

	export let dark = false;
	export let user = null;
	export let crumbs;

	let navHeight = 94;
</script>

<Modals>
	<div transition:fade={{ duration: 400 }} slot="backdrop" class="backdrop" on:click={closeModal} />
</Modals>
<div class="overlay" />
<div class="root" style="--nav-height: {navHeight}px">
	<Nav {user} on:getNavHeight={(e) => (navHeight = e.detail.value > navHeight ? e.detail.value : navHeight)} />
	<div class="content">
		<Breadcrumbs {crumbs} />
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

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
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

	.backdrop {
		background-color: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(20px);
		z-index: 99;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
