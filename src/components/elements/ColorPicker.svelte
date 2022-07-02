<script>
	import { scale, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import hexRgb from 'hex-rgb';
	import Icon from '@iconify/svelte';

	import clickOutside from '$directives/clickOutside';
	import inject from '$directives/inject';

	import { getDropdownPosition } from '$utils';

	import Input from './Input.svelte';

	import colorPalette from '@iconify/icons-eva/color-palette-fill';
	import checkIcon from '@iconify/icons-bi/check';

	export let defaultValue = '#ffffff';

	let value = defaultValue;
	let iconButtonRef;
	let active = false;
	let setInputValue;
	let windowWidth;

	$: dispatch('update', { value });

	$: console.log(iconButtonRef);

	const randomHexColor = () => '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');

	const getNewOptions = () => {
		return Array.from(Array(20).keys()).map((_) => ({
			color: randomHexColor(),
			value: randomHexColor()
		}));
	};
	let options = getNewOptions();
	$: rgbValue = hexRgb(value, { format: 'array' }).slice(0, 3).join(',');

	const handleBoxClick = (col) => {
		value = col;
		if (setInputValue) setInputValue(col);
	};

	let dropdownPosition = getDropdownPosition(iconButtonRef);

	const updateDropdownPosition = () => {
		dropdownPosition = getDropdownPosition(iconButtonRef);
	};
</script>

<svelte:window on:scroll={updateDropdownPosition} on:resize={updateDropdownPosition} />
<Input bind:setInputValue iconButton={colorPalette} on:iconClick={() => (active = !active)} bind:iconButtonRef />

{#if active}
	<div
		class="color-picker"
		transition:fly={{ y: 15, duration: 300 }}
		use:inject={{ selector: '.overlay', style: 
	 }}
		use:clickOutside
		on:clickOutside={() => (active = false)}
	>
		<div class="inner-container" style="--current-color:{rgbValue}">
			<div class="color-showcase">
				<span>{value}</span>
			</div>
			<div class="color-options">
				{#each options as color}
					<div class="box" style="--col: {color.value}" on:click={() => handleBoxClick(color.value)}>
						{#if value === color.value}
							<div class="icon" transition:scale>
								<Icon icon={checkIcon} />
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	:global(.color-picker) {
		position: absolute;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		border-radius: $radius;
		overflow: hidden;

		width: 20rem;

		.color-showcase {
			padding: 3rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: rgba(var(--current-color), 1);
		}

		.color-options {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));
			padding: 1.5rem;
			grid-gap: 1.5rem;
			background-color: rgba(var(--current-color), 0.2);
			backdrop-filter: blur(20px);

			.box {
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
	}
</style>
