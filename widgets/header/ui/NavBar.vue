<script setup lang="ts">
	import { navLinks } from '../model';
	import NavLink from './NavLink.vue';

	const supabaseUser = useSupabaseUser();

	const links = computed(() => navLinks.filter((link) => link.requiredAuth && supabaseUser.value));
</script>

<template>
	<nav>
		<ul class="flex items-center gap-2">
			<li v-for="link in links" :key="link.to">
				<NavLink v-bind="link" />
			</li>
		</ul>
	</nav>
</template>
