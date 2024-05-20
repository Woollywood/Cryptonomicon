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
		console.log(props.currencyName);

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
	<Button label="Удалить" @click="clickHandler" :loading="isPending">
		<template #icon>
			<i class="fa-solid fa-minus"></i>
		</template>
	</Button>
</template>
