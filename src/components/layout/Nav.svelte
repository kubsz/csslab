<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import NavItem from './NavItem.svelte';

	import Logo from '../../assets/logo-light.svg';

	import LoginModal from '../modals/LoginModal.svelte';
	import SignUpModal from '../modals/SignUpModal.svelte';
	import Hamburger from '../general/Hamburger.svelte';

	import formDropdown from '@iconify/icons-mdi/form-dropdown.js';
	import hamburgerIcon from '@iconify/icons-mdi/hamburger.js';
	import searchIcon from '@iconify/icons-charm/search.js';
	import baselineMiscellaneousServices from '@iconify/icons-ic/baseline-miscellaneous-services.js';
	import cursorClick from '@iconify/icons-heroicons-solid/cursor-click.js';
	import popupIcon from '@iconify/icons-entypo/popup.js';

	import reactFill from '@iconify/icons-akar-icons/react-fill.js';
	import vueFill from '@iconify/icons-akar-icons/vue-fill.js';
	import svelteIcon from '@iconify/icons-cib/svelte.js';
	import javascriptFill from '@iconify/icons-akar-icons/javascript-fill.js';

	let navRef;

	export let colors = null;
	export let dark = false;

	let mobileNavActive = false;

	let windowWidth;

	let scrollY = 0;

	const options = [
		{
			label: 'Home',
			link: '/'
		},
		{
			label: 'Components',
			link: '/components',
			dropdown: {
				sections: [
					{
						title: 'Buttons',
						description: 'Enhance user interactions by providing stylish and customizable buttons.',
						link: '/components/buttons',
						icon: cursorClick,
						color: [52, 89, 149]
					},
					{
						title: 'Inputs',
						description: 'Add another level to your forms with these wonderful input fields.',
						link: '/components/inputs',
						icon: searchIcon,
						color: [255, 164, 0]
					},
					{
						title: 'Dropdowns',
						description: 'Fed up of the default select styling? Check out these select dropdowns.',
						link: '/components/dropdowns',
						icon: formDropdown,
						color: [82, 81, 116],
						badge: 'Recently Added'
					},
					{
						title: 'Modals',
						description: "Get ready to be wow'ed by these awesome modal ideas and animations!",
						link: '/components/modals',
						icon: popupIcon,
						color: [85, 139, 110]
					},
					{
						title: 'Hamburgers',
						description: 'Checkout a bunch of imaginative hamburgers with awesome animations',
						link: '/components/hamburgers',
						icon: hamburgerIcon,
						color: [220, 127, 155]
					},
					{
						title: 'Misc',
						description: 'See a variety of miscellaneous components submitted by csslab users.',
						link: '/components/misc',
						icon: baselineMiscellaneousServices,
						color: [61, 163, 93],
						badge: 'Recently Added'
					}
				],
				footer: {
					title: 'Contribute to CSSLab',
					description: 'Create your own customizable component and add it to your profile.',
					button: {
						text: 'Create',
						link: '/create'
					}
				}
			}
		},
		{
			label: 'Technologies',
			link: '/technologies',
			dropdown: {
				sections: [
					{
						title: 'React',
						description: 'Add beautiful csslab components directly into your react.js projects.',
						link: '/technologies/react',
						icon: reactFill,
						color: [110, 208, 241]
					},
					{
						title: 'Vue',
						description: 'Add beautiful csslab components directly into your vue.js projects.',
						link: '/technologies/vue',
						icon: vueFill,
						color: [63, 185, 132]
					},
					{
						title: 'Svelte',
						description: 'Add beautiful csslab components directly into your Svelte projects.',
						link: '/technologies/svelte',
						icon: svelteIcon,
						color: [242, 57, 0],
						badge: 'New'
					},
					{
						title: 'JavaScript',
						description: 'Add beautiful csslab components directly into your vanilla JavaScript projects.',
						link: '/technologies/javascript',
						icon: javascriptFill,
						color: [240, 220, 27],
						recentlyAdded: true
					}
				]
			}
		},
		{
			label: 'Blog',
			link: '/blog'
		},
		{
			label: 'Sign In',
			link: '/sign-in',
			right: true,
			modalConfig: {
				component: LoginModal,
				props: {}
			}
		},
		{
			label: 'Sign Up',
			link: '/sign-up',
			right: true,
			fill: true,
			modalConfig: {
				component: SignUpModal,
				props: {}
			}
		}
	];

	const getNavHeight = () => dispatch('getNavHeight', { value: Math.ceil(navRef.getBoundingClientRect().height) });

	onMount(getNavHeight);
</script>

<svelte:window on:resize={getNavHeight} bind:scrollY on:scroll={getNavHeight} bind:innerWidth={windowWidth} />
<nav bind:this={navRef} class:shadow={false}>
	<a href="/" class="logo">
		<Logo />
	</a>
	{#if windowWidth > 992}
		<ul>
			{#each options.filter((opt) => !opt.right) as option}
				<NavItem {...option} />
			{/each}
		</ul>
		<ul>
			{#each options.filter((opt) => opt.right) as option}
				<NavItem label={option.label} link={option.link} fill={option.fill} modalConfig={option.modalConfig} />
			{/each}
		</ul>
	{:else}
		<div class="hamburger-container">
			<Hamburger thickness=".2rem" width="3.2rem" bind:active={mobileNavActive} />
		</div>
		{#if mobileNavActive}
			<div class="nav-dropdown" transition:fly={{ y: -500 }}>yeet</div>
		{/if}
	{/if}
</nav>

<style lang="scss">
	:global(.nav-dropdown) {
		position: absolute;
		background-color: red;
		left: 0;
		height: 500px;
		width: 100%;
		top: 10rem;
	}
	nav {
		position: fixed;
		width: 100%;
		z-index: 6;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: $gutter * 1.5 $gutter * 2;

		background-color: $col-dark-1;

		// transition: 0.2s ease;

		&.shadow {
			padding: $gutter;
			box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
			// background-color: $col-dark-3;
		}

		.logo {
			width: 12rem;
			padding: 0.5rem 0;
		}

		ul {
			display: flex;
			align-items: center;
			gap: $gutter * 2;
		}
		.hamburger-container {
			padding: 0 1.5rem;
			align-self: stretch;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
