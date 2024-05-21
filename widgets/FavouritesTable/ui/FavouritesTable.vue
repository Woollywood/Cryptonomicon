<script setup lang="ts">
	import { subscribeToUpdate, unSubscribeToUpdate } from '@/shared/api';
	import { loadCurrencies } from '@/entities/currency';
	import { useFavouritesStore, getFavourites, handleError, updateCurrency } from '@/entities/favourites';
	import { getKey } from '@/shared/helpers';
	import FavouritesRow from './FavouritesRow.vue';

	const favouritesStore = useFavouritesStore();

	try {
		const response = await getFavourites();
		const currencyNames = response.map((currency) => currency.currency);
		const currencyData = await loadCurrencies(currencyNames);
		favouritesStore.setFavourites(currencyData);
		currencyData.forEach((item) => {
			const currencyName = Object.keys(item)[0];
			subscribeToUpdate(currencyName, updateCurrency);
		});
	} catch (error: any) {
		handleError(error);
	}

	onUnmounted(() => {
		const favourites = favouritesStore.getFavourites;
		favourites.forEach((favourite) => {
			const currencyName = Object.keys(favourite)[0];
			unSubscribeToUpdate(currencyName, updateCurrency);
		});
	});
</script>

<template>
	<div class="space-y-4">
		<template v-if="favouritesStore.getFavourites.length">
			<FavouritesRow
				v-for="favourite in favouritesStore.getFavourites"
				:key="getKey(favourite)"
				:currency-symbol="favourite"
		/></template>
		<h2 v-else class="text-center text-lg font-medium">Список пуст</h2>
	</div>
</template>
