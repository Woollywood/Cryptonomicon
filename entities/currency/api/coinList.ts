import { instance } from '@/shared/axios';
import { type AvailableCurrencyListResponseType } from '@/shared/consts';

export async function getCoinList() {
	const { data } = await instance<AvailableCurrencyListResponseType>({
		method: 'get',
		url: 'blockchain/list',
	});

	return data.Data;
}
