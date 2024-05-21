import { type Database } from '@/shared/supabase';

export async function getFavourites() {
	const supabaseClient = useSupabaseClient<Database>();

	const { data, error } = await supabaseClient.from('favourites').select('*').order('id');

	if (error) {
		throw error;
	}

	return data.slice().reverse();
}
