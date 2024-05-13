<script setup lang="ts">
	import { Button } from '@/shared/ui/button';
	import { signOut } from '../model';
	import { useToast } from 'primevue/usetoast';

	const isLoading = ref(false);
	const toast = useToast();
	const router = useRouter();

	async function clickHandler() {
		isLoading.value = true;
		const { error } = await signOut();
		isLoading.value = false;

		if (error) {
			toast.add({ severity: 'error', summary: 'Ошибка', detail: 'Не удалось выйти из аккаунта', life: 3000 });
		} else {
			router.push('/');
		}
	}
</script>

<template>
	<Button @click="clickHandler" :loading="isLoading" label="Выйти" />
</template>
