<script>
	import Icon from '@iconify/svelte';
	import chevronRight from '@iconify/icons-charm/chevron-right.js';

	export let crumbs = null;
</script>

<div class="margin">
	<div class="breadcrumbs">
		<ul>
			{#each crumbs as crumb (crumb.href)}
				<li>
					<a href={crumb.href}>
						<span>{crumb.label}</span>
					</a>
					<Icon icon={chevronRight} />
				</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	.margin {
		margin-top: $gutter;
		margin-bottom: $gutter;
	}
	.breadcrumbs {
		background-color: #fff;
		padding: 1rem;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

		ul {
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			gap: 2rem;

			li {
				display: flex;
				align-items: center;

				a {
					margin-right: 2rem;
				}

				:global(svg) {
					display: block;
					color: rgba(0, 0, 0, 0.3);
					font-size: 1rem;
				}
			}
		}
	}
</style>
