<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import Icon from '@iconify/svelte';
	export let items = [];
	export let multiple = false;
	export let modifiers = [];
	export let requireOne = false;
	export let defaultValue = null;

	let active = multiple ? [] : requireOne ? (defaultValue ? items.find((x) => x.value === defaultValue).value : items[0].value) : null;

	const fireEvent = () => dispatch('update', { value: active });
	const handleClick = (value) => {
		if (multiple) return;

		if (active === value && requireOne) return;

		active = active === value ? null : value;

		fireEvent();
	};

	$: classes = modifiers.join(' ');
</script>

<ul class={classes} class:unselected={multiple ? !active.length : !active}>
	{#each items as item}
		<li>
			<button
				on:click={() => handleClick(item.value)}
				class:active={multiple ? active.indexOf(item.value) > -1 : active === item.value}
				style={item.color ? `--col-active:${item.color}` : ''}
			>
				{#if item.icon}
					{#if typeof item.icon === 'string'}
						<img class="icon" src={item.icon} alt="{item.label} icon" />
					{:else}
						<Icon class="icon" icon={item.icon} />
					{/if}
				{/if}
				<span>{item.label}</span>
			</button>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		display: flex;
		gap: $gutter;
		width: 100%;
		--col-active: #{$col-primary-rgb};
		&.wrap {
			flex-wrap: wrap;
		}

		&.vertical {
			flex-direction: column;
		}
		&.grow li {
			flex-grow: 1;
		}

		&.unselected li {
			opacity: 1;
		}

		&.square li {
			min-height: calc(24rem / 2 - #{$gutter / 2});

			aspect-ratio: 1/1;
		}

		&.horizontal-buttons {
			li button {
				flex-direction: row;
				gap: 1.4rem;
			}
		}

		li {
			button {
				padding: 1.2rem 2rem;
				color: $col-dark-5;
				height: 100%;
				width: 100%;
				border-radius: 3px;
				background-color: rgba(0, 0, 0, 0.05);
				border: 1px solid rgba(0, 0, 0, 0.05);

				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: $gutter;

				cursor: pointer;
				transition: 0.1s ease;

				:global(.icon) {
					font-size: 2.4rem;
				}

				img.icon {
					width: 1.4rem;
				}

				span {
					font-size: 1.3rem;
					color: inherit;
				}

				&:not(.active):hover {
					background-color: rgba(var(--col-active), 0.2);
					color: $col-dark-5;
				}

				&.active {
					color: $col-dark-4;
					background-color: rgba(var(--col-active), 0.3);
				}
			}
		}
		&:not(.unselected) li button:not(.active) {
			background-color: rgba(0, 0, 0, 0.03);
		}
	}
</style>
