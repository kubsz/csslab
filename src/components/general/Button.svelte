<script>
	export let href;
</script>

{#if href}
	<a {href} class="btn"> <slot /></a>
{:else}
	<button class="btn"> <slot /></button>
{/if}

<style lang="scss">
	.btn {
		background-color: $col-primary;
		padding: 1rem 1.5rem;
		font-size: 1.3rem;
		font-weight: 700;
		border-radius: $radius;

		cursor: pointer;
	}
</style>
