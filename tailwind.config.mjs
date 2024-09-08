/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
	corePlugins: {
		// Desactiva las utilidades de Tailwind que no quieras usar
		preflight: false, // Esto desactiva los estilos base de Tailwind
	},
}
