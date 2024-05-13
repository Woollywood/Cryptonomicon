<script setup lang="ts">
	import Button from 'primevue/button';
	import NavBar from './NavBar.vue';
	import { SignOut } from '@/features/user/sign-out';

	const supabaseUser = useSupabaseUser();
</script>

<template>
	<header class="py-6">
		<div class="container flex items-center justify-between">
			<NuxtLink to="/" class="text-4xl font-medium hover:underline">Лого</NuxtLink>
			<div class="flex items-center gap-8">
				<NavBar />
				<SignOut v-if="supabaseUser" />
				<NuxtLink v-else to="/sign-in">
					<Button>Войти</Button>
				</NuxtLink>
			</div>
		</div>
	</header>
</template>
