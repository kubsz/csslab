<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import Icon from '@iconify/svelte';
	export let placeholder;
	export let icon;
	export let label;
	export let bindValue;
	export let validation = {};

	export let error;
	export let errorMessage;

	const setType = (node) => {
		if (node && validation?.type) node.setAttribute('type', validation.type);
	};

	$: dispatch('update', { value: bindValue });
</script>

<div class="container" class:error>
	{#if label}
		<label for={label}>{label}</label>
	{/if}
	<div class="input-container">
		<input use:setType {placeholder} id={label} bind:value={bindValue} on:blur />
		{#if icon}
			<div class="icon-container">
				<Icon {icon} />
			</div>
		{/if}
	</div>
	{#if errorMessage}
		<p class="error-message">{errorMessage}</p>
	{/if}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 8px;

		label {
			text-transform: uppercase;
			letter-spacing: 1px;
			font-size: 1.1rem;
			color: $col-dark-5;
		}
		&.error label {
			color: $col-red;
		}

		.input-container {
			display: flex;
			align-items: stretch;
			background-color: $col-light-2;
			border: 1px solid transparent;
			border-radius: $radius;
			input {
				flex: 1;
				padding: 12px 15px;
				font-size: 1.3rem;

				transition: 0.1s ease;

				&:focus {
					background-color: rgba($col-secondary, 0.05);
				}
			}

			.icon-container {
				padding: 12px 15px;
				font-size: 16px;
				background-color: rgba($col-secondary, 0.05);
				color: $col-dark-5;
				order: -1;

				transition: 0.1s ease;
			}

			input:focus + .icon-container {
				background-color: rgba($col-secondary, 0.1);
				color: $col-secondary;
			}
		}

		&.error .input-container {
			border-color: rgba($col-red, 0.8);
		}

		.error-message {
			color: $col-red;
			font-size: 1.2rem;
		}
	}
</style>
