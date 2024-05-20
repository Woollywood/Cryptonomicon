import { CHANNEL_TYPES, type AggregateIndexResponseType, type ResponseBaseType } from './types';
import { eventList } from '../eventManager';

const baseWsUrl = import.meta.client ? useRuntimeConfig().public.cryptocompareWsBaseUrl : null;
const apiKey = import.meta.client ? useRuntimeConfig().public.cryptocompareApiKey : process.env.CRYPTOCOMPARE_API_KEY;

export const webSocket = import.meta.client ? new WebSocket(`${baseWsUrl!}?api_key=${apiKey}`) : null;

function toConsole(...str: string[]) {
	console.log('[websocket]: ' + str.join(', '));
}

webSocket?.addEventListener('open', () => {
	toConsole('opened');
});

webSocket?.addEventListener('message', (e) => {
	const responseData: ResponseBaseType = JSON.parse(e.data);
	const { TYPE } = responseData;

	switch (TYPE) {
		case CHANNEL_TYPES.AGGREGATE_INDEX:
			const aggregateIndexData = responseData as unknown as AggregateIndexResponseType;
			eventList.get(aggregateIndexData.FROMSYMBOL)?.forEach((func) => func(aggregateIndexData));
		default:
			toConsole('Another message type');
			break;
	}
});

export function subscribeToCurrencyUpdates(currencyName: string) {
	toConsole(`subscribed to update ${currencyName}`);

	webSocket?.send(
		JSON.stringify({
			action: 'SubAdd',
			subs: [`${CHANNEL_TYPES.AGGREGATE_INDEX}~CCCAGG~${currencyName}~USD`],
		}),
	);
}

export function unSubscribeToCurrencyUpdates(currencyName: string) {
	toConsole(`unsubscribed to update ${currencyName}`);

	webSocket?.send(
		JSON.stringify({
			action: 'SubRemove',
			subs: [`${CHANNEL_TYPES.AGGREGATE_INDEX}~CCCAGG~${currencyName}~USD`],
		}),
	);
}
