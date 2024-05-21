<script setup lang="ts">
	import Button from 'primevue/button';

	const modelValue = defineModel<boolean>();

	function toggle() {
		modelValue.value = !modelValue.value;
	}
</script>

<template>
	<Teleport to="body">
		<Button rounded class="fixed bottom-4 right-4 z-50 md:bottom-12 md:right-12" @click="toggle">
			<template #icon>
				<i class="fa-solid fa-plus"></i>
			</template>
		</Button>
	</Teleport>
</template>
