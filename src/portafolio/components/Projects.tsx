import { useState } from 'react';

import type { Dictionary, Locale } from '@/dictionaries/types';
import { L, PROJECTS } from '../content';
import ProjectMockup from './ProjectMockups';
import SectionLabel from './SectionLabel';

type Props = {
  t: Dictionary;
  lang: Locale;
};

export default function Projects({ t, lang }: Props) {

  const [open, setOpen] = useState(0);
  const [hover, setHover] = useState(-1);

  return (
    <section id="projects" className="mx-auto max-w-[1440px] scroll-mt-[60px] px-[clamp(20px,4vw,48px)] py-[clamp(48px,8vw,120px)]">
      <SectionLabel n="02" label={t.sProjects} />
      <div className="mb-[clamp(40px,5vw,72px)] flex flex-wrap items-end justify-between gap-6">
        <h2 data-drift="1" className="m-0 text-[clamp(56px,10vw,160px)] leading-[.9] font-bold tracking-[-.05em] will-change-transform">{t.projTitle}</h2>
        <p data-reveal="100" className="m-0 max-w-[34ch] text-[17px] leading-[1.55] text-sub">{t.projIntro}</p>
      </div>

      <div className="border-t border-line-2">
        {PROJECTS.map((p, i) => {
          const isOpen = open === i;
          const hot = isOpen || hover === i;
          return (
            <article key={p.title} className="border-b border-line-2">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(-1)}
                aria-expanded={isOpen}
                className="box-border grid w-full cursor-pointer grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-[clamp(14px,3vw,40px)] py-[clamp(22px,3vw,36px)] text-left"
              >
                <span className="font-mono text-[12.5px] text-dim">0{i + 1}</span>
                <span
                  className={`text-[clamp(30px,5.6vw,88px)] leading-none font-semibold tracking-[-.04em] transition-[color,translate] duration-[350ms,600ms] ease-out-soft ${
                    hot ? 'text-ink' : 'text-[#7d7e78]'
                  } ${hover === i && !isOpen ? 'translate-x-3.5' : 'translate-x-0'}`}
                >
                  {p.title}
                </span>
                <span className="flex items-center gap-5">
                  <span className="hidden font-mono text-xs text-muted min-[860px]:inline">{L(p.kind, lang)}</span>
                  <span
                    aria-hidden="true"
                    className={`flex size-11 items-center justify-center rounded-full border border-edge-2 text-xl transition-[rotate,background-color,color] duration-500 ease-out-soft ${
                      isOpen ? 'rotate-45 bg-acc text-bg' : 'rotate-0 bg-transparent text-ink'
                    }`}
                  >
                    +
                  </span>
                </span>
              </button>

              <div className={`grid transition-[grid-template-rows] duration-700 ease-out-soft ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="min-h-0 overflow-hidden">
                  <div className="grid grid-cols-1 gap-[clamp(28px,4vw,72px)] pt-1 pb-[clamp(36px,4vw,60px)] min-[860px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                    <div className="flex flex-col gap-6">
                      <p className="m-0 max-w-[36ch] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-pretty text-[#d6d6cf]">{L(p.desc, lang)}</p>
                      <div>
                        <div className="mb-2 font-mono text-[11.5px] tracking-[.06em] text-dim uppercase">Stack</div>
                        <div className="font-mono text-[13px] leading-[1.7] text-sub">{p.tech}</div>
                      </div>
                      <a href={p.href} target="_blank" rel="noopener" className="flex gap-2 self-start border-b border-acc pb-1 text-base font-medium">
                        {p.linkLabel ? L(p.linkLabel, lang) : t.code} ↗
                      </a>
                    </div>
                    <ProjectMockup kind={p.mockup} t={t} />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
