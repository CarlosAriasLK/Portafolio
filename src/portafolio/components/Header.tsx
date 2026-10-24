import type { Dictionary, Locale } from '@/dictionaries/types';

type Props = {
  t: Dictionary;
  lang: Locale;
  setLang: (lang: Locale) => void;
  scrolled: boolean;
};

export default function Header({ t, lang, setLang, scrolled }: Props) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] border-b backdrop-blur-[14px] transition-[background-color,border-color] duration-400 ${
        scrolled ? 'border-line bg-[rgba(11,12,11,.72)]' : 'border-transparent bg-[rgba(11,12,11,0)]'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-[clamp(20px,4vw,48px)] py-4">
        <a href="#top" aria-label={lang === 'es' ? 'Inicio' : 'Home'} className="flex items-center gap-0.5 font-mono text-sm tracking-[.02em]">
          <span>carlos.arias</span>
          <span className="animate-blink text-acc">_</span>
        </a>

        <nav aria-label={lang === 'es' ? 'Principal' : 'Main'} className="hidden gap-7 font-mono text-[12.5px] min-[1100px]:flex">
          {t.nav.map(item => (
            <a key={item.id} href={`#${item.id}`} className="flex gap-1.5 whitespace-nowrap !text-muted transition-colors duration-250 hover:!text-ink">
              <span className="text-acc">{item.n}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <div role="group" aria-label={lang === 'es' ? 'Idioma' : 'Language'} className="flex rounded-full border border-edge p-[3px] font-mono text-[11.5px]">
            {(['es', 'en'] as const).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`cursor-pointer rounded-full px-2.5 py-[5px] transition-colors duration-250 ${
                  lang === l ? 'bg-ink text-bg' : 'bg-transparent text-muted'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="/cv/CV-CarlosArias.pdf"
            target="_blank"
            rel="noopener"
            className="whitespace-nowrap rounded-full border border-ink px-3.5 py-[9px] font-mono text-xs transition-colors duration-250 hover:bg-ink hover:!text-bg"
          >
            {t.cv} ↓
          </a>
        </div>
      </div>
    </header>
  );
}
