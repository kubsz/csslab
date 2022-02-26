<script>
	import Logo from '../../assets/logo-light.svg';
	import ButtonInput from '../general/ButtonInput.svelte';

	const links = {
		General: [
			{
				label: 'Home',
				link: '/'
			},
			{
				label: 'Blog',
				link: '/blog'
			},
			{
				label: 'Package',
				link: '/package'
			}
		],
		Components: [
			{
				label: 'Buttons',
				link: '/components/buttons'
			},
			{
				label: 'Inputs',
				link: '/components/inputs'
			},
			{
				label: 'Modals',
				link: '/components/modals'
			},
			{
				label: 'Dropdowns',
				link: '/components/dropdowns'
			}
		],
		Technologies: [
			{
				label: 'React',
				link: '/technologies/react'
			},
			{
				label: 'Vue',
				link: '/technologies/vue'
			},
			{
				label: 'Svelte',
				link: '/technologies/svelte'
			},
			{
				label: 'Vanilla JS',
				link: '/technologies/js'
			}
		],
		Social: [
			{
				label: 'Sign Up',
				link: '/sign-up'
			},
			{
				label: 'Sign In',
				link: '/sign-in'
			},
			{
				label: 'Explore',
				link: '/explore'
			}
		]
	};
</script>

<div class="footer-padding" />
<footer>
	<svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		<path
			fill="#11151c"
			fill-opacity="1"
			d="M0,32L40,58.7C80,85,160,139,240,165.3C320,192,400,192,480,186.7C560,181,640,171,720,170.7C800,171,880,181,960,192C1040,203,1120,213,1200,197.3C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
		/>
	</svg>
	<div class="main">
		<div class="logo-container">
			<Logo />
			<p class="logo-caption">
				CSSLab is a platform dedicated to providing high-quality, scalable & reusable components that can be easily slotted into all kinds
				of web applications.
			</p>
		</div>
		<div class="footer-links">
			{#each Object.entries(links) as [key, linksList]}
				<div class="links-section">
					<h4>{key}</h4>
					<ul>
						{#each linksList as link}
							<li>
								<a href={link.link}>{link.label}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<div class="sign-up">
			<label for="sign-up">Join CSSLab</label>
			<ButtonInput placeholder="Enter your email..." buttonText="Sign Up" />
		</div>
	</div>
	<div class="copyright">
		<p class="copyright-text">All Components are created and licensed by CSSLab ©{new Date().getFullYear()}.</p>
		<div class="copyright-links">
			<a href="/">Terms & Conditions</a>
			<a href="/">Privacy</a>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer-padding {
		height: 80px;
		background-color:$col-light-2;;
	}
	footer {
		background-color: $col-dark-1;
		padding: $gutter * 2 $gutter * 3;

		color: $col-light-3;
		position: relative;
		z-index: 5;

		.wave {
			transform-origin: bottom;
			transform: scaleY(0.4);
			position: absolute;
			bottom: calc(100% - 5px);
			left: 0;
			z-index: -1;
			width:100%;
		}

		.logo-container {
			width: 400px;
			margin-right: 10rem;
			:global(svg) {
				height: 4rem;
			}

			.logo-caption {
				color: rgba(255, 255, 255, 0.5);
				font-size: 1.4rem;
				margin-top: 1rem;
			}
		}

		.main {
			display: flex;
			justify-content: space-between;
			flex-wrap:wrap;
			gap:$gutter * 2;
			margin: $gutter * 2 0;

			.footer-links {
				display: flex;
				gap: $gutter * 2;

				@include respond(1600) {
					order:5;
					flex:1 1 100%;
				}

				.links-section {
					min-width: 15rem;

					h4 {
						font-size: 1.1rem;
						font-weight: 500;
						color: $col-light-2;
						text-transform: uppercase;
						letter-spacing: 1px;
					}

					ul {
						margin-top: 1.5rem;
						display: flex;
						flex-direction: column;
						gap: 0.4rem;
						li {
							color: $col-light-3;
							font-size: 1.4rem;

							a {
								&:hover {
									color: $col-light-1;
								}
							}
						}
					}
				}
			}

			.sign-up {
				display: flex;
				flex-direction: column;
				gap: 10px;

				label {
					text-transform: uppercase;
					letter-spacing: 1px;
					font-weight: 600;
					font-size: 1.2rem;
				}
			}
		}

		.copyright {
			display: flex;
			justify-content: space-between;
			padding-top: $gutter * 1.5;
			margin-top: $gutter * 1.5;
			border-top: 2px solid rgba(255, 255, 255, 0.05);
			font-size: 1.3rem;

			&-text {
				color: rgba(255, 255, 255, 0.4);
				font-size: inherit;
			}
			&-links {
				display: flex;
				gap: 10px;

				a {
					display: flex;
					align-items: center;
					gap: 10px;

					&:hover {
						color: $col-light-5;
					}

					&:not(:last-of-type)::after {
						content: '';
						display: block;
						width: 3px;
						height: 3px;
						background-color: rgba(255, 255, 255, 0.2);
						border-radius: 50%;
					}
				}
			}
		}
	}
</style>
