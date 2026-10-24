import { useEffect, useRef, useState } from 'react';

import type { Dictionary, Locale } from '@/dictionaries/types';
import { EMAIL, L, LAYERS, PROJECTS } from '../content';

const ACC = 'var(--color-acc)', INK = 'var(--color-ink)', MUTED = 'var(--color-muted)', DIM = '#5f615d', ERR = '#e0866a';
const QUICK = ['help', 'about', 'projects', 'contact'];

type Line = { prompt: string; text: string; color: string; typing?: boolean };

const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
const out = (text: string, color = MUTED): Line => ({ prompt: '', text, color });

const goTo = (id: string) => {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: reduced ? 'auto' : 'smooth' });
  }, 450);
};

type Props = {
  t: Dictionary;
  lang: Locale;
  setLang: (lang: Locale) => void;
};

export default function Terminal({ t, lang, setLang }: Props) {

  const [lines, setLines] = useState<Line[]>([]);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hist = useRef<string[]>([]);
  const histIdx = useRef(-1);
  // El arranque usa el idioma inicial; cambiar de idioma no reinicia la animación
  const bootT = useRef(t);

  // Secuencia de arranque animada
  useEffect(() => {
    let dead = false;
    const fast = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const bt = bootT.current;
    const push = (line: Line) => setLines(ls => [...ls, line]);
    const updateLast = (patch: Partial<Line>) => setLines(ls => {
      const next = ls.slice();
      next[next.length - 1] = { ...next[next.length - 1], ...patch };
      return next;
    });

    const typeCmd = async (text: string) => {
      push({ prompt: '❯ ', text: '', color: INK, typing: true });
      for (let i = 1; i <= text.length; i++) {
        await wait(fast ? 0 : 32 + Math.random() * 40);
        if (dead) return;
        updateLast({ text: text.slice(0, i) });
      }
      updateLast({ typing: false });
      await wait(fast ? 0 : 260);
    };

    const seq: [kind: 'cmd' | 'out', text: string, color?: string][] = [
      ['cmd', 'whoami'],
      ['out', bt.term.whoami, INK],
      ['cmd', 'cat stack.txt'],
      ['out', 'frontend   react · next.js · typescript'],
      ['out', 'backend    node · django · express'],
      ['out', 'ai         langchain · deepgram · cartesia'],
      ['cmd', 'agent run --voice'],
      ['out', '▸ stt      deepgram       ok'],
      ['out', '▸ graph    langchain      nodes ready'],
      ['out', '▸ memory   vector store   ok'],
      ['out', '▸ tts      cartesia       ok'],
      ['out', bt.term.online, ACC],
      ['out', bt.term.hint, DIM],
    ];

    (async () => {
      await wait(fast ? 0 : 700);
      for (const [kind, text, color] of seq) {
        if (dead) return;
        if (kind === 'cmd') await typeCmd(text);
        else { await wait(fast ? 0 : 90); if (!dead) push(out(text, color)); }
      }
      if (!dead) setReady(true);
    })();

    return () => { dead = true; };
  }, []);

  // Mantiene el scroll de la terminal al final
  useEffect(() => {
    const b = bodyRef.current;
    if (b) b.scrollTop = b.scrollHeight;
  }, [lines]);

  const run = (raw: string) => {
    const c = raw.trim().toLowerCase();
    if (c) { hist.current.push(raw); histIdx.current = hist.current.length; }
    const add: Line[] = [{ prompt: '❯ ', text: raw, color: INK }];

    switch (c) {
      case '': break;
      case 'help':
        add.push(
          out(t.term.commands, INK),
          out('  about      ' + t.term.help.about),
          out('  projects   ' + t.term.help.projects),
          out('  stack      ' + t.term.help.stack),
          out('  contact    ' + t.term.help.contact),
          out('  lang       ' + t.term.help.lang),
          out('  clear      ' + t.term.help.clear),
        );
        break;
      case 'about': case 'whoami':
        add.push(out(t.about)); goTo('about'); break;
      case 'projects': case 'ls': case 'ls projects':
        PROJECTS.forEach((p, i) => add.push(out(`  0${i + 1}  ${p.title.padEnd(15)} ${L(p.kind, lang)}`)));
        goTo('projects'); break;
      case 'stack': case 'cat stack.txt':
        LAYERS.forEach(l => add.push(out(`  ${L(l.name, lang).toLowerCase().padEnd(13)}${L(l.items, lang).slice(0, 4).join(' · ')}`)));
        break;
      case 'contact': case 'email':
        add.push(out(`  email      ${EMAIL}`, INK), out('  github     github.com/CarlosAriasLK'), out('  linkedin   in/1carlosarias5'));
        goTo('contact'); break;
      case 'lang': case 'es': case 'en': {
        const next: Locale = c === 'lang' ? (lang === 'es' ? 'en' : 'es') : c;
        add.push(out(next === 'es' ? 'idioma: español' : 'language: english', ACC));
        setLang(next); break;
      }
      case 'sudo': case 'sudo rm -rf /':
        add.push(out(t.term.denied, ERR)); break;
      case 'clear':
        setLines([]); setInput(''); return;
      default:
        add.push(out(t.term.notFound + c + t.term.tryHelp, ERR));
    }
    setLines(ls => [...ls, ...add]);
    setInput('');
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const h = hist.current;
    if (e.key === 'Enter') { e.preventDefault(); run(input); }
    else if (e.key === 'ArrowUp' && h.length) { e.preventDefault(); histIdx.current = Math.max(0, histIdx.current - 1); setInput(h[histIdx.current]); }
    else if (e.key === 'ArrowDown' && h.length) { e.preventDefault(); histIdx.current = Math.min(h.length, histIdx.current + 1); setInput(h[histIdx.current] ?? ''); }
  };

  return (
    <div data-reveal="250">
      <div
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
        className="cursor-text overflow-hidden rounded-[14px] border border-edge bg-[#0f110f] font-mono shadow-[0_50px_120px_-40px_rgba(0,0,0,.9)]"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div className="flex gap-[7px]">
            <span className="size-2.5 rounded-full bg-edge-2" />
            <span className="size-2.5 rounded-full bg-edge-2" />
            <span className="size-2.5 rounded-full bg-edge-2" />
          </div>
          <span className="text-[11.5px] text-muted">carlos@ikatech: ~</span>
          <span className="text-[11px] text-acc">● live</span>
        </div>
        <div ref={bodyRef} role="log" aria-live="polite" className="h-[clamp(300px,44vh,400px)] overflow-y-auto px-5 py-[18px] text-[13.5px] leading-[1.75]">
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap break-words" style={{ color: line.color }}>
              <span className="text-acc">{line.prompt}</span>
              {line.text}
              {line.typing && <span className="animate-[blink_1s_steps(1)_infinite] text-acc">▋</span>}
            </div>
          ))}
          {ready && (
            <div className="flex items-center">
              <span className="whitespace-pre text-acc">❯ </span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={onKey}
                aria-label="Terminal"
                spellCheck={false}
                autoComplete="off"
                className="min-w-0 flex-1 border-none bg-transparent p-0 font-mono text-[13.5px] text-ink caret-acc outline-none"
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap items-center gap-2 font-mono text-xs">
        <span className="mr-1 text-dim">{t.termHint}</span>
        {QUICK.map(q => (
          <button
            key={q}
            onClick={() => { if (ready) run(q); }}
            className="cursor-pointer rounded-md border border-edge px-[11px] py-1.5 text-sub transition-colors duration-200 hover:border-acc hover:text-acc"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
