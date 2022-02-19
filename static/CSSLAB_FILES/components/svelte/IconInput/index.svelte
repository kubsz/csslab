<script>
	import { fly } from 'svelte/transition';

	import IconInput from './IconInput.svelte';
</script>

<div in:fly={{ x: 200, delay: 150 }} out:fly={{ x: -200 }}>
	<IconInput placeholder="Enter some text.." />
</div>
