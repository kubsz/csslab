<script>
	import { scale, fly } from 'svelte/transition';
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	import fontColorContrast from 'font-color-contrast';
	import hexRgb from 'hex-rgb';
	import Icon from '@iconify/svelte';

	import clickOutside from '$directives/clickOutside';
	import inject from '$directives/inject';

	import { getDropdownPosition } from '$utils';

	import Input from './Input.svelte';

	import colorPalette from '@iconify/icons-eva/color-palette-fill';
	import checkIcon from '@iconify/icons-bi/check';
	import refreshIcon from '@iconify/icons-ci/refresh-02';

	export let defaultValue;

	let value = defaultValue;
	let iconButtonRef;
	let active = false;
	let setInputValue;
	let dropdownPosition;

	$: dispatch('update', { value });

	const randomHexColor = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');

	const getNewOptions = (currentOptions) => {
		const newOptions = Array.from(Array(20).keys()).map((_) => {
			return randomHexColor();
		});

		if (value && currentOptions.length) {
			const index = currentOptions.findIndex((x) => x === value);
			newOptions[index] = value;
			console.log(index);
		}
		return newOptions;
	};
	let options = getNewOptions([]);
	$: rgbValue = hexRgb(value, { format: 'array' }).slice(0, 3).join(',');

	const handleBoxClick = (col) => {
		value = col;
		if (setInputValue) setInputValue(col);
	};

	const updateDropdownPosition = () => {
		dropdownPosition = getDropdownPosition(iconButtonRef);
	};

	$: if (iconButtonRef) updateDropdownPosition();
</script>

<svelte:window on:scroll={updateDropdownPosition} on:resize={updateDropdownPosition} />
<Input bind:setInputValue iconButton={colorPalette} on:iconClick={() => (active = !active)} bind:iconButtonRef defaultValue={value} color />

{#if active}
	<div
		class="color-picker"
		transition:fly={{ y: 15, duration: 300 }}
		use:inject={{ selector: '.overlay' }}
		use:clickOutside
		style={`${dropdownPosition};--current-color:${rgbValue};--text-color:${fontColorContrast(value)}`}
		on:clickOutside={() => (active = false)}
	>
		<div class="color-showcase">
			{#key value}
				<span in:fly={{ x: -200 }} out:fly={{ x: 200 }}>{value}</span>
			{/key}
		</div>
		<div class="color-options">
			{#key options}
				{#each options as color, i}
					<div in:fly={{ y: 7, delay: i * 30 }} class="box" style="--col: {color}" on:click={() => handleBoxClick(color)}>
						{#if value === color}
							<div class="icon" transition:scale|local>
								<Icon icon={checkIcon} />
							</div>
						{/if}
					</div>
				{/each}
			{/key}
		</div>
		<button in:scale={{ delay: 30 * options.length }} class="refresh-button" on:click={() => (options = getNewOptions(options))}>
			<Icon icon={refreshIcon} />
			<span>New Colors</span>
		</button>
	</div>
{/if}

<style lang="scss">
	:global(.color-picker) {
		position: absolute;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		border-radius: $radius;
		overflow: hidden;

		background-color: rgba(var(--current-color), 0.2);
		width: 20rem;
		backdrop-filter: blur(20px);

		.color-showcase {
			padding: 3rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: var(--text-color);
			background-color: rgba(var(--current-color), 1);
			position: relative;
			height: 8rem;

			span {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				font-size: 1.8rem;
			}
		}

		.color-options {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
			padding: 1.5rem;
			grid-gap: 1.5rem;
			color: var(--text-color);

			.box {
				box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
				aspect-ratio: 1/1;
				background-color: var(--col);
				border-radius: 0.2rem;
				position: relative;

				cursor: pointer;

				.icon {
					position: absolute;

					width: 100%;
					height: 100%;
					@include flexCenter;
					:global(svg) {
						display: block;
					}
				}
			}
		}

		.refresh-button {
			color: #fff;
			padding: 0.75rem 1.5rem;
			margin: 0 1.5rem 1.5rem 1.5rem;
			background-color: rgba(var(--current-color), 0.2);
			width: calc(100% - 3rem);
			border-radius: $radius;

			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;

			color: rgba(var(--current-color), 1);
			font-weight: 700;
			cursor: pointer;

			&:hover {
				color: $col-light-1;
				background-color: rgba(var(--current-color), 0.3);
			}

			span {
				font-size: 1.1rem;
				text-transform: uppercase;
				letter-spacing: 1px;
				filter: brightness(1.5);
			}

			:global(svg) {
				font-size: 1.6rem;
				filter: brightness(1.5);
			}
		}
	}
</style>
