<script setup lang="ts">
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import { Auth } from '@nuxtbase/auth-ui-vue';

	const supabaseClient = useSupabaseClient();
	const supabaseUser = useSupabaseUser();
	const router = useRouter();

	watch(
		() => supabaseUser.value,
		(_, oldVal) => {
			if (!oldVal) router.push('/');
		},
	);
</script>

<template>
	<div class="flex h-full items-center justify-center">
		<div class="w-full max-w-[320px]">
			<Auth
				:supabaseClient="supabaseClient"
				:appearance="{
					theme: ThemeSupa,
				}"
				:providers="null" />
		</div>
	</div>
</template>
