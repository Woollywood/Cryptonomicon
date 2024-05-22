<script setup lang="ts">
	import { getCoinList, useAvailableCoins } from '@/entities/currency';
	import { type AvailableCurrencyType } from '@/shared/consts';
	import ClueItem from './ClueItem.vue';
	import { LoadingSpinner } from '@/shared/ui/spinner';

	type Props = {
		printedCurrencyName: string;
	};

	type Emits = {
		(e: 'click', currencyName: string): void;
	};

	const props = defineProps<Props>();
	const emits = defineEmits<Emits>();

	const isPending = ref(true);
	const data = ref<AvailableCurrencyType[]>([]);

	const availableCoinsStore = useAvailableCoins();
	availableCoinsStore.availableCoins = data.value;

	await getCoinList().then((d) => {
		data.value = d;
		isPending.value = false;
	});

	const filteredItems = computed(() =>
		props.printedCurrencyName.length
			? Object.fromEntries(
					Object.entries(data.value)
						.filter(([key, value]) => {
							return key.includes(props.printedCurrencyName);
						})
						.slice(0, 8),
				)
			: {},
	);
</script>

<template>
	<div v-if="isPending" class="flex items-center justify-center">
		<LoadingSpinner class="!border-background !border-b-transparent" />
	</div>
	<div class="grid grid-cols-4 items-center gap-1" v-else-if="Object.entries(filteredItems!).length">
		<ClueItem
			v-for="item in filteredItems"
			:key="item.id"
			:currency-name="item.symbol"
			@click="emits('click', item.symbol)" />
	</div>
</template>
