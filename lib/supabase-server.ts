import { createClient } from '@supabase/supabase-js';

// Server-only client with service role key — bypasses RLS, never sent to browser
export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);
