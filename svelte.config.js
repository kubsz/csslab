import autoPreprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';
import vercel from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel({ trailingSlash: 'never' }),
		vite: {
			plugins: [svg()],
			optimizeDeps: {
				include: ['highlight.js/lib/core']
			},
			server: {
				fs: {
					allow: ['locales']
				}
			},
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$utils: path.resolve('./src/lib/utils'),
					$assets: path.resolve('./src/assets'),
					$directives: path.resolve('./src/directives'),
					$hooks: path.resolve('./src/hooks')
				}
			}
		}
	},
	preprocess: [
		autoPreprocess({
			scss: { prependData: `@import 'src/scss/main.scss';` }
		})
	],
	onwarn: (warning, handler) => {
		const { code, frame } = warning;
		if (code === 'css-unused-selector') return;

		handler(warning);
	}
};

export default config;
