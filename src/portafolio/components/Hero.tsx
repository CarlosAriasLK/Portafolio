import type { Dictionary, Locale } from '@/dictionaries/types';
import Terminal from './Terminal';

type Props = {
  t: Dictionary;
  lang: Locale;
  setLang: (lang: Locale) => void;
};

export default function Hero({ t, lang, setLang }: Props) {
  return (
    <section id="top" className="relative box-border flex min-h-screen flex-col justify-between overflow-hidden px-[clamp(20px,4vw,48px)] pt-[clamp(104px,14vh,140px)] pb-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(236,235,230,.045)_1px,transparent_1px)] bg-[length:calc(100%/6)_100%]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-[10%] -right-[10%] size-[60vw] max-h-[900px] max-w-[900px] rounded-full bg-[radial-gradient(closest-side,oklch(0.88_0.17_128/.07),transparent)]" />

      <div className="relative mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-[clamp(40px,6vw,96px)]">
        <div data-hero-name="" className="will-change-[transform,opacity]">
          <h1 className="m-0 text-[clamp(68px,10.5vw,176px)] leading-[.86] font-bold tracking-[-.055em]">
            <span className="block overflow-hidden pb-[.04em]"><span data-reveal="80" className="block">Carlos</span></span>
            <span className="block overflow-hidden pb-[.06em]"><span data-reveal="180" className="block">Arias<span className="text-acc">.</span></span></span>
          </h1>
          <p data-reveal="300" className="mt-9 font-mono text-[13px] tracking-[.04em] text-acc uppercase">{t.kicker}</p>
          <p data-reveal="380" className="mt-4 max-w-[44ch] text-[clamp(18px,1.5vw,21px)] leading-[1.55] text-pretty text-sub">{t.sub}</p>
          <div data-reveal="460" className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="flex items-center gap-2.5 rounded-full bg-acc px-[22px] py-[15px] text-base font-semibold !text-bg transition-transform duration-300 ease-out-soft hover:-translate-y-0.5">
              {t.ctaProjects} <span>→</span>
            </a>
            <a href="#contact" className="flex items-center gap-2.5 rounded-full border border-edge-2 px-[22px] py-[15px] text-base font-medium transition-colors duration-300 hover:border-ink hover:!text-ink">
              {t.ctaContact}
            </a>
          </div>
        </div>

        <div data-hero-term="" className="will-change-transform">
          <Terminal t={t} lang={lang} setLang={setLang} />
        </div>
      </div>

      <div className="relative mx-auto mt-12 flex w-full max-w-[1440px] flex-wrap justify-between gap-3 border-t border-line pt-[18px] font-mono text-xs text-dim">
        <span>{t.location}</span>
        <span>↓ {t.scroll}</span>
        <span>Ikatech Solutions · Antoky</span>
      </div>
    </section>
  );
}
