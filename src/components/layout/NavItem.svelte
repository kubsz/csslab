<script>
	import { openModal, closeModal } from 'svelte-modals';

	import Icon from '@iconify/svelte';
	import chevronDown from '@iconify/icons-charm/chevron-down.js';
	import NavDropdown from '../NavDropdown.svelte';

	export let label, link;
	export let dropdown = null;
	export let fill = false;
	export let modalConfig;

	let dropdownActive = false;

	const handleClick = (e) => {
		if (modalConfig) {
			e.preventDefault();
			openModal(modalConfig.component, modalConfig.props);
		}
	};
</script>

<li
	on:mouseenter|self={!dropdown || (() => (dropdownActive = true))()}
	on:mouseleave|self={!dropdown || (() => (dropdownActive = false))()}
>
	<a class:fill href={link} on:click={handleClick}>
		<span>{label}</span>
		{#if dropdown}
			<Icon class="arrow" icon={chevronDown} />
		{/if}
	</a>
	<div class="dropdown-container" class:u-pointer-events-none={!dropdownActive}>
		{#if dropdownActive}
			<NavDropdown heading={label} {dropdown} />
		{/if}
	</div>
</li>

<style lang="scss">
	li {
		position: relative;
		a {
			color: $col-light-3;
			font-size: 1.5rem;
			font-weight: 600;

			display: flex;
			align-items: center;
			gap: 6px;

			transition: 0.1s ease;

			:global(.arrow) {
				width: 1.6rem;
				display: flex;
				justify-content: center;
			}

			&.fill {
				background-color: $col-primary;
				color: $col-dark-1;
				padding: 1rem 1.2rem;
				border-radius: $radius;
				font-weight: 700;
				font-size: 1.4rem;

				&:hover {
					background-color: lighten($col-primary, 10%);
				}
			}

			&:not(.fill):hover {
				color: $col-light-3;
			}
		}
	}
</style>
