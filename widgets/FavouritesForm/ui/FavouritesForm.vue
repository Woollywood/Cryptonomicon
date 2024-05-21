<script setup lang="ts">
	import Sidebar from 'primevue/sidebar';
	import FavouritesFormToggler from './FavouritesFormToggler.vue';
	import InputText from 'primevue/inputtext';
	import FloatLabel from 'primevue/floatlabel';
	import { FavouritesAdd, ValidationError, ErrorType } from '@/features/favourites/add';
	import ClueForm from './ClueForm.vue';
	import { LoadingSpinner } from '@/shared/ui/spinner';

	const opened = ref(false);
	const error = ref<ValidationError | null>(null);
	const cryptoCurrencyName = ref('');

	const favouritesAdd = ref<InstanceType<typeof FavouritesAdd>>();

	const validateCurrencyName = computed(() => cryptoCurrencyName.value.toUpperCase());

	watch(
		() => validateCurrencyName.value,
		() => {
			if (error.value) error.value = null;
		},
	);

	function errorHandler(err: ValidationError) {
		error.value = err;
	}

	async function complete() {
		cryptoCurrencyName.value = '';
		opened.value = false;
	}

	async function submit() {
		await favouritesAdd.value?.clickHandler();
	}

	async function clueClick(currencyName: string) {
		cryptoCurrencyName.value = currencyName;
		await nextTick();
		await submit();
	}
</script>

<template>
	<div>
		<FavouritesFormToggler v-model="opened" />
		<Sidebar v-model:visible="opened" class="w-[420px]">
			<form class="flex h-full flex-col items-center justify-center gap-6" @submit.prevent="submit">
				<div class="space-y-2">
					<FloatLabel>
						<InputText class="w-[320px]" id="cryptoCurrencyName" v-model="cryptoCurrencyName" />
						<label for="cryptoCurrencyName">Введите название криптовалюты</label>
					</FloatLabel>
					<Suspense>
						<ClueForm :printed-currency-name="validateCurrencyName" ref="clueForm" @click="clueClick" />
						<template #fallback>
							<div class="flex items-center justify-center">
								<LoadingSpinner class="!border-background !border-b-transparent" />
							</div>
						</template>
					</Suspense>
					<h3 v-if="error" class="text-sm font-medium text-red-500">{{ error.message }}</h3>
				</div>
				<FavouritesAdd
					:currency-name="validateCurrencyName"
					@complete="complete"
					@error="errorHandler"
					type="submit"
					ref="favouritesAdd" />
			</form>
		</Sidebar>
	</div>
</template>
