<script>
	export let multiple;
	export let value;
</script>

<div class="value">
	{#if multiple}
		<ul class="value-list">
			{#each value as item}
				<li>item</li>
			{/each}
		</ul>
	{:else}
		<span>item</span>
	{/if}
</div>
