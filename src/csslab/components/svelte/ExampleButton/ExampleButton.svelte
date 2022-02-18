<!-- developed in the csslab.app laboratory 🧪 -->
<script>
	import { fly } from 'svelte/transition';

	export let color = 'blue';
</script>

<button class="button" style="background-color:{color}">
	<slot />
</button>

<style lang="scss">
	.button {
		padding: 12px 20px;
		border-radius: 3px;

		text-transform: uppercase;
		letter-spacing: 2px;
		font-weight: 900;
		font-size: 12px;
		color: #fff;

		cursor: pointer;
	}
</style>
