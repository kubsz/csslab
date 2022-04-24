<script>
	import SelectDropdownItem from './SelectDropdownItem.svelte';
	import { clickOutside } from './../../../directives/clickOutside.js';
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

	let mainRef;
	let searchRef;

	let ascending = orderToggle ? orderDefault : null;
	let searchInput = '';

	let singleValue = defaultValue || null;
	let multipleValue = defaultValue || [];

	const getFilteredOptions = () => {
		let opts = [...options];

		if (searchInput.length) {
			opts = opts.filter((item) => {
				return item.label.toLowerCase().includes(searchInput.toLowerCase());
			});
		}

		return opts;
	};

	const updateDropdownPosition = () => {
		const { top, left, height, width } = mainRef.getBoundingClientRect();
		dropdownPosition = { width, top: top + height + 15, left };
	};

	const handleButtonClick = (force = null) => {
		dropdownActive = force !== null ? force : !dropdownActive;
		searchInput = '';

		if (!dropdownActive) {
			searchRef.blur();
			return;
		}

		updateDropdownPosition();
	};

	const handleValueSelect = (value) => {
		if (multiple) {
			const index = multipleValue.indexOf(value);
			multipleValue = index > -1 ? multipleValue.filter((val) => val !== value) : [...multipleValue, value];
			return;
		}

		singleValue = value === singleValue ? null : value;
		handleButtonClick(false);
	};

	const getLabelFromValue = (_) => {
		if (!value) {
			return null;
		}

		if (multiple) {
			const arr = value.map((val) => {
				const obj = options.find((opt) => opt.value === val);
				return obj?.label || null;
			});
			return arr;
		}

		const obj = options.find((opt) => opt.value === value);
		return obj?.label || null;
	};

	$: if (searchRef) searchRef.focus();

	$: value = multiple ? (multipleValue.length ? multipleValue : null) : singleValue;
	$: valueLabel = getLabelFromValue(value);

	$: filteredOptions = getFilteredOptions(searchInput);
	$: dropdownStyles = objToCss(dropdownPosition, false, 'px');
</script>

<svelte:window on:resize={updateDropdownPosition} on:scroll={updateDropdownPosition} />
<div class="select-container disable_clickoutside">
	<button class="main" on:click={() => handleButtonClick(true)} bind:this={mainRef}>
		{#if searchable && dropdownActive}
			<input type="text" {placeholder} bind:value={searchInput} bind:this={searchRef} />
		{/if}
		<SelectValue label={valueLabel} {multiple} />
	</button>
	{#if dropdownActive}
		<div
			class="select-dropdown"
			style={dropdownStyles}
			use:inject={{ selector: '.overlay', style: dropdownStyles }}
			transition:fly={{ y: 20 }}
			use:clickOutside
			on:clickOutside={() => handleButtonClick()}
		>
			<ul class="list">
				{#each filteredOptions as option}
					<SelectDropdownItem {...option} on:click={() => handleValueSelect(option.value)} />
				{/each}
				{#if !filteredOptions.length}
					<li>
						<p class="empty-text">No results found...</p>
					</li>
				{/if}
			</ul>
		</div>
	{/if}
</div>

<style lang="scss" global>
	.select-container {
		display: flex;
		flex-direction: column;
		gap: $gutter;
		width: 100%;
		min-width: 20rem;
		position: relative;

		.main {
			background-color: $col-light-2;
			border: 1px solid rgba(0, 0, 0, 0.1);
			border-radius: $radius;
			padding: 1.2rem 1rem 1rem 1rem;
			text-align: left;

			height: 4.5rem;

			position: relative;
			input {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				padding: 1.1rem 1rem 1rem 1rem;
				font-size: 1.3rem;
			}
		}
	}
	.select-dropdown {
		position: absolute;
		background-color: $col-light-1;
		border-radius: $radius;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

		ul {
			li {
				button {
					padding: 1rem;
					display: block;
					width: 100%;
					text-align: left;
					font-size: 1.3rem;

					cursor: pointer;

					&:hover {
						background-color: $col-primary;
					}
				}

				.empty-text {
					font-size: 1.2rem;
					padding: 1rem;
				}
			}
		}
	}
</style>
