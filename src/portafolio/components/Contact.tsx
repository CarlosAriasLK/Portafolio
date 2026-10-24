import { useRef, useState } from 'react';
import axios from 'axios';

import type { Dictionary } from '@/dictionaries/types';
import { EMAIL, SOCIALS } from '../content';
import SectionLabel from './SectionLabel';

const FIELD_LABEL = 'flex flex-col gap-2 font-mono text-[11.5px] tracking-[.06em] text-muted uppercase';
const FIELD = 'border-0 border-b border-edge-2 bg-transparent py-2 font-sans text-xl tracking-normal text-ink normal-case outline-none transition-colors duration-250 focus:border-acc';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact({ t }: { t: Dictionary }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL).catch(() => {});
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const { data } = await axios.post('/api/send', { name, message, email });
      if (data.error) throw new Error(data.error);
      setName('');
      setEmail('');
      setMessage('');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-[1440px] scroll-mt-[60px] px-[clamp(20px,4vw,48px)] pt-[clamp(96px,12vw,180px)] pb-10">
      <SectionLabel n="05" label={t.sContact} />
      <h2 data-drift="1" className="m-0 text-[clamp(76px,16vw,260px)] leading-[.85] font-extrabold tracking-[-.06em] will-change-transform">{t.contactTitle}</h2>
      <p data-reveal="0" className="mt-8 max-w-[46ch] text-[clamp(18px,1.5vw,21px)] leading-[1.55] text-sub">{t.contactSub}</p>

      <div data-reveal="80" className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
        <button
          onClick={copyEmail}
          aria-label={t.copy}
          className="cursor-pointer border-b-2 border-acc pb-1.5 text-[clamp(26px,4.2vw,64px)] font-semibold tracking-[-.035em] transition-colors duration-250 hover:text-acc"
        >
          {EMAIL}
        </button>
        <span className={`font-mono text-[12.5px] ${copied ? 'text-acc' : 'text-dim'}`}>{copied ? t.copied : t.clickCopy}</span>
      </div>

      <div className="mt-[clamp(64px,8vw,120px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-[clamp(48px,6vw,96px)]">
        <div data-reveal="0" className="border-t border-line-2">
          {SOCIALS.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between border-b border-line-2 py-[22px] text-[clamp(22px,2.2vw,30px)] font-medium tracking-[-.02em] transition-[padding,color] duration-400 ease-out-soft hover:pl-3.5"
            >
              <span>{s.label}</span>
              <span className="font-mono text-[12.5px] text-muted">{s.handle} ↗</span>
            </a>
          ))}
        </div>

        <form data-reveal="120" onSubmit={handleSubmit} className="flex flex-col gap-7">
          <label className={FIELD_LABEL}>
            {t.fName}
            <input required value={name} onChange={e => setName(e.target.value)} className={FIELD} />
          </label>
          <label className={FIELD_LABEL}>
            Email
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className={FIELD} />
          </label>
          <label className={FIELD_LABEL}>
            {t.fMsg}
            <textarea required rows={4} value={message} onChange={e => setMessage(e.target.value)} className={`${FIELD} resize-y`} />
          </label>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="cursor-pointer rounded-full bg-ink px-6 py-[15px] text-base font-semibold text-bg transition-colors duration-250 hover:bg-acc disabled:cursor-wait"
            >
              {status === 'sending' ? t.sending : t.send} →
            </button>
            {status === 'sent' && <span role="status" className="font-mono text-[12.5px] text-acc">{t.sent}</span>}
            {status === 'error' && <span role="alert" className="font-mono text-[12.5px] text-[#e0866a]">{t.sendError}</span>}
          </div>
        </form>
      </div>

      <footer className="mt-[clamp(96px,12vw,180px)] flex flex-wrap justify-between gap-3 border-t border-line pt-5 font-mono text-xs text-dim">
        <span>© 2026 Carlos Arias</span>
        <span>{t.footer}</span>
        <a href="#top" className="!text-muted hover:!text-acc">{t.top} ↑</a>
      </footer>
    </section>
  );
}
