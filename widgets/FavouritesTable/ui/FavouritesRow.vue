<script setup lang="ts">
	import { formatPrice } from '@/shared/helpers';
	import { type CurrencySymbolType } from '@/shared/consts';
	import Avatar from 'primevue/avatar';
	import { getKey } from '@/shared/helpers';
	import { FavouritesDelete } from '@/features/favourites/delete';

	type Props = {
		currencySymbol: CurrencySymbolType;
	};
	const props = defineProps<Props>();

	const currencySymbol = computed(() => props.currencySymbol[getKey(props.currencySymbol)]);
	const formattedPrice = computed(() => formatPrice(currencySymbol.value.raw.PRICE));
</script>

<template>
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-4">
			<Avatar
				:image="`https://www.cryptocompare.com${currencySymbol.display.IMAGEURL}`"
				size="large"
				shape="circle" />
			<h2 class="text-lg font-medium">{{ currencySymbol.raw.FROMSYMBOL }}</h2>
		</div>
		<div>{{ formattedPrice }}</div>
		<FavouritesDelete :currency-name="currencySymbol.raw.FROMSYMBOL" />
	</div>
</template>
