<script>
	export let title;
	export let subtitle;
</script>

<div class="header">
	<div class="main">
		<slot name="top-info" />
		<h1 class="title">{title}</h1>
		<p class="description">{subtitle}</p>
	</div>
	<div class="side">
		<slot />
	</div>
</div>

<style lang="scss">
	.header {
		background-color: $col-dark-1;
		border-radius: $radius;
		display: flex;
		align-items: stretch;
		justify-content: space-between;

		.main {
			padding: 5rem 1.5rem 5rem 3rem;

			.title {
				color: $col-light-1;
				font-size: 3.2rem;
			}

			.description {
				color: $col-light-3;
			}
		}

		.side {
			padding-left: 1.5rem;
			display: flex;
			flex-direction: column;
		}
	}
</style>
