import { useState } from 'react';

import type { Dictionary, Locale } from '@/dictionaries/types';
import { L, LAYERS } from '../content';
import SectionLabel from './SectionLabel';

type Props = {
  t: Dictionary;
  lang: Locale;
};

export default function Stack({ t, lang }: Props) {

  const [hover, setHover] = useState(-1);

  return (
    <section id="stack" className="mx-auto max-w-[1440px] scroll-mt-[60px] px-[clamp(20px,4vw,48px)] py-[clamp(48px,8vw,120px)]">
      <SectionLabel n="04" label={t.sStack} />
      <div className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-6">
        <h2 data-drift="-1" className="m-0 text-[clamp(56px,10vw,160px)] leading-[.9] font-bold tracking-[-.05em] will-change-transform">{t.stackTitle}</h2>
        <p data-reveal="100" className="m-0 max-w-[34ch] text-[17px] leading-[1.55] text-sub">{t.stackIntro}</p>
      </div>

      <div className="border-t border-line-2">
        {LAYERS.map((l, i) => {
          const note = l.note && L(l.note, lang);
          const bg = hover === i ? 'bg-[#151815]' : l.ai ? 'bg-[oklch(0.88_0.17_128/.06)]' : 'bg-transparent';
          const fg = l.ai ? 'text-acc' : hover === -1 || hover === i ? 'text-ink' : 'text-[#5f615d]';
          return (
            <div
              key={l.n}
              data-reveal={i * 60}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(-1)}
              className={`grid grid-cols-[40px_minmax(0,1fr)] items-baseline gap-x-[clamp(16px,3vw,48px)] gap-y-2 border-b border-line-2 px-[clamp(0px,1vw,16px)] py-[clamp(20px,2.4vw,30px)] transition-colors duration-350 min-[860px]:grid-cols-[64px_minmax(0,1fr)_minmax(0,2fr)] ${bg}`}
            >
              <span className="font-mono text-[12.5px] text-acc">{l.n}</span>
              <span className="flex flex-col gap-2">
                <span className="text-[clamp(24px,2.6vw,36px)] font-semibold tracking-[-.025em]">{L(l.name, lang)}</span>
                {note && <span className="max-w-[34ch] font-mono text-xs leading-[1.6] text-muted">{note}</span>}
              </span>
              <span className={`flex flex-wrap gap-x-[26px] gap-y-1.5 text-[clamp(16px,1.4vw,19px)] transition-colors duration-350 max-[859px]:col-start-2 ${fg}`}>
                {L(l.items, lang).map(it => <span key={it}>{it}</span>)}
              </span>
            </div>
          );
        })}
      </div>

      <p data-reveal="0" className="mt-8 max-w-[110ch] font-mono text-[12.5px] leading-[1.8] text-muted">
        <span className="text-ink">{t.certLabel}</span> {t.certs}
      </p>
    </section>
  );
}
