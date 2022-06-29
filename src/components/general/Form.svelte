<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import IconInput from '../general/IconInput.svelte';
	import Button from '../general/Button.svelte';

	export let handleBlur;
	export let error;

	export let elements;
</script>

<form class="form" on:submit|preventDefault>
	{#each Object.entries(elements) as [key, obj]}
		<div class="form-section f-100">
			<IconInput
				icon={obj.icon}
				placeholder={obj.placeholder}
				label={obj.label}
				bindValue={obj.value}
				type={obj.validation.type}
				on:update={({ detail: { value } }) => (obj.value = value)}
				on:blur={() => dispatch('elementBlur', { key })}
				error={obj.error}
				errorMessage={obj.errorMessage}
				validation={obj.validation}
			/>
		</div>
	{/each}
	{#if error}
		<p class="error">{error}</p>
	{/if}
	<div class="form-section f-100">
		<Button modifiers={['block', 'secondary']}>Login</Button>
	</div>
</form>

<style lang="scss">
	.form {
		padding: $gutter;
		display: flex;
		flex-flow: row wrap;
		gap: $gutter * 1.5;
		width: 100%;

		.form-section {
			&.f-100 {
				width: 100%;
			}
		}

		.error {
			font-size: 1.3rem;
			color: #ff0000;
			font-weight: 600;
		}
	}
</style>
