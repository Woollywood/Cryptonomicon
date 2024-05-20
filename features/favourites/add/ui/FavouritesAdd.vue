<script setup lang="ts">
	import { Button } from '@/shared/ui/button';
	import { addCurrency } from '../api';
	import { useFavouritesStore, handleError, updateCurrency } from '@/entities/favourites';
	import { loadCurrencies } from '@/entities/currency';
	import { subscribeToUpdate } from '@/shared/api';
	import { getKey } from '@/shared/helpers';

	type Props = {
		currencyName: string;
	};

	type Emits = {
		(e: 'complete'): void;
	};

	const props = defineProps<Props>();
	const emits = defineEmits<Emits>();

	const favouritesStore = useFavouritesStore();
	const isPending = ref(false);

	async function clickHandler() {
		isPending.value = true;
		try {
			await addCurrency(props.currencyName);
			const response = await loadCurrencies([props.currencyName]);
			const [addedCurrency] = response;
			favouritesStore.shiftFavourite(addedCurrency);
			subscribeToUpdate(addedCurrency[getKey(addedCurrency)].raw.FROMSYMBOL, updateCurrency);
		} catch (error: any) {
			handleError(error);
		} finally {
			isPending.value = false;
			emits('complete');
		}
	}
</script>

<template>
	<Button label="Добавить" @click="clickHandler" :loading="isPending">
		<template #icon>
			<i class="fa-solid fa-plus"></i>
		</template>
	</Button>
</template>
