<div class="iphone">
	<div class="buttons-left">
		<div class="external-button left silentmode" />
		<div class="external-button left vol up" />
		<div class="external-button left vol down" />
	</div>
	<div class="screen">
		<div class="bezel">
			<div class="camera" />
			<div class="speaker" />
		</div>
		<slot />
	</div>
</div>

<style lang="scss">
	.iphone {
		height: 100%;
		width: 100%;
		display: block;
		box-shadow: $shadow-large;
		border-radius: 25px;

		box-shadow: 0 0 0 11px #000203, 0 0 0 13px #9e1717, 0 0 0 16px #7c0000;
		overflow: hidden;

		.buttons-left {
			right: calc(100% + 16px);
			top: 60px;

			display: flex;
			flex-direction: column;
			gap: 10px;
			width: 2px;
			height: 100px;
			position: absolute;

			.external-button {
				width: 100%;
				background-color: #d42828;

				&.left {
					border-radius: 10px 0 0 10px;
				}
			}

			.silentmode {
				height: 22px;
				transform: translateY(-13px);
			}

			.vol {
				height: 40px;
			}
		}

		.screen {
			height: 100%;
			width: 100%;
			position: relative;
			background-color: #fff;
			.bezel {
				height: 24px;
				background-color: #000203;
				width: 50%;
				z-index: 20;
				position: absolute;
				top: 0;
				left: 50%;
				transform: translateX(-50%);
				border-radius: 0 0 15px 15px;

				display: flex;

				padding: 0 15px;
				padding-top: 4px;
				.camera {
					position: absolute;
					left: 73%;
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background-image: radial-gradient(#2b2a40, #0a0a17 30%);
					opacity: 0.8;
				}

				.speaker {
					width: 32px;
					height: 8px;
					background-image: linear-gradient(to bottom, transparent 0, rgba(#131215, 0.4) 30%, transparent 90%);
					//  linear-gradient(to bottom, transparent, #131215, transparent);
					border-radius: 3px;
					position: absolute;
					left: 50%;
					top: 5px;
					transform: translateX(-50%);
				}
			}
		}
	}
</style>
