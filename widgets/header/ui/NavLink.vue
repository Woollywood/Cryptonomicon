<script setup lang="ts">
	import { type NavLinkType } from '../consts';

	type Props = NavLinkType;
	const props = defineProps<Props>();
</script>

<template>
	<NuxtLink :to="props.to" class="hover:underline">
		{{ props.label }}
	</NuxtLink>
</template>
