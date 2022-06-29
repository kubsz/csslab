<script>
	export let modifiers = [];

	$: classes = ['card', ...modifiers].join(' ');
</script>

<div class={classes}>
	<slot />
</div>
