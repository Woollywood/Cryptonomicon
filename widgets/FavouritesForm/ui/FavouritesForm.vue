<script setup lang="ts">
	import Sidebar from 'primevue/sidebar';
	import FavouritesFormToggler from './FavouritesFormToggler.vue';
	import InputText from 'primevue/inputtext';
	import FloatLabel from 'primevue/floatlabel';
	import { FavouritesAdd } from '@/features/favourites/add';

	const opened = ref(false);
	const cryptoCurrencyName = ref('');

	function complete() {
		cryptoCurrencyName.value = '';
		opened.value = false;
	}
</script>

<template>
	<div>
		<FavouritesFormToggler v-model="opened" />
		<Sidebar v-model:visible="opened" class="w-[420px]">
			<div class="flex h-full flex-col items-center justify-center gap-6">
				<FloatLabel>
					<InputText class="w-[320px]" id="cryptoCurrencyName" v-model="cryptoCurrencyName" />
					<label for="cryptoCurrencyName">Введите название криптовалюты</label>
				</FloatLabel>
				<FavouritesAdd :currency-name="cryptoCurrencyName" @complete="complete" />
			</div>
		</Sidebar>
	</div>
</template>
