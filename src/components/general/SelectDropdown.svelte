<script>
	import { fly } from 'svelte/transition';

	// showcaseTransition only set true when being used on Homepage technology showcase
	export let showcaseTransition = false;

	const animate = (node, args) => (args.cond ? fly(node, args) : null);
</script>

<select in:animate={{ x: 220, cond: showcaseTransition, delay: 150 }} out:animate={{ x: -220, cond: showcaseTransition }}>
	<option>Select an item</option>
</select>
