<script>
	import { fly } from 'svelte/transition';

	import axios from 'axios';

	import { strapiImage } from '$lib/strapi';
	import inject from '$directives/inject';
	import clickOutside from '$directives/clickOutside';

	import Icon from '@iconify/svelte';

	import caretDownFill from '@iconify/icons-bi/caret-down-fill.js';
	import userIcon from '@iconify/icons-bx/user.js';
	import logoutIcon from '@iconify/icons-ic/twotone-logout.js';
	import settingsIcon from '@iconify/icons-carbon/settings.js';
	import { getDropdownPosition } from '$lib/utils';

	export let user;

	let buttonRef;
	let dropdownActive = false;
	let windowWidth;

	const handleLogout = async () => {
		const response = await axios.get('/api/auth/logout');

		document.location.reload();
	};
</script>

<svelte:window bind:innerWidth={windowWidth} />
<div class="user-container">
	<a href="/" class="image-button">
		<img src={strapiImage(user.image, 'thumbnail')} alt="{user.username} profile image" />
	</a>
	<button
		class="username-button disable_clickoutside"
		class:active={dropdownActive}
		bind:this={buttonRef}
		on:click={() => (dropdownActive = !dropdownActive)}
	>
		<span>{user.username}</span>
		<Icon icon={caretDownFill} />
	</button>
</div>
{#if dropdownActive}
	<div
		class="user-dropdown"
		use:clickOutside
		on:clickOutside={() => (dropdownActive = false)}
		transition:fly={{ y: 20 }}
		use:inject={{ selector: '.overlay', styles: getDropdownPosition(buttonRef) }}
	>
		<button on:click={() => {}}>
			<Icon icon={userIcon} />
			<span>Profile</span>
		</button>
		<button on:click={() => {}}>
			<Icon icon={settingsIcon} />
			<span>Settings</span>
		</button>
		<button on:click={handleLogout}>
			<Icon icon={logoutIcon} />
			<span>Logout</span>
		</button>
	</div>
{/if}

<style lang="scss">
	.user-container {
		display: flex;
		align-items: center;

		.image-button {
			width: 5rem;
			height: 5rem;
			border-radius: 50%;
			overflow: hidden;

			position: relative;
			z-index: 3;

			background-color: $col-dark-3;
			box-shadow: 0 0 0 5px $col-dark-1;

			img {
				width: 100%;
				height: 100%;
				display: block;
				object-fit: cover;
				object-position: center;
			}
		}

		.username-button {
			color: $col-light-3;
			font-size: 1.3rem;
			padding: 1rem 1rem 1rem 3rem;
			transform: translateX(-1.5rem);
			background-color: rgba($col-primary, 0.2);
			color: rgba($col-primary, 0.7);
			font-weight: 600;

			display: flex;
			align-items: center;
			gap: 0.5rem;

			border-radius: $radius;
			cursor: pointer;

			:global(svg) {
				transition: 0.2s ease;
				font-size: 1.1rem;
			}

			&:hover,
			&.active {
				background-color: rgba($col-primary, 0.3);
				color: rgba($col-primary, 0.9);
			}

			&.active {
				:global(svg) {
					transform: rotateX(180deg);
				}
			}
		}
	}

	:global(.user-dropdown) {
		background-color: rgb(43, 43, 43);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(24px);
		border-radius: $radius;
		width: 18rem;
		position: absolute;
		padding: 1rem !important;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		button {
			padding: 1rem;
			text-align: left;
			color: rgba(255, 255, 255, 0.5);
			border-radius: $radius;
			font-size: 1.2rem;

			cursor: pointer;
			transition: 0.1s ease;

			display: flex;
			align-items: center;

			:global(svg) {
				font-size: 1.4rem;
				padding-right: 1rem;
				color: rgba(255, 255, 255, 0.3);
				width: 1.6rem;
				box-sizing: content-box;
			}

			&:hover {
				background-color: rgba(255, 255, 255, 0.1);
				color: $col-light-1;

				:global(svg) {
					color: rgba(255, 255, 255, 0.8);
				}
			}
		}
	}
</style>
