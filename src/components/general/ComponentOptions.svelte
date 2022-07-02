<script>
	import { createEventDispatcher } from 'svelte/internal';
	const dispatch = createEventDispatcher();

	import Card from '$components/general/Card.svelte';

	import Input from '$components/elements/Input.svelte';
	import ColorPicker from '$components/elements/ColorPicker.svelte';

	export let props;
	export let variables;

	const getInitialConfig = () => ({
		variables: variables.map((item) => ({ [item.name]: item.value || null })),
		props: props.map((item) => ({ [item.name]: item.value || null }))
	});

	let config = getInitialConfig();
	$: console.log(config);

	const components = {
		input: Input,
		color_picker: ColorPicker
	};

	$: dispatch('update', { config });
</script>

<div class="options">
	{#each [{ title: 'Props', configKey: 'props', items: props }, { title: 'Variables', configKey: 'variables', items: variables }] as list}
		<Card>
			<h4 class="title">{list.title}</h4>
			<ul class="prop-list">
				{#each list.items as item}
					<li>
						<label for="#">{item.label}</label>
						<svelte:component
							this={components[item.config.preset]}
							on:update={(e) => (config[list.configKey][item.name] = e.detail.value)}
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
