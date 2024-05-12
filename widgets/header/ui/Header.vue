<script setup lang="ts">
	import NavBar from './NavBar.vue';
</script>

<template>
	<header class="py-2">
		<div class="container flex items-center justify-between">
			<NuxtLink to="/" class="text-4xl font-medium hover:underline">Logo</NuxtLink>
			<NavBar />
		</div>
	</header>
</template>
