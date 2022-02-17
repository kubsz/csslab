<script>
	import Icon from '@iconify/svelte';
	import lockAlt from '@iconify/icons-bxs/lock-alt.js';

	export let dimensions = { width: 800, height: 500 };
</script>

<div class="mac">
	<div class="header">
		<div class="buttons">
			<div class="button close" />
			<div class="button resize" />
			<div class="button expand" />
		</div>
		<div class="search-box">
			<Icon icon={lockAlt} />
			<span>csslab.app</span>
		</div>
	</div>
	<div class="screen">
		<slot />
	</div>
</div>

<style lang="scss">
	.mac {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		box-shadow: $shadow-large;

		background-color: #fff;

		border-radius: 7px;

		.header {
			height: 55px;
			width: calc(100% - 20px);
			border-bottom: 1px solid rgba(0, 0, 0, 0.08);

			display: flex;
			align-items: center;

			position: relative;
			margin: 0 10px;

			.buttons {
				gap: 10px;
				padding: 10px 10px;
				display: flex;
				align-items: center;
				height: 100%;

				.button {
					display: block;
					width: 13px;
					height: 13px;
					border-radius: 50%;

					box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);

					&.close {
						background-color: #f06861;
					}
					&.resize {
						background-color: #f2be56;
					}
					&.expand {
						background-color: #64c64f;
					}
				}
			}

			.search-box {
				width: 40%;
				background-color: #f2f2f2;
				height: 28px;

				font-size: 12px;

				display: flex;
				align-items: center;
				justify-content: center;

				gap: 6px;
				color: rgba(0, 0, 0, 0.6);
				font-weight: 600;

				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				border-radius: 5px;
				line-height: 1;

				:global(svg) {
					color: rgba(0, 0, 0, 0.5);
				}
			}
		}

		.screen {
			flex: 1;
		}
	}
</style>
