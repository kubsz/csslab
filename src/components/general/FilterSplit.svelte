<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte/internal';
	const dispatch = createEventDispatcher();

	import FilterItem from './FilterItem.svelte';

	import Icon from '@iconify/svelte';

	export let options;

	const resetFilters = () => Object.values(options).reduce((obj, value) => ({ ...obj, [value.id]: [] }), {});

	let filters = resetFilters();

	const handleFilterItemUpdate = (categoryID, filterId, active) => {
		filters[categoryID] = active ? [...filters[categoryID], filterId] : filters[categoryID].filter((item) => item !== filterId);
		dispatch('update', { ...filters });
	};
</script>

<div class="row double-gutter">
	<div class="filters col-4 col-20-992 col-sticky col-sticky-remove-992">
		<ul class="filter-category-list">
			{#each options as category}
				<div class="filter-category">
					<h4>{category.title}</h4>
					<ul class="filter-list">
						{#each category.items as item}
							<FilterItem
								label={item.label}
								color={item.color}
								on:update={(e) => handleFilterItemUpdate(category.id, item.value, e.detail.active)}
							>
								<div slot="icon" class="icon">
									{#if item.icon}
										<Icon icon={item.icon} />
									{:else if item.colors}
										<div class="color-box" style={`background-color:${item.colors[0]}`} />
									{/if}
								</div>
							</FilterItem>
						{/each}
					</ul>
				</div>
			{/each}
		</ul>
	</div>
	<div class="children col-16 col-20-992">
		<slot />
	</div>
</div>

<style lang="scss">
	.row {
		.filters {
			// background-color: $col-dark-2;
			// padding: 2rem;
			border-radius: $radius;
		}

		.filter-category-list {
			display: flex;
			flex-direction: column;
			gap: 3rem;
		}
		.filter-category {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			h4 {
				text-transform: uppercase;
				font-size: 1rem;
				font-weight: 900;
				letter-spacing: 1px;
				color: $col-dark-6;
			}
		}
		.filter-list {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			.icon {
				:global(svg) {
					width: 1.3rem;
					height: 1.3rem;
					object-fit: cover;
					display: block;
				}
				.color-box {
					position: relative;
					width: 1.4rem;
					height: 1.4rem;
					border-radius: 50%;

					box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
				}
			}
		}
	}
</style>
