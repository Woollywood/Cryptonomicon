<script setup lang="ts">
	import { Button } from '@/shared/ui/button';
	import { useFavouritesStore, updateCurrency, handleError } from '@/entities/favourites';
	import { unSubscribeToUpdate } from '@/shared/api';
	import { deleteCurrency } from '../api';

	type Props = {
		currencyName: string;
	};

	const props = defineProps<Props>();

	const isPending = ref(false);
	const favouritesStore = useFavouritesStore();

	async function clickHandler() {
		isPending.value = true;
		try {
			await deleteCurrency(props.currencyName);
			favouritesStore.deleteFavourite(props.currencyName);
			unSubscribeToUpdate(props.currencyName, updateCurrency);
		} catch (error: any) {
			handleError(error);
		} finally {
			isPending.value = false;
		}
	}
</script>

<template>
	<Button class="hidden md:inline-flex" label="Удалить" @click="clickHandler" :loading="isPending">
		<template #icon>
			<i class="fa-solid fa-minus"></i>
		</template>
	</Button>
	<Button class="!md:gap-2 inline-flex !gap-0 md:hidden" @click="clickHandler" :loading="isPending">
		<template #icon>
			<i class="fa-solid fa-minus"></i>
		</template>
	</Button>
</template>
