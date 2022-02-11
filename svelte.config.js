import autoPreprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),
		vite: {
			plugins: [svg()]
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
