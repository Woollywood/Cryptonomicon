import { defineStore } from 'pinia';
import { type CurrencySymbolType } from '@/shared/consts';
import { getKey } from '@/shared/helpers';

export const useFavouritesStore = defineStore('favourites', () => {
	const favourites = ref<CurrencySymbolType[]>([]);

	function deleteFavourite(currencyName: string) {
		console.log(currencyName);

		favourites.value = favourites.value.filter((item) => item[getKey(item)].raw.FROMSYMBOL !== currencyName);
	}

	function shiftFavourite(item: CurrencySymbolType) {
		favourites.value.unshift(item);
	}

	function setFavourites(items: CurrencySymbolType[]) {
		favourites.value = items;
	}

	const getFavourites = computed(() => favourites.value);

	return { getFavourites, shiftFavourite, setFavourites, deleteFavourite };
});
