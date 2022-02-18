<script>
	import { fly } from 'svelte/transition';

	import ExampleButton from './ExampleButton.svelte';
</script>

<div in:fly={{ x: 200, delay: 150 }} out:fly={{ x: -200 }}>
	<ExampleButton color="crimson">Welcome to CSSLab</ExampleButton>
</div>
