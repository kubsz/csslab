<script>
	import { fly } from 'svelte/transition';
	import { inject } from '../../../directives/inject';

	import { objToCss } from '../../../lib/utils';

	import SelectValue from './SelectValue.svelte';

	export let options;

	// optional booleans
	export let orderToggle = false;
	export let searchable = false;
	export let multiple = false;

	// optional misc
	export let defaultValue;
	export let endpoint;
	export let placeholder = 'Search for an item...';
	export let orderDefault = false;

	// ORDER: [TRUE = ASCENDING], [FALSE = DESCENDING]

	let dropdownActive = false;
	let dropdownPosition = {};

	let ascending = orderToggle ? orderDefault : null;
	let searchInput = '';

	let singleValue = defaultValue || null;
	let multipleValue = defaultValue || [];

	const getFilteredOptions = () => {
		let opts = [...options];

		if (searchInput.length) {
			opts = opts.filter((item) => {
				if (item.label.toLowerCase().includes(searchInput.toLowerCase())) return true;
				return false;
			});
		}

		console.log(opts);

		return opts;
	};

	$: value = multiple ? multipleValue : singleValue;
	$: filteredOptions = getFilteredOptions(searchInput);

	const handleButtonClick = () => {
		dropdownActive = !dropdownActive;
	};

	$: dropdownStyles = objToCss(dropdownPosition);
</script>

<div class="select-container">
	<button class="main" on:click={handleButtonClick}>
		{#if searchable}
			<input type="text" {placeholder} bind:value={searchInput} />
		{/if}
		<SelectValue {value} {multiple} />
	</button>
	{#if dropdownActive}
		<div class="select-dropdown" use:inject={{ selector: '.overlay', styles: dropdownStyles }} style={position}>
			<ul transition:fly={{ y: 20 }} class="list">
				{#each filteredOptions as option}
					<li>
						item {option.label}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style lang="scss" global>
	.select-container {
		display: flex;
		flex-direction: column;
		gap: $gutter;

		.main {
			background-color: $col-light-1;
			border: 1px solid rgba(0, 0, 0, 0.1);
			padding: 10px;
			text-align: left;
		}
	}
	.select-dropdown {
		position: absolute;
		background-color: red;
	}
</style>
