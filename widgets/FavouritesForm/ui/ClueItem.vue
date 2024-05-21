<script setup lang="ts">
	type Props = {
		currencyName: string;
	};

	const props = defineProps<Props>();
</script>

<template>
	<div class="cursor-pointer rounded-lg px-2 py-1 text-sm font-medium ring-1 ring-inset ring-background">
		{{ props.currencyName }}
	</div>
</template>
