<script>
	import lockAlt from '@iconify/icons-bxs/lock-alt';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	export let placeholder;
	export let icon = lockAlt;
	// showcaseTransition only set true when being used on Homepage technology showcase
	export let showcaseTransition = false;

	const animate = (node, args) => (args.cond ? fly(node, args) : null);
</script>

<div
	class="input-container"
	in:animate={{ x: 220, cond: showcaseTransition, delay: 150 }}
	out:animate={{ x: -220, cond: showcaseTransition }}
>
	<Icon {icon} />
	<input {placeholder} />
</div>

<style lang="scss">
	.input-container {
		display: flex;
		align-items: center;

		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 4px;

		:global(svg) {
			padding: 10px 15px;
		}

		input {
			padding: 10px 0;
			width: 200px;
			color: $col-light-1;
		}
	}
</style>
