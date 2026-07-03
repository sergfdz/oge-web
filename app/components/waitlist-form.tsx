'use client';

import { useRef, useState } from 'react';
import { joinWaitlist } from '@/app/actions/waitlist';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setState('loading');
    const result = await joinWaitlist(email.trim());
    if (result.error) {
      setErrorMsg(result.error);
      setState('error');
    } else {
      setState('success');
    }
  }

  if (state === 'success') {
    return (
      <div style={s.successBox}>
        <span style={s.successIcon}>✓</span>
        <p style={s.successText}>You're on the list. We'll reach out when Oge launches.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={s.form}>
      <div style={s.inputRow}>
        <input
          ref={inputRef}
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setState('idle'); }}
          style={s.input}
        />
        <button type="submit" disabled={state === 'loading'} style={s.btn}>
          {state === 'loading' ? '...' : 'Join waitlist'}
        </button>
      </div>
      {state === 'error' && <p style={s.errorText}>{errorMsg}</p>}
    </form>
  );
}

const s: Record<string, React.CSSProperties> = {
  form: { width: '100%', maxWidth: 460 },
  inputRow: { display: 'flex', gap: 8 },
  input: {
    flex: 1,
    padding: '14px 18px',
    borderRadius: 50,
    border: '1px solid rgba(255,255,255,0.15)',
    background: 'rgba(255,255,255,0.06)',
    color: '#fff',
    fontSize: 15,
    outline: 'none',
    minWidth: 0,
  },
  btn: {
    padding: '14px 24px',
    borderRadius: 50,
    background: '#208AEF',
    color: '#fff',
    fontSize: 15,
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap' as React.CSSProperties['whiteSpace'],
    flexShrink: 0,
  },
  errorText: { margin: '10px 0 0 4px', fontSize: 13, color: '#F87171' },
  successBox: {
    display: 'flex', alignItems: 'center', gap: 10,
    background: 'rgba(34,197,94,0.1)',
    border: '1px solid rgba(34,197,94,0.3)',
    borderRadius: 14, padding: '14px 20px',
    maxWidth: 460,
  },
  successIcon: { fontSize: 18, color: '#22C55E', fontWeight: 700 },
  successText: { margin: 0, fontSize: 15, color: '#86EFAC', lineHeight: '1.5' },
};
