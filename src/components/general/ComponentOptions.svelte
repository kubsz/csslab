<script>
	import { createEventDispatcher } from 'svelte/internal';
	const dispatch = createEventDispatcher();

	import Card from '$components/general/Card.svelte';

	import Input from '$components/elements/Input.svelte';
	import ColorPicker from '$components/elements/ColorPicker.svelte';

	export let options;
	export let defaultConfig;

	let config = defaultConfig;
	$: console.log(config);

	const handleElementUpdate = (e, configKey, identifier) => {
		config[configKey][identifier] = e.detail.value;
	};

	const components = {
		input: Input,
		color: ColorPicker
	};

	$: dispatch('update', { config });
</script>

<div class="options">
	{#each options as list}
		<Card>
			<h4 class="title">{list.title}</h4>
			<ul class="prop-list">
				{#each list.items as item}
					<li>
						<label for="#">{item.label}</label>
						<svelte:component
							this={components[item.config.preset]}
							on:update={(e) => handleElementUpdate(e, list.configKey, item.name)}
							{...item.config.options || {}}
						/>
					</li>
				{/each}
			</ul>
		</Card>
	{/each}
</div>

<style lang="scss">
	.options {
		display: flex;
		flex-direction: column;
		gap: $gutter;

		.title {
			text-transform: uppercase;
			letter-spacing: 1px;
			font-weight: 700;
			font-size: 1.2rem;
			color: $col-light-2;
		}
		.prop-list {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			margin-top: 1.5rem;

			li {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;

				label {
					color: $col-light-3;
					font-size: 1.1rem;
					font-weight: 600;
				}
			}
		}
	}
</style>
