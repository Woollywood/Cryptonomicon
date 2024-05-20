<script setup lang="ts">
	import { FavouritesForm } from '@/widgets/FavouritesForm';
	import { FavouritesTable } from '@/widgets/FavouritesTable';
	import { LoadingSpinner } from '@/shared/ui/spinner';
</script>

<template>
	<div>
		<FavouritesForm />
		<Suspense>
			<FavouritesTable />
			<template #fallback>
				<div class="flex items-center justify-center">
					<LoadingSpinner />
				</div>
			</template>
		</Suspense>
	</div>
</template>
