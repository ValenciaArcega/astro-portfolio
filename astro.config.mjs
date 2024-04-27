import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	site: 'https://valenciaarcega.github.io',
	// base: 'astro-portfolio',
	server: {
		host: '0.0.0.0',
		open: false,
		port: 4321
	},
})
