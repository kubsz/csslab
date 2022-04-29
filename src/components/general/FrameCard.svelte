<script>
	import Button from './Button.svelte';

	export let title;
	export let description;
	export let href;
	export let tags = [];
	export let creator;
</script>

<div class="frame-card">
	<div class="frame">
		<slot />
	</div>
	<div class="info">
		<h3 class="title">{title}</h3>
		<p class="description">{description}</p>
		<ul class="tag-list">
			{#each tags as tag}
				<li>
					<button>{tag.name}</button>
				</li>
			{/each}
		</ul>
		<div class="button-container">
			<Button>View Button</Button>
		</div>
	</div>
</div>

<style lang="scss">
	.frame-card {
		display: flex;
		align-items: stretch;

		.frame {
			flex: 0 0 50%;
		}

		.info {
			padding: 1.5rem;
			display: flex;
			flex-direction: column;

			.title {
				font-size: 1.8rem;
				font-weight: 600;
			}

			.description {
				font-size: 1.4rem;
				color: $col-dark-4;
			}
		}
	}
</style>
