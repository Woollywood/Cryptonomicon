import { type Database } from '@/shared/supabase';

export type UserType = Database['public']['Tables']['users']['Row'];
