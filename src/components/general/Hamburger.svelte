<script>
	import { fly } from 'svelte/transition';

	// showcaseTransition only set true when being used on Homepage technology showcase
	export let showcaseTransition = false;

	const animate = (node, args) => (args.cond ? fly(node, args) : null);
</script>

<button in:animate={{ x: 220, cond: showcaseTransition, delay: 150 }} out:animate={{ x: -220, cond: showcaseTransition }}>
	<span class="bar" />
	<span class="bar" />
	<span class="bar" />
</button>

<style lang="scss">
	button {
		--thickness: 4px;
		width: 40px;
		height: 26px;
		position: relative;
		cursor: pointer;

		.bar {
			position: absolute;
			display: block;
			width: 100%;
			height: var(--thickness);
			background-color: $col-light-2;

			border-radius: 2px;

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
		&:hover .bar {
			background-color: $col-light-1;
		}
	}
</style>
