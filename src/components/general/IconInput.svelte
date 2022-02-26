<script>
	import Icon from '@iconify/svelte';
	export let placeholder;
	export let icon;
	export let label;
</script>

<div class="container">
	{#if label}
		<label for={label}>{label}</label>
	{/if}
	<div class="input-container">
		<input spellcheck="false" type="text" {placeholder} id={label} />
		{#if icon}
			<div class="icon-container">
				<Icon {icon} />
			</div>
		{/if}
	</div>
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

		.input-container {
			display: flex;
			align-items: stretch;
			background-color: $col-light-2;
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
	}
</style>
