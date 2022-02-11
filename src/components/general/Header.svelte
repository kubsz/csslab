<script>
	export let title;
	export let topText;
	export let description;
</script>

<p class="top-text initanim initanim-s-600 initanim-d-200">
	Language support for
	{#each technologies as tech, i}
		<span>
			{tech.title}{i < technologies.length - 1 ? ',' : '.'}
			{i === technologies.length - 2 ? 'and' : ''}
		</span>
	{/each}
</p>
<h1 class="initanim initanim-s-600 initanim-d-300">Beautiful web components to <span>catalize</span> your JavaScript projects.</h1>
<p class="description initanim initanim-s-600 initanim-d-400">
	CSSLab is a user-generated platform and takes a developer-first approach. Slot beautifully customizble web components directly into your
	applications. Have a glance at all of our custom components, and copy them directly into your projects for FREE.
</p>
