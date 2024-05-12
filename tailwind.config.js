/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./shared/**/*.{js,vue,ts}',
		'./entities/**/*.{js,vue,ts}',
		'./features/**/*.{js,vue,ts}',
		'./widgets/**/*.{js,vue,ts}',
		'./layouts/**/*.{js,vue,ts}',
		'./routes/**/*.{js,vue,ts}',
		'./pages/**/*.{js,vue,ts}',
		'./plugins/**/*.{js,ts}',
	],
	theme: {
		extend: {
			container: {
				padding: '2rem',
				center: true,
			},
			colors: {
				background: {
					DEFAULT: 'rgb(var(--background))',
				},
				foreground: {
					DEFAULT: 'rgb(var(--foreground))',
				},
			},
		},
	},
	plugins: [],
};
