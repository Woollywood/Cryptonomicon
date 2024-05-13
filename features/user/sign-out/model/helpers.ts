export async function signOut() {
	const supabaseClient = useSupabaseClient();
	return await supabaseClient.auth.signOut();
}
