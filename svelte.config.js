import adapter from '@sveltejs/adapter-auto';
import autoPreprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [svg()]
		}
	},
	preprocess: [
		autoPreprocess({
			scss: { prependData: `@import 'src/scss/main.scss';` }
		})
	]
};

export default config;
