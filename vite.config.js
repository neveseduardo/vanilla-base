import { resolve } from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [],
	server: {
		port: 8080,
		host: true,
	},
	resolve: {
		alias: { '@': resolve(__dirname, './src') },
	},
});
