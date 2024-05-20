import { type Database } from '@/shared/supabase';

export async function deleteCurrency(currencyName: string) {
	const supabaseClient = useSupabaseClient<Database>();

	const { data, error } = await supabaseClient.from('favourites').delete().eq('currency', currencyName);

	if (error) {
		throw error;
	}

	return data;
}
