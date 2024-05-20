import { getKey } from '@/shared/helpers';
import { type AggregateIndexResponseType } from '@/shared/api';
import { useFavouritesStore } from './store';

export function updateCurrency(response: AggregateIndexResponseType) {
	const favouritesStore = useFavouritesStore();
	const currencyToUpdate = favouritesStore.getFavourites.find(
		(currencyItem) => getKey(currencyItem) === response.FROMSYMBOL,
	);

	if (currencyToUpdate) {
		const currencyToUpdateValue = currencyToUpdate[getKey(currencyToUpdate)];
		currencyToUpdateValue.display.PRICE = `${currencyToUpdateValue.display.TOSYMBOL} ${response.PRICE}`;
		currencyToUpdateValue.raw.PRICE = response.PRICE;
	}
}
