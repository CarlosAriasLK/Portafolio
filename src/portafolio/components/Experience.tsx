import type { Dictionary, Locale } from '@/dictionaries/types';
import { EXP, L } from '../content';
import SectionLabel from './SectionLabel';

type Props = {
  t: Dictionary;
  lang: Locale;
};

export default function Experience({ t, lang }: Props) {
  return (
    <section id="experience" className="mx-auto max-w-[1440px] scroll-mt-[60px] px-[clamp(20px,4vw,48px)] py-[clamp(96px,12vw,180px)]">
      <SectionLabel n="03" label={t.sExp} className="mb-[clamp(40px,6vw,72px)]" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(40px,6vw,96px)]">
        <div className="sticky top-[110px]">
          <h2 data-reveal="0" className="m-0 text-[clamp(48px,6.4vw,104px)] leading-[.92] font-bold tracking-[-.05em]">{t.expTitle}</h2>
          <p data-reveal="100" className="mt-6 max-w-[34ch] text-[17px] leading-[1.55] text-sub">{t.expIntro}</p>
        </div>

        <div className="relative pl-[clamp(28px,3vw,44px)]">
          <div className="absolute top-1.5 bottom-0 left-0 w-px bg-line-2">
            <div data-tl="" className="h-full w-full origin-top bg-acc" style={{ transform: 'scaleY(0)' }} />
          </div>
          {EXP.map(e => {
            const tags = L(e.tags, lang);
            return (
              <div key={L(e.role, 'es')} data-reveal="0" className="relative pb-[clamp(48px,6vw,80px)]">
                <span className="absolute top-1.5 left-[calc(-1*clamp(28px,3vw,44px)-4px)] size-[9px] rounded-full border border-acc bg-bg" />
                <div className="mb-3 font-mono text-[12.5px] text-acc">{L(e.period, lang)}</div>
                <h3 className="m-0 text-[clamp(24px,2.4vw,34px)] leading-[1.15] font-semibold tracking-[-.025em]">{L(e.role, lang)}</h3>
                <div className="mt-1.5 text-[17px] text-muted">{L(e.org, lang)}</div>
                <ul className="mt-5 flex max-w-[58ch] list-none flex-col gap-2.5 p-0">
                  {L(e.bullets, lang).map(b => (
                    <li key={b} className="grid grid-cols-[22px_1fr] text-[16.5px] leading-[1.55] text-[#cfcfc8]">
                      <span className="text-[#4d4f4b]">—</span><span>{b}</span>
                    </li>
                  ))}
                </ul>
                {tags && <div className="mt-[18px] font-mono text-xs leading-[1.7] text-muted">{tags}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
