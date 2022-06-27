<script context="module">
	export const load = async ({ url, params, props, session, fetch, stuff }) => {
		const components = await fetch('http://localhost:1337/api/components?populate=*')
			.then((res) => res.json())
			.catch((err) => console.log(err));
		const categories = await fetch('http://localhost:1337/api/categories?populate=*')
			.then((res) => res.json())
			.catch((err) => console.log(err));
		const tags = await fetch('http://localhost:1337/api/tags?populate=*')
			.then((res) => res.json())
			.catch((err) => console.log(err));

		const removeStrapiAttributes = (arr) => arr.map((item) => ({ id: item.id, ...item.attributes }));

		return {
			props: { components, categories, tags: removeStrapiAttributes(tags.data) }
		};
	};
</script>

<script>
	import { pick } from 'lodash';

	import Section from '../../components/layout/Section.svelte';
	import FilterSplit from '../../components/general/FilterSplit.svelte';
	import FilterSearch from '../../components/general/FilterSearch.svelte';
	import FrameCard from '../../components/general/FrameCard.svelte';
	import Select from '../../components/general/Select/index.svelte';
	import ViewToggle from '../../components/general/ViewToggle.svelte';
	import ComponentCard from '../../components/general/ComponentCard.svelte';

	import buttonIcon from '@iconify/icons-dashicons/button.js';
	import formDropdown from '@iconify/icons-mdi/form-dropdown.js';
	import textIcon from '@iconify/icons-bx/text.js';
	import checkboxChecked16Regular from '@iconify/icons-fluent/checkbox-checked-16-regular.js';

	import menuHamburger from '@iconify/icons-charm/menu-hamburger.js';
	import grid3x3GapFill from '@iconify/icons-bi/grid-3x3-gap-fill.js';

	import { pluralify } from '$lib/utils';

	export let components = [];
	export let tags = [];
	export let categories = [];
	export let technologies = [];

	$: console.log(tags, categories, technologies);

	let filters = {
		query: '',
		sort: { value: 'most_popular', ascending: false }
	};
	let view = 'CARD';

	const icons = {
		Categories: {
			buttons: buttonIcon,
			inputs: textIcon,
			dropdowns: formDropdown,
			hamburgers: menuHamburger,
			checkboxes: checkboxChecked16Regular
		}
	};

	// const filterOptions = [
	// 	{
	// 		title: 'Type',
	// 		items: [
	// 			{ label: 'Buttons', name: 'buttons', icon: buttonIcon },
	// 			{ label: 'Inputs', name: 'inputs', icon: textIcon },
	// 			{ label: 'Dropdowns', name: 'dropdowns', icon: formDropdown },
	// 			{ label: 'Hamburgers', name: 'hamburgers', icon: menuHamburger },
	// 			{ label: 'Checkboxes', name: 'checkboxes', icon: checkboxChecked16Regular }
	// 		]
	// 	},
	// 	{
	// 		title: 'Pallette',
	// 		items: [
	// 			{ label: 'Dark', name: 'dark', colors: ['#222'] },
	// 			{ label: 'Light', name: 'light', colors: ['#fff'] },
	// 			{ label: 'Colorful', name: 'colorful', colors: ['#50c878', 'green', 'blue'] },
	// 			{ label: 'Pastel', name: 'pastel', colors: ['#ffc5bf', 'lightpink', 'brown'] }
	// 		]
	// 	}
	// ];

	const getIcon = (key, id) => {
		return icons[key][id];
	};

	const filterConfig = [
		{ items: categories, title: 'Categories', keys: { label: 'name', value: 'slug' } },
		{ items: tags, title: 'Tags', keys: { label: 'name', value: 'name' } }
	];

	const filterOptions = filterConfig.map((config) => {
		return {
			title: config.title,
			items: config.items.map((item) => ({
				label: item[config.keys.label],
				value: item[config.keys.value],
				icon: getIcon(config.title, config.keys.value)
			}))
		};
	});

	console.log(filterOptions);

	const sortOptions = [
		{ label: 'Most Popular', value: 'most_popular' },
		{ label: 'Recently Added', value: 'recently_added' },
		{ label: 'Alphabetical', value: 'alphabetical' }
	];

	const viewOptions = [
		{ icon: menuHamburger, value: 'BOARD', label: 'Board' },
		{ icon: grid3x3GapFill, value: 'CARD', label: 'Card' }
	];

	const filter = (_) => {
		let options = [...components];

		options = options.filter((opt) => opt.name.toLowerCase().includes(filters.query.toLowerCase()));

		return options;
	};

	$: filteredOptions = filter(filters);
</script>

<Section margin modifiers={['padding-bottom']}>
	<div class="typ-heading-container">
		<span class="typ-heading-tertiary u-color-secondary u-weight-900 large initanim initanim-s-600 initanim-d-300"
			>Fully Responsive Components</span
		>
		<h2 class="typ-heading-primary bold initanim initanim-s-600 initanim-d-400">All Components</h2>
		<p class="typ-subtext w-800 initanim initanim-s-600 initanim-d-500">
			Browse a variety of components that have been uploaded to CSSLab by fellow developers! Search, sort, and filter the components to help
			find what you're looking for.
		</p>
	</div>
	<FilterSplit options={filterOptions}>
		<div class="filters">
			<FilterSearch placeholder="Search for a component..." on:update={(e) => (filters = { ...filters, query: e.detail })} />
		</div>
		<div class="results-head">
			<div class="view-container">
				<ViewToggle id="COMPONENT_VIEW" options={viewOptions} defaultValue={view} on:update={(e) => (view = e.detail)} />

				<span class="count">Showing {filteredOptions.length} component{pluralify(components.length)}...</span>
			</div>
			<div class="sort-container">
				<Select
					options={sortOptions}
					orderToggle
					orderDefault={false}
					searchable
					on:update={(e) => (filters = { ...filters, sort: e.detail })}
				/>
			</div>
		</div>
		<div class="component-list" class:board={view === 'BOARD'} class:card={view === 'CARD'}>
			{#each filteredOptions as component, i (i)}
				<FrameCard
					title={component.name}
					description={component.description}
					creator={component.users_permissions_user}
					href="/components/{component.slug}"
					tags={component.tags}
					technologies={component.technologies}
					vertical={view === 'CARD'}
				/>
			{/each}
			{#if !filteredOptions.length}
				<div class="error">
					<span class="emoji">😟</span>
					<span class="title">No Results Found</span>
					<p class="text">No results found matching your filters. Please modify your filters and try again.</p>
				</div>
			{/if}
		</div>
	</FilterSplit>
</Section>

<style lang="scss">
	.filters {
		// padding: 3rem 0 !important;
	}

	.results-head {
		padding: $gutter 0;
		display: flex;
		align-items: center;
		gap: $gutter;
		justify-content: space-between;

		.view-container {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}
		.count {
			font-weight: 400;
			color: $col-dark-5;
			font-size: 1.3rem;
		}
	}
	.component-list {
		&.board {
			display: flex;
			flex-direction: column;
			gap: $gutter * 2;
		}

		&.card {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
			gap: $gutter;
		}

		.error {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			gap: 1rem;
			padding: 5rem 0;

			.emoji {
				font-size: 8rem;
				filter: grayscale(100%);
			}
			.title {
				font-size: 2.4rem;
				font-weight: 900;
			}
			.text {
				font-size: 1.4rem;
				color: $col-dark-5;
			}
		}
	}
</style>
