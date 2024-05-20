import { useToast } from 'primevue/usetoast';
import { type PostgrestError } from '@supabase/supabase-js';

export function handleError(error: PostgrestError) {
	const toast = useToast();

	onMounted(async () => {
		await nextTick();
		toast.add({ severity: 'error', summary: error.code, detail: error.message, life: 3000 });
	});
}
