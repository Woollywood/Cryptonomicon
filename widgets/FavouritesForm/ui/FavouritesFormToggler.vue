<script setup lang="ts">
	import Button from 'primevue/button';

	const modelValue = defineModel<boolean>();

	function toggle() {
		modelValue.value = !modelValue.value;
	}
</script>

<template>
	<Teleport to="body">
		<Button rounded class="fixed bottom-12 right-12 z-50" @click="toggle">
			<template #icon>
				<i class="fa-solid fa-plus"></i>
			</template>
		</Button>
	</Teleport>
</template>
