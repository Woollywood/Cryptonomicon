<script setup lang="ts">
	import Button, { type ButtonProps } from 'primevue/button';
	import LoadingSpinner from './LoadingSpinner.vue';

	interface Props extends /* @vue-ignore */ Omit<ButtonProps, 'pt'> {}
	const props = defineProps<Props>();

	const styles = computed(() => ({
		root: 'root',
		label: 'label',
	}));
</script>

<template>
	<Button :pt="styles" v-bind="props">
		<template #loadingicon>
			<LoadingSpinner class="aspect-square !h-full !w-[1em]" />
		</template>
	</Button>
</template>

<style scoped>
	.root {
		@apply justify-center gap-2;
	}

	::v-deep(.label) {
		@apply flex-grow-0;
	}
</style>
