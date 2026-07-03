'use server';

import { supabaseServer as supabase } from '@/lib/supabase-server';

export async function joinWaitlist(email: string): Promise<{ error?: string }> {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Introduce un email válido.' };
  }

  const { error } = await supabase
    .from('waitlist')
    .insert({ email: email.toLowerCase() });

  if (error) {
    if (error.code === '23505') {
      return { error: '¡Ya estás en la lista!' };
    }
    return { error: 'Algo salió mal. Inténtalo de nuevo.' };
  }

  return {};
}
