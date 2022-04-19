<script>
	import Section from '../../components/layout/Section.svelte';
	import FilterSplit from '../../components/general/FilterSplit.svelte';
	import FilterSearch from '../../components/general/FilterSearch.svelte';
	import FrameCard from '../../components/general/FrameCard.svelte';
	import Select from '../../components/general/Select/index.svelte';

	import buttonIcon from '@iconify/icons-dashicons/button';
	import formDropdown from '@iconify/icons-mdi/form-dropdown';
	import textIcon from '@iconify/icons-bx/text';
	import menuHamburger from '@iconify/icons-charm/menu-hamburger';
	import checkboxChecked16Regular from '@iconify/icons-fluent/checkbox-checked-16-regular';

	const filterOptions = [
		{
			title: 'Type',
			items: [
				{ label: 'Buttons', name: 'buttons', icon: buttonIcon },
				{ label: 'Inputs', name: 'inputs', icon: textIcon },
				{ label: 'Dropdowns', name: 'dropdowns', icon: formDropdown },
				{ label: 'Hamburgers', name: 'hamburgers', icon: menuHamburger },
				{ label: 'Checkboxes', name: 'checkboxes', icon: checkboxChecked16Regular }
			]
		},
		{
			title: 'Pallette',
			items: [
				{ label: 'Dark', name: 'dark', colors: ['#222'] },
				{ label: 'Light', name: 'light', colors: ['#fff'] },
				{ label: 'Colorful', name: 'colorful', colors: ['#50c878', 'green', 'blue'] },
				{ label: 'Pastel', name: 'pastel', colors: ['#ffc5bf', 'lightpink', 'brown'] }
			]
		}
	];

	const sortOptions = [
		{
			label: 'Most Popular',
			value: 'most_popular'
		},
		{
			label: 'Recently Added',
			value: 'recently_added'
		},
		{
			label: 'Alphabetical',
			value: 'alphabetical'
		}
	];
</script>

<Section margin modifiers={['padding-bottom']}>
	<div class="typ-heading-container">
		<span class="typ-heading-tertiary u-color-secondary u-weight-900 large">Fully Responsive Components</span>
		<h2 class="typ-heading-primary bold">All Components</h2>
		<p class="typ-subtext w-800">
			Browse a variety of components that have been uploaded to CSSLab by fellow developers! Search, sort, and filter the components to help
			find what you're looking for.
		</p>
	</div>
	<FilterSplit options={filterOptions}>
		<div class="filters">
			<FilterSearch placeholder="Search for a component..." />
		</div>
		<div class="results-head">
			<span class="count">12 Results</span>
			<div class="sort-container">
				<Select options={sortOptions} orders />
				<Select options={sortOptions} orders searchable />
				<Select options={sortOptions} orders searchable multiple />
			</div>
		</div>
		<div class="component-list">
			<FrameCard
				title="GlowingButton"
				description="A sleek button with an infinite glowing animation"
				creator="Kubs Korkmaz"
				href="/"
				tags={[
					{
						name: 'Button'
					},
					{
						name: 'Colorful'
					},
					{
						name: 'Animated'
					}
				]}
			>
				<button>hi</button>
			</FrameCard>
		</div>
	</FilterSplit>
</Section>

<style lang="scss">
	.filters {
		// padding: 3rem 0 !important;
	}

	.results-head {
		padding: $gutter;
		display: flex;
		gap: $gutter;
		justify-content: space-between;
	}
	.component-list {
		min-height: 2000px;
		margin-top: $gutter;
	}
</style>
