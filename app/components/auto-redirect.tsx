'use client';
import { useEffect } from 'react';

export function AutoRedirect({ href }: { href: string }) {
  useEffect(() => {
    window.location.href = href;
  }, []);
  return null;
}
