import { instance } from '@/shared/axios';
import { type CurrencySymbolType } from '@/shared/consts';
import { eventList } from '@/shared/api';

function formatResponseData(data: any): CurrencySymbolType[] {
	let transformedArray = [];

	for (let key in data.RAW) {
		let crypto: any = {};

		crypto[key] = {
			display: data.DISPLAY[key].USD,
			raw: data.RAW[key].USD,
		};

		transformedArray.push(crypto);
	}

	return transformedArray;
}

export async function loadCurrencies(currencyNames: string[]) {
	const { data } = await instance({
		method: 'get',
		url: 'pricemultifull',
		params: {
			fsyms: currencyNames.join(','),
			tsyms: 'USD',
		},
	});

	return formatResponseData(data);
}
