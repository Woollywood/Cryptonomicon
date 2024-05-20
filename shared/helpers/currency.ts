import type { CurrencySymbolType } from '@/shared/consts';

export function getKey(item: CurrencySymbolType) {
	const [key, value] = Object.entries(item)[0];
	return key;
}

export function formatPrice(price: number) {
	return price > 1 ? price.toFixed(2) : price.toPrecision(6);
}
