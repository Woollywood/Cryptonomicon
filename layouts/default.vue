<script setup lang="ts">
	import { Header } from '@/widgets/header';
</script>

<template>
	<div class="grid min-h-screen grid-rows-[auto_1fr]">
		<Header />
		<main class="container">
			<slot />
		</main>
	</div>
</template>
