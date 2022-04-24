<script>
	export let multiple;
	export let label;

	console.log(label);
</script>

<div class="value">
	{#if label}
		{#if multiple}
			<ul class="value-list">
				{#each label as item}
					<li>item</li>
				{/each}
			</ul>
		{:else}
			<span>{label}</span>
		{/if}
	{:else}
		<p class="empty-text">Select an item...</p>
	{/if}
</div>

<style lang="scss">
	:global(.main input + .value) {
		display: none !important;
	}

	.value {
		font-size: 1.3rem;
		display: flex;
		align-items: center;
		span {
		}

		.empty-text {
			font-size: inherit;
			color: $col-dark-5;
		}
	}
</style>
