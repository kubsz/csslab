<script>
	import { fly } from 'svelte/transition';

	import SelectDropdown from './SelectDropdown.svelte';
</script>

<div in:fly={{ x: 200, delay: 150 }} out:fly={{ x: -200 }}>
	<SelectDropdown />
</div>
