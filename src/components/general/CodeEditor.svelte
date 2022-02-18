<script>
	import beautify from 'js-beautify';
	const { html: formatHTML, js: formatJS, css: formatCSS } = beautify;
	import Icon from '@iconify/svelte';
	import { HighlightAuto, HighlightSvelte } from 'svelte-highlight';
	import javascript from 'svelte-highlight/src/languages/javascript';
	import xml from 'svelte-highlight/src/languages/xml';
	import css from 'svelte-highlight/src/languages/css';
	import 'svelte-highlight/src/styles/base16-nord.css';

	import javascriptFill from '@iconify/icons-akar-icons/javascript-fill.js';
	import svelteIcon from '@iconify/icons-cib/svelte.js';
	import vueFill from '@iconify/icons-akar-icons/vue-fill.js';
	import reactFill from '@iconify/icons-akar-icons/react-fill.js';
	import sassAlt from '@iconify/icons-cib/sass-alt.js';
	import css3Icon from '@iconify/icons-bxl/css3.js';
	import errorOutline from '@iconify/icons-ci/error-outline.js';

	import Spinner from './Spinner.svelte';
	import SpinningIcon from './SpinningIcon.svelte';

	export let tabs = [];
	export let technologyId;

	// condition: [language name, array of supported extensions to fit condition]
	const languages = [
		{
			name: 'React',
			id: 'react',
			extensions: ['js'],
			icon: reactFill,
			color: [110, 208, 241]
		},
		{
			name: 'Vue',
			id: 'vue',
			extensions: ['html', 'vue'],
			icon: vueFill,
			color: [63, 185, 132]
		},
		{
			name: 'Svelte',
			id: 'svelte',
			extensions: ['svelte'],
			icon: svelteIcon,
			color: [242, 57, 0]
		},
		{
			name: 'JavaScript',
			id: 'javascript',
			extensions: ['js'],
			icon: javascriptFill,
			color: [218, 185, 45]
		},
		{
			name: 'CSS',
			id: 'css',
			extensions: ['css'],
			icon: css3Icon,
			color: [20, 108, 174]
		},
		{
			name: 'SCSS',
			id: 'scss',
			extensions: ['scss', 'sass'],
			icon: sassAlt,
			color: [207, 100, 154]
		}
	];
	const getTechnologyFromId = (id) => languages.find((x) => x.id === id);

	$: technology = getTechnologyFromId(technologyId);

	let activeTabIndex = 0;

	const getTechnologyFromExtension = (extension) => {
		const possibleLanguages = languages.filter((item) => item.extensions.indexOf(extension) > -1);

		if (!possibleLanguages.length) {
			// SHOULD NOT HAPPEN - extension is not supported by any languages
			return { icon: errorOutline, color: [255, 255, 255] };
		}

		if (possibleLanguages.length === 1) {
			// is good - there is a specific language for the extension
			return possibleLanguages[0];
		}

		return languages[1];
	};

	const formatCode = ({ extension, code }) => {
		switch (extension) {
			case 'javascript':
			case 'react':
				return formatJS(code, { indent_size: 4 });
			case 'html':
			case 'svelte':
				return formatHTML(code, { indent_size: 4 });
			case 'css':
			case 'scss':
				return formatCSS(code, { indent_size: 4 });
			default:
				return formatHTML(code, { indent_size: 4 });
		}
	};

	$: activeTabCode = tabs[activeTabIndex] ? formatCode(tabs[activeTabIndex]) : null;

	$: {
		// reset active tab index to 1 when language changes;
		technologyId;
		activeTabIndex = 0;
	}
</script>

<div class="code-editor" data-language={technologyId}>
	<div class="mac-buttons">
		<div class="circle red" />
		<div class="circle yellow" />
		<div class="circle green" />
	</div>
	<ul class="tabs">
		{#each tabs as file, i}
			<li style="--col-lang: {getTechnologyFromExtension(file.extension).color}">
				<button on:click={() => (activeTabIndex = i)} class:active={activeTabIndex === i}>
					<Icon icon={getTechnologyFromExtension(file.extension).icon} />
					<span>{file.name}</span>
				</button>
			</li>
		{/each}
	</ul>
	<div class="code" style="--col-lang: {technology.color}">
		{#if activeTabCode}
			{#if technologyId === 'svelte'}
				<HighlightSvelte code={activeTabCode} />
			{:else}
				<HighlightAuto code={activeTabCode} />
			{/if}
		{:else}
			<div class="loading-container">
				<SpinningIcon icon={technology.icon} size="32px" color="rgb({technology.color})" />
				<p>
					Fetching <span style="color:rgb({technology.color})">{technology.name}</span> component source code...
				</p>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.code-editor {
		background-color: #2e3440;
		border-radius: 3px;
		width: 100%;
		box-shadow: $shadow;

		height: 35rem;

		display: flex;
		flex-direction: column;

		.mac-buttons {
			display: flex;
			gap: 8px;
			padding: 12px;
			background-color: rgba(0, 0, 0, 0.1);
			border-radius: 3px 3px 0 0;

			.circle {
				width: 11px;
				height: 11px;
				border-radius: 50%;

				&.red {
					background-color: #ff5f56;
				}
				&.yellow {
					background-color: #ffbd2e;
				}
				&.green {
					background-color: #27c93f;
				}
			}
		}

		.tabs {
			display: flex;
			background-color: rgba(255, 255, 255, 0.05);
			color: $col-light-4;

			button {
				// background-color: rgba(0, 0, 0, 0.1);
				padding: 10px 15px 10px 10px;
				display: flex;
				gap: 10px;
				font-size: 1.2rem;
				transition: 0.1s ease;
				font-weight: 500;

				cursor: pointer;

				&:hover {
					color: $col-light-3;
				}

				:global(svg) {
					width: 1.6rem;
					color: rgba(var(--col-lang), 1);
				}

				&.active {
					background-color: rgba(var(--col-lang), 0.08);
					color: rgba(255, 255, 255, 0.8);
				}
			}
		}

		.code {
			flex: 1;
			width: 100%;
			overflow: hidden;
			// color: $col-light-3;

			display: flex;
			flex-direction: column;

			.loading-container {
				@include flexCenter;
				flex-direction: column;
				gap: 20px;
				height: 100%;
				flex: 1;

				p {
					color: $col-light-4;
					font-size: 13px;
					// text-transform: uppercase;
					// letter-spacing: 1px;
					// font-weight: 700;
					text-align: center;

					span {
						font-weight: 700;
					}
				}
			}

			:global(pre) {
				margin: 0 !important;
				font-size: 1.2rem;
				white-space: pre-wrap;
				white-space: -moz-pre-wrap;
				white-space: -pre-wrap;
				white-space: -o-pre-wrap;
				word-wrap: break-word;
				overflow-y: auto;
			}
			:global(code) {
				display: block;
				border-radius: 0 0 3px 3px;
				max-width: 100%;
				overflow-y: auto;
			}
			:global(pre::-webkit-scrollbar-track) {
				background-color: rgba(255, 255, 255, 0.1);
			}

			:global(pre::-webkit-scrollbar) {
				width: 0.6rem;
			}

			:global(pre::-webkit-scrollbar-thumb) {
				background-color: rgb(var(--col-lang));
			}
		}
	}
</style>
