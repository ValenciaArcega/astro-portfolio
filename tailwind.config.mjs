/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				a0: '#fff',
				a10: '#f2f2f7',
				a50: '#e9ecef',
				a100: '#dee2e6',
				a200: '#ced4da',
				a300: '#adb5bd',
				a400: '#868e96',
				a500: '#777',
				a600: '#666',
				a700: '#555',
				a800: '#495057',
				a900: '#343a40',
				a910: '#212529',
				a920: '#202224',
				a930: '#1D1F21',
				a940: '#191B1C',
				a950: '#121212',
				a990: '#0a0a0a',
				a1: '#000',
			}
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};
