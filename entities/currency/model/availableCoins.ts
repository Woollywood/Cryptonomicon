import { defineStore } from 'pinia';
import { type AvailableCurrencyType } from '@/shared/consts';

export const useAvailableCoins = defineStore('availableCoins', () => {
	const availableCoins = ref<AvailableCurrencyType[]>([]);

	const getAvailableCoins = computed(() => availableCoins.value);

	return {
		availableCoins,
		getAvailableCoins,
	};
});
