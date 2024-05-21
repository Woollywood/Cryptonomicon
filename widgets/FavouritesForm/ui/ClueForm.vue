<script setup lang="ts">
	import { getCoinList, useAvailableCoins } from '@/entities/currency';
	import ClueItem from './ClueItem.vue';

	type Props = {
		printedCurrencyName: string;
	};

	type Emits = {
		(e: 'click', currencyName: string): void;
	};

	const props = defineProps<Props>();
	const emits = defineEmits<Emits>();

	const availableCoinsStore = useAvailableCoins();
	const data = await getCoinList();
	availableCoinsStore.availableCoins = data;

	const filteredItems = computed(() =>
		props.printedCurrencyName.length
			? Object.fromEntries(
					Object.entries(data)
						.filter(([key, value]) => {
							return key.includes(props.printedCurrencyName);
						})
						.slice(0, 8),
				)
			: {},
	);
</script>

<template>
	<div class="grid grid-cols-4 items-center gap-1" v-if="Object.entries(filteredItems!).length">
		<ClueItem
			v-for="item in filteredItems"
			:key="item.id"
			:currency-name="item.symbol"
			@click="emits('click', item.symbol)" />
	</div>
</template>
