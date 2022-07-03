<script>
	export let href = '#';
</script>

<a {href} target="_blank">
	<slot />
</a>

<style lang="scss">
	a {
		padding: 1.2rem 2rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 1.3rem;
		background-color: var(--col-primary);
		color: var(--col-text);
		font-weight: 700;
		border-radius: $radius;

		&:hover {
			filter: brightness(1.2);
		}
	}
</style>
