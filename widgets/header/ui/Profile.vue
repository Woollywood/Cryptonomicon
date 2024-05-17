<script setup lang="ts">
	import OverlayPanel from 'primevue/overlaypanel';
	import Avatar from 'primevue/avatar';
	import { SignOut } from '@/features/user/sign-out';
	import { getUserData, handleError, type UserType } from '@/entities/user';

	const overlay = ref<InstanceType<typeof OverlayPanel>>();
	const supabaseUser = useSupabaseUser();
	const userData = ref<UserType | null>(null);
	const isError = ref(false);

	try {
		userData.value = await getUserData(supabaseUser.value?.id!);
		isError.value = true;
	} catch (error: any) {
		handleError(error);
	}

	function toggle(event: Event) {
		overlay.value?.toggle(event);
	}
</script>

<template>
	<div>
		<button class="flex items-center justify-center" @click="toggle">
			<Avatar :image="userData?.avatar_url" size="large" shape="circle" />
		</button>
		<OverlayPanel ref="overlay">
			<SignOut />
		</OverlayPanel>
	</div>
</template>
