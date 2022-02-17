<script>
	import beautify from 'js-beautify';
	const { html: formatHTML, js: formatJS, css: formatCSS } = beautify;
	import Icon from '@iconify/svelte';
	import Highlight from 'svelte-highlight';
	import javascript from 'svelte-highlight/src/languages/javascript';
	import xml from 'svelte-highlight/src/languages/xml';
	import css from 'svelte-highlight/src/languages/css';
	import 'svelte-highlight/src/styles/base16-nord.css';

	export let tabs;
	export let config;

	let activeTabIndex = 0;

	const formatCode = ({ language, code }) => {
		let obj = {};
		switch (language) {
			case 'javascript':
				obj = { code: formatJS(code), language: javascript };
			case 'html':
				obj = { code: formatHTML(code), language: xml };
			case 'css':
				obj = { code: formatCSS(code), language: css };
			default:
				obj = { code: code, language: javascript };
		}
		return obj;
	};

	$: activeWindow = formatCode(tabs[activeTabIndex]);

	$: {
		tabs;
		activeTabIndex = 0;
	}
</script>

<div class="code-editor" data-language={config.language.name} style="--col-lang: {config.language.color}">
	<div class="mac-buttons">
		<div class="circle red" />
		<div class="circle yellow" />
		<div class="circle green" />
	</div>
	<ul class="tabs">
		{#each tabs as file, i}
			<li>
				<button on:click={() => (activeTabIndex = i)} class:active={activeTabIndex === i}>
					<Icon icon={config.language.icon} />
					<span>{file.name}</span>
				</button>
			</li>
		{/each}
	</ul>
	<div class="code">
		<Highlight language={config.language} code={activeWindow.code} />
	</div>
</div>

<style lang="scss">
	.code-editor {
		background-color: #2e3440;
		border-radius: 3px;
		width: 100%;
		box-shadow: $shadow;

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
			width: 100%;
			overflow: hidden;
			// color: $col-light-3;

			:global(pre) {
				margin: 0 !important;
				font-size: 1.4rem;
				overflow-x: auto;
				white-space: pre-wrap;
				white-space: -moz-pre-wrap;
				white-space: -pre-wrap;
				white-space: -o-pre-wrap;
				word-wrap: break-word;
			}
			:global(code) {
				display: block;
				border-radius: 0 0 3px 3px;
				height: 30rem;
				overflow-y: scroll;
				max-width: 100%;
			}
			:global(code::-webkit-scrollbar-track) {
				background-color: rgba(255, 255, 255, 0.1);
			}

			:global(code::-webkit-scrollbar) {
				width: 0.6rem;
			}

			:global(code::-webkit-scrollbar-thumb) {
				background-color: var(--col-lang);
			}
		}
	}
</style>
