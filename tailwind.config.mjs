/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				p50: "#d9e0fb",
				p100: "#b3c1f7",
				p200: "#8ea1f3",
				p300: "#6882ef",
				p400: "#5573ed",
				p500: "#4263eb",
				p600: "#3b59d4",
				p700: "#354fbc",
				p800: "#283b8d",
				p900: "#1a285e",
				p950: "#070a17",
			}
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};
