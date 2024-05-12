<script setup lang="ts">
	import { navLinks } from '../model';
	import NavLink from './NavLink.vue';
</script>

<template>
	<nav>
		<ul class="flex items-center gap-2">
			<li v-for="link in navLinks" :key="link.to">
				<NavLink v-bind="link" />
			</li>
		</ul>
	</nav>
</template>
