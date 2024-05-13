// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		head: {
			script: [
				{
					src: 'https://kit.fontawesome.com/0445eaadf3.js',
					tagPosition: 'head',
				},
			],
		},
	},
	modules: ['@pinia/nuxt', 'nuxt-primevue', '@nuxtjs/supabase'],
	css: [
		'@/app/styles/tailwind.css',
		'@/app/styles/overwrites.css',
		'primevue/resources/themes/aura-light-green/theme.css',
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	supabase: {
		redirect: false,
	},
	primevue: {
		options: {
			ripple: true,
		},
		components: {
			exclude: '*',
		},
	},
	dir: {
		pages: 'routes',
	},
});
