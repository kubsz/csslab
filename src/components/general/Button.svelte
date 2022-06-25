<script>
	import { fly } from 'svelte/transition';

	export let href = null;
	export let modifiers = [];

	// showcaseTransition only set true when being used on Homepage technology showcase
	export let showcaseTransition = false;

	const animate = (node, args) => (args.cond ? fly(node, args) : null);

	let classes = ['btn', ...modifiers].join(' ');
</script>

{#if href}
	<a {href} class={classes}> <slot /></a>
{:else}
	<button
		on:click
		class={classes}
		in:animate={{ x: 220, cond: showcaseTransition, delay: 150 }}
		out:animate={{ x: -220, cond: showcaseTransition }}
	>
		<slot /></button
	>
{/if}

<style lang="scss">
	.btn {
		background-color: $col-dark-2;
		color: $col-light-3;
		padding: 1em 1.5em;
		font-size: 1.3rem;
		font-weight: 500;
		border-radius: $radius;

		display: inline-block;

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

		&.uppercase {
			text-transform: uppercase;
			letter-spacing: 1px;
			font-size: 1.2rem;
			font-weight: 700;
		}

		&.block {
			display: block;
			width: 100%;
		}

		&.light {
			background-color: rgba(0, 0, 0, 0.2);
			color: rgba(0, 0, 0, 0.7);
		}

		&.large {
			font-size: 1.6rem;
		}
	}
</style>
