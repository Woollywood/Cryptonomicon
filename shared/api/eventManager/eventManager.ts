import {
	subscribeToCurrencyUpdates,
	unSubscribeToCurrencyUpdates,
	type AggregateIndexResponseType,
} from '../webSocket';

export const eventList = new Map<string, ((response: AggregateIndexResponseType) => void)[]>();

export function subscribeToUpdate(currencyName: string, callback: (response: AggregateIndexResponseType) => void) {
	if (import.meta.server) return;

	if (eventList.has(currencyName)) {
		eventList.get(currencyName)?.push(callback);
	} else {
		eventList.set(currencyName, [callback]);
		subscribeToCurrencyUpdates(currencyName);
	}
}
export function unSubscribeToUpdate(currencyName: string, callback: (response: AggregateIndexResponseType) => void) {
	if (import.meta.server) return;

	if (!eventList.has(currencyName)) {
		return;
	}

	const subscribers = eventList.get(currencyName)?.filter((sub) => sub !== callback);
	if (!subscribers?.length) {
		eventList.delete(currencyName);
		unSubscribeToCurrencyUpdates(currencyName);
	} else {
		eventList.set(currencyName, subscribers);
	}
}

// @ts-ignore
import.meta.client ? (window.eventList = eventList) : null;
