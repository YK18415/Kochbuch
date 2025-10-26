import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://DEIN-PROJEKT.supabase.co';
const supabaseAnonKey = 'DEIN-ANON-KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);