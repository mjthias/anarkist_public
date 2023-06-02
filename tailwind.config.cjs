/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'danger': "rgba(220,38,37,var(--tw-bg-opacity))",
			'success': 'rgba(23,163,74,1)',
			'background': 'rgba(14,14,14, var(--tw-bg-opacity))',
			'outline': 'rgba(82,82,82,1)',
			'outline-focus': 'rgba(138,138,138,1)', 
			'line': 'rgba(71,71,71,100)',
			'input-bg': 'rgba(45,45,45,1)',
			'highlight-bg': 'rgba(45,45,45,1)',
			'highlight-bg-hover': 'rgba(45,45,45,0.35)',
			'primary': 'rgba(255,255,255,1)',
			'secondary': 'rgba(156,156,156,1)',
			'btn': {
			  'light': 'rgba(80,170,100,var(--tw-bg-opacity))',
			  'dark': 'rgba(67,146,85,var(--tw-bg-opacity))',
			  'invalid': 'rgba()',
			  'danger': 'rgba(220,38,37,var(--tw-bg-opacity))'
			}
		},
		fontFamily: {
			sans: ['Barlow Semi Condensed', 'sans-serif'],
			pixel: ['pixel', 'sans-serif']
		},
		extend: {
			spacing: {
				'104': '26rem'
			}
		},
	},
	plugins: [],
}
