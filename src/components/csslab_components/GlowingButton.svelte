<script>
	export let href = '#';
</script>

<a {href} target="_blank">
	<slot />
</a>

<style lang="scss">
	a {
		padding: 0.75rem 1.5rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 1.2rem;
		background-color: var(--col-primary);
		color: var(--col-text);
	}
</style>
