import axios from 'axios';

const baseUrl = import.meta.client
	? useRuntimeConfig().public.cryptocompareBaseUrl
	: process.env.CRYPTOCOMPARE_BASE_URL;
const apiKey = import.meta.client ? useRuntimeConfig().public.cryptocompareApiKey : process.env.CRYPTOCOMPARE_API_KEY;

export const instance = axios.create({
	baseURL: baseUrl,
	timeout: 1000,
	headers: {
		authorization: `Apikey ${apiKey}`,
	},
});
