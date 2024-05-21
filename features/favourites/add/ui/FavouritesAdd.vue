<script setup lang="ts">
	import { Button } from '@/shared/ui/button';
	import { addCurrency } from '../api';
	import { ValidationError, ErrorType } from '../consts';
	import { useFavouritesStore, handleError, updateCurrency } from '@/entities/favourites';
	import { loadCurrencies } from '@/entities/currency';
	import { subscribeToUpdate } from '@/shared/api';
	import { getKey } from '@/shared/helpers';
	import { useAvailableCoins } from '@/entities/currency';

	type Props = {
		currencyName: string;
	};

	type Emits = {
		(e: 'complete'): void;
		(e: 'error', error: ValidationError): void;
	};

	const props = defineProps<Props>();
	const emits = defineEmits<Emits>();

	const favouritesStore = useFavouritesStore();
	const availableCoinsStore = useAvailableCoins();
	const isPending = ref(false);

	async function clickHandler() {
		if (favouritesStore.getFavourites.find((item) => item[getKey(item)].raw.FROMSYMBOL === props.currencyName)) {
			emits('error', new ValidationError('Валюта уже добавлена', ErrorType.ALREADY_EXISTS));
			return;
		}

		if (!props.currencyName.length) {
			emits('error', new ValidationError('Пустое поле для ввода', ErrorType.EMPTY_FIELD));
			return;
		}

		if (
			!Object.entries(availableCoinsStore.getAvailableCoins).find(
				([_, value]) => value.symbol === props.currencyName,
			)
		) {
			emits('error', new ValidationError('Валюта не найдена', ErrorType.UNKNOWN_CURRENCY));
			return;
		}

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

	defineExpose({
		clickHandler,
	});
</script>

<template>
	<Button label="Добавить" :loading="isPending">
		<template #icon>
			<i class="fa-solid fa-plus"></i>
		</template>
	</Button>
</template>
