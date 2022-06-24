<script>
	import ExampleButton from '../../../static/CSSLAB_FILES/components/svelte/ExampleButton/ExampleButton.svelte';

	export let name;
	export let description;
	export let user;
	export let href;
	export let tags = [];
	export let technologies = [];
</script>

<div class="card">
	<div class="frame">
		<ExampleButton>Click me!</ExampleButton>
	</div>
	<div class="info">
		<h3 class="name">{name}</h3>
		<p class="description">{description}</p>
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;

		background-color: $col-light-2;
		border-radius: $radius;
		border: 1px solid rgba(0, 0, 0, 0.1);

		.frame {
			@include flexCenter;

			min-height: 130px;

			background-color: $col-dark-3;
			border-radius: $radius $radius 0 0;
		}

		.info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			padding: 1.5rem;
			gap: 0.5rem;

			.name {
				font-size: 1.6rem;
				font-weight: 700;
			}

			.description {
				font-size: 1.4rem;
				color: $col-dark-5;
			}
		}
	}
</style>
