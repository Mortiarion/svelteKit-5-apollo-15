import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// fallback: 'index.html' // розкоментувати при адаптері статік для того щоб забілдити а інакше адаптер авто
		})
	}
};

export default config;
