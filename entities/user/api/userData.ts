import { type Database } from '@/shared/supabase';

export async function getUserData(userId: string) {
	const supabaseClient = useSupabaseClient<Database>();

	const { data, error } = await supabaseClient.from('users').select('*').eq('id', userId).single();

	if (error) {
		throw error;
	}

	return data;
}
