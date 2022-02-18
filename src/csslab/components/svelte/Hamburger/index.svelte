<script>
	import { fly } from 'svelte/transition';

	import Hamburger from './Hamburger.svelte';
</script>

<div in:fly={{ x: 200, delay: 150 }} out:fly={{ x: -200 }}>
	<Hamburger />
</div>
