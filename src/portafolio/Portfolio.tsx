'use client';

import { useCallback, useState } from 'react';

import type { Dictionary, Locale } from '@/dictionaries/types';
import { useScrollEffects } from './useScrollEffects';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';

type Props = {
  initialLang: Locale;
  dicts: Record<Locale, Dictionary>;
};

export default function Portfolio({ initialLang, dicts }: Props) {

  const [lang, setLangState] = useState<Locale>(initialLang);
  const scrolled = useScrollEffects(lang);
  const t = dicts[lang];

  // Cambia el idioma en el cliente y actualiza la URL sin recargar la página
  const setLang = useCallback((next: Locale) => {
    setLangState(next);
    document.documentElement.lang = next;
    document.title = dicts[next].metadata.title;
    window.history.replaceState(null, '', `/${next}${window.location.hash}`);
  }, [dicts]);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5">
        {/* transform inline (no scale-x-0): useScrollEffects escribe transform y la propiedad `scale` de Tailwind lo anularía */}
        <div data-progress="" className="h-full origin-left bg-acc" style={{ transform: 'scaleX(0)' }} />
      </div>

      <Header t={t} lang={lang} setLang={setLang} scrolled={scrolled} />

      <main>
        <Hero t={t} lang={lang} setLang={setLang} />
        <About t={t} />
        <Projects t={t} lang={lang} />
        <Experience t={t} lang={lang} />
        <Stack t={t} lang={lang} />
        <Contact t={t} />
      </main>
    </>
  );
}
