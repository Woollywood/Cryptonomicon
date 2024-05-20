import { type Database } from '@/shared/supabase';

export type FavouriteType = Database['public']['Tables']['favourites']['Row'];
