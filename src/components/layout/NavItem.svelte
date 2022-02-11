<script>
	import Icon from '@iconify/svelte';
	import chevronDown from '@iconify/icons-charm/chevron-down.js';
	import NavDropdown from '../NavDropdown.svelte';

	export let label, link;
	export let dropdown = null;
	export let fill = false;

	let dropdownActive = false;
</script>

<li on:mouseenter={!dropdown || (() => (dropdownActive = true))()} on:mouseleave={!dropdown || (() => (dropdownActive = false))()}>
	<a class:fill href={link}>
		<span>{label}</span>
		{#if dropdown}
			<Icon class="arrow" icon={chevronDown} />
		{/if}
	</a>
	{#if dropdownActive}
		<NavDropdown heading={label} {dropdown} />
	{/if}
</li>

<style lang="scss">
	li {
		position: relative;
		a {
			color: $col-light-4;
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
				padding: 1rem;
				border-radius: $radius;
				font-weight: 700;

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
