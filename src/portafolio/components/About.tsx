import Image from 'next/image';

import type { Dictionary } from '@/dictionaries/types';
import SectionLabel from './SectionLabel';

export default function About({ t }: { t: Dictionary }) {
  return (
    <section id="about" className="mx-auto max-w-[1440px] scroll-mt-[60px] px-[clamp(20px,4vw,48px)] py-[clamp(96px,14vw,200px)]">
      <SectionLabel n="01" label={t.sAbout} className="mb-[clamp(40px,6vw,72px)]" />

      <div className="grid grid-cols-1 items-start gap-[clamp(40px,5vw,88px)] min-[860px]:grid-cols-[minmax(260px,4fr)_minmax(0,8fr)]">
        <figure data-reveal="0" className="m-0 max-w-[420px]">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[14px] border border-line-2 bg-[#131513]">
            <div data-par="0.5" className="absolute inset-x-0 -inset-y-[9%] will-change-transform">
              <Image
                src="/assets/carlos-arias-v2.webp"
                alt="Carlos Arias"
                fill
                sizes="(min-width: 860px) 420px, 100vw"
                className="object-cover object-[50%_20%] brightness-[.92] contrast-[1.06] grayscale transition-[filter] duration-800 group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0"
              />
            </div>
            <span className="absolute bottom-3.5 left-3.5 flex items-center gap-2 rounded-full bg-[rgba(11,12,11,.72)] px-[11px] py-[7px] font-mono text-[11px] text-ink backdrop-blur-[8px]">
              <span className="size-1.5 rounded-full bg-acc" />
              {t.photoTag}
            </span>
          </div>
          <figcaption className="mt-3 flex justify-between gap-3 font-mono text-[11.5px] text-dim">
            <span>Carlos Arias</span>
            <span>{t.location}</span>
          </figcaption>
        </figure>

        <div>
          <p data-words="" className="m-0 text-[clamp(26px,3.1vw,50px)] leading-[1.16] font-medium tracking-[-.025em] text-pretty">
            {t.about.split(' ').map((w, i) => (
              <span key={i} data-word="" className="opacity-[.16] transition-opacity duration-350">{w} </span>
            ))}
          </p>

          <a
            href="#projects"
            data-reveal="0"
            className="group mt-[clamp(40px,5vw,64px)] grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-[clamp(16px,2.6vw,32px)] border-y border-line-2 py-[clamp(18px,2.2vw,26px)] !text-ink"
          >
            <span className="flex aspect-square w-[clamp(52px,5vw,64px)] items-center justify-center rounded-[14px] border border-[#2a2a26] bg-[#111110] transition-colors duration-400 group-hover:bg-[#1c1a0e]">
              <Image src="/assets/antoky-isotipo-blanco.webp" alt="" width={837} height={526} className="block h-[58%] w-[58%] object-contain" />
            </span>
            <span className="flex min-w-0 flex-col gap-1.5">
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[clamp(22px,2.2vw,32px)] leading-[1.1] font-semibold tracking-[-.03em]">{t.antokyRole}</span>
                <Image src="/assets/antoky-logo-blanco.webp" alt="Antoky" width={1383} height={209} className="block h-[clamp(15px,1.5vw,20px)] w-auto translate-y-0.5" />
              </span>
              <span className="text-[clamp(15px,1.2vw,17px)] leading-[1.5] text-pretty text-sub">{t.antokyAbout}</span>
            </span>
            <span
              aria-hidden="true"
              className="flex size-[46px] items-center justify-center rounded-full border border-antoky text-lg text-antoky transition-[rotate,background-color,color] duration-500 ease-out-soft group-hover:rotate-45 group-hover:bg-antoky group-hover:text-bg"
            >
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="mt-[clamp(56px,7vw,104px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] border-t border-line">
        {t.facts.map(f => (
          <div key={f.k} data-reveal="0" className="pt-[22px] pr-6">
            <div className="mb-2.5 font-mono text-[11.5px] tracking-[.06em] text-dim uppercase">{f.k}</div>
            <div className="text-lg leading-[1.35]">{f.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
