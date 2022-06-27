<script>
	import { onDestroy } from 'svelte';

	import Icon from '@iconify/svelte';
	import { fly, scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import Button from './general/Button.svelte';

	export let dropdown;
	export let heading;
</script>

<div class="dropdown" in:fly|local={{ y: 10, duration: 400, easing: backOut }}>
	<h3 in:scale={{ delay: 100, y: 20 }}>{heading}</h3>
	<ul>
		{#each dropdown.sections as section, i (section.title)}
			<li in:scale={{ delay: 200 + i * 50 }}>
				<a href={section.link} style="--col: {section.color}">
					<div class="icon-container">
						<Icon icon={section.icon} />
					</div>
					<div class="info">
						<h4>
							{section.title}
							{#if section.badge}
								<span class="new-badge">{section.badge}</span>
							{/if}
						</h4>
						<p>{section.description}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
	{#if dropdown.footer}
		<div class="footer">
			<div class="main" in:scale={{ delay: 550 }}>
				<h3 class="title">{dropdown.footer.title}</h3>
				<p>{dropdown.footer.description}</p>
			</div>
			<div class="button-container" in:scale={{ delay: 700 }}>
				<Button modifiers={['secondary']}>{dropdown.footer.button.text}</Button>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.dropdown {
		position: absolute;
		width: 700px;
		background-color: $col-light-1;
		right: 0rem;
		transform: translateX(50%);
		top: calc(100% + #{2rem});
		border-radius: 6px;
		box-shadow: $shadow;

		display: flex;
		flex-direction: column;
		align-items: flex-start;

		&::before {
			content: '';
			position: absolute;
			bottom: 100%;
			height: 2rem;
			width: 100%;
		}

		&::after {
			content: '';
			display: block;
			position: absolute;
			bottom: calc(100% - 0rem);
			left: calc(50% - 0.8rem);
			transform: translateX(-50%);
			border-bottom: 0.7rem solid $col-light-2;
			border-right: 0.7rem solid transparent;
			border-left: 0.7rem solid transparent;
		}

		& > h3 {
			font-size: 1.6rem;
			font-weight: 600;
			margin: $gutter $gutter 0 $gutter;
		}

		ul {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: $gutter;
			margin: $gutter;

			li {
				a {
					display: flex;
					grid-gap: $gutter;
					padding: $gutter;
					border-radius: $radius;

					border: 1px solid transparent;

					transition: 0.15s ease;

					&:hover {
						background-color: rgba(var(--col), 0.15);
						border-color: rgba(var(--col), 0.1);
						// box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
					}

					.icon-container {
						display: block;
						width: 32px;
						height: 32px;
						flex: 0 0 32px;
						color: rgb(var(--col));
						background-color: rgba(var(--col), 0.15);
						@include flexCenter;
						border-radius: $radius;
						border: 1px solid rgba(var(--col), 0.15);
					}

					.info {
						display: flex;
						flex-direction: column;
						gap: 0.3rem;

						h4 {
							font-size: 1.4rem;
							font-weight: 600;
							color: $col-dark-3;

							.new-badge {
								display: inline-block;
								background-color: $col-secondary;
								color: #fff;
								padding: 0.4rem 0.6rem;
								border-radius: 0.2rem;
								margin-left: 0.5rem;

								text-transform: uppercase;
								letter-spacing: 1px;
								font-size: 0.7rem;
								font-weight: 600;
								transform: translateY(-0.3rem);
							}
						}
						p {
							font-size: 1.2rem;
							color: $col-dark-6;
						}
					}
				}
			}
		}

		.footer {
			align-self: stretch;
			background-color: rgba($col-dark-1, 0.05);
			padding: $gutter 2rem;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.main {
				.title {
					font-size: 1.6rem;
					font-weight: 700;
					color: $col-dark-3;
				}

				p {
					font-size: 1.3rem;
					color: $col-dark-5;
				}
			}
			.button-container {
				margin: 1rem 1rem;
			}
		}
	}
</style>
