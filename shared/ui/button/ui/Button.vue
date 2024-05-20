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
		<template #icon>
			<slot name="icon" />
		</template>
		<template #loadingicon>
			<div class="flex items-center justify-center">
				<LoadingSpinner class="aspect-square !h-full !w-[1em]" />
			</div>
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
