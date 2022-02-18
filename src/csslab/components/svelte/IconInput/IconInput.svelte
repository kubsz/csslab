<script>
	import lockAlt from '@iconify/icons-bxs/lock-alt.js';
	import Icon from '@iconify/svelte';

	export let placeholder;
	export let icon = lockAlt;
</script>

<div class="input-container">
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
