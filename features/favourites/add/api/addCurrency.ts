import { type Database } from '@/shared/supabase';

export async function addCurrency(currencyName: string) {
	const supabaseClient = useSupabaseClient<Database>();
	const supabaseUser = useSupabaseUser();

	const { data, error } = await supabaseClient
		.from('favourites')
		.insert({ currency: currencyName, user_id: supabaseUser.value?.id! });

	if (error) {
		throw error;
	}

	return data;
}
