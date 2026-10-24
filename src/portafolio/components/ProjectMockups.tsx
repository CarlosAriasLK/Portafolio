import Image from 'next/image';

import type { Dictionary } from '@/dictionaries/types';
import type { Mockup } from '../content';

// Representaciones ilustrativas (no capturas) de cada proyecto, mostradas al expandirlo

const PANEL = 'relative box-border flex flex-col overflow-hidden rounded-[14px] border';
const APP_TITLE = 'flex items-center gap-2.5 text-[clamp(17px,1.6vw,21px)] font-semibold tracking-[-.02em]';
const PHONE = 'w-[clamp(180px,42%,236px)] shrink-0 rounded-[30px] bg-[#0a0a0a] p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,.75),0_0_0_1px_rgba(255,255,255,.09)] will-change-transform';

function Glow({ className }: { className: string }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute aspect-square rounded-full ${className}`} />;
}

function AntokyMockup({ t }: { t: Dictionary }) {
  return (
    <div className={`${PANEL} min-h-[clamp(340px,34vw,480px)] gap-[clamp(28px,3.4vw,44px)] border-line-2 bg-[#0f0f10] p-[clamp(22px,3.4vw,44px)]`}>
      <Glow className="-top-[35%] -right-[15%] w-3/4 bg-[radial-gradient(closest-side,rgba(255,214,0,.15),transparent)]" />
      <div className="relative flex items-center justify-between gap-4">
        <Image src="/assets/antoky-logo-blanco.webp" alt="Antoky" width={1383} height={209} className="block h-[clamp(18px,1.8vw,24px)] w-auto" />
        <span className="flex items-center gap-2 font-mono text-[11px] text-antoky">
          <span className="size-[7px] animate-[pulse-ring_2.2s_infinite] rounded-full bg-antoky" />antoky.com
        </span>
      </div>
      <div data-par="0.35" className="relative text-[clamp(32px,3.8vw,58px)] leading-none font-semibold tracking-[-.04em] text-[#f4f4f0] will-change-transform">
        {t.antokyH1}<br />
        <span className="font-serif font-normal tracking-[-.01em] text-antoky italic">{t.antokyH2}</span>
      </div>
      <div className="relative mt-auto">
        <div className="mb-4 flex flex-wrap gap-2">
          {t.antokySectors.map(s => (
            <span key={s} className="rounded-full border border-[#34342f] px-2.5 py-[5px] font-mono text-[11px] text-[#bdbdb6]">{s}</span>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] border-t border-[#2a2a2c]">
          {t.antokySvc.map(s => (
            <div key={s.n} className="flex items-baseline gap-2.5 pt-3.5 pr-3.5">
              <span className="font-mono text-[11px] text-antoky">{s.n}</span>
              <span className="text-[15px] leading-[1.35] text-[#d8d8d2]">{s.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlotMockup({ t }: { t: Dictionary }) {
  const s = t.slot;
  return (
    <div className={`${PANEL} min-h-[clamp(340px,34vw,480px)] gap-[clamp(24px,3vw,36px)] border-[#1d4a43] bg-[#0E3A34] p-[clamp(22px,3.4vw,44px)] font-manrope`}>
      <Glow className="-bottom-[45%] -left-[20%] w-4/5 bg-[radial-gradient(closest-side,rgba(166,185,166,.22),transparent)]" />
      <div className="relative flex items-center justify-between gap-4">
        <span className={`${APP_TITLE} font-bold text-[#FAFAF7]`}>
          <span className="flex size-[26px] items-center justify-center rounded-lg bg-[#E9EFE6]"><span className="size-[9px] rounded-full bg-[#0E3A34]" /></span>
          MySlotFy
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] text-[#A6B9A6]">
          <span className="size-[7px] animate-[pulse-ring_2.2s_infinite] rounded-full bg-[#A6B9A6]" />myslotfy.com
        </span>
      </div>
      <div data-par="0.3" className="relative text-[clamp(30px,3.6vw,54px)] leading-[1.02] font-semibold tracking-[-.035em] text-[#FAFAF7] will-change-transform">
        {s.h1}<br /><span className="text-[#A6B9A6]">{s.h2}</span>
      </div>
      <div className="relative mt-auto grid grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-3">
        <div className="rounded-xl bg-[#FAFAF7] px-3.5 pt-3.5 pb-2 text-[#0E3A34]">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold">
            <span>{s.agenda}</span><span className="font-mono text-[10px] text-[#5d7a72]">{s.today}</span>
          </div>
          {s.rows.map(r => (
            <div key={r.h} className="flex items-center gap-2.5 border-t border-[#E9EFE6] py-2 text-[13px]">
              <span className="w-[38px] font-mono text-[11px] text-[#5d7a72]">{r.h}</span>
              <span className="flex-1 font-medium">{r.n}</span>
              <span className="rounded-full bg-[#E9EFE6] px-2 py-[3px] text-[10.5px] text-[#0E3A34]">{r.s}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-[#1d4a43] bg-[#0a2e29] p-3.5">
          <div className="mb-0.5 flex items-center justify-between text-xs font-semibold text-[#E9EFE6]">
            <span>{s.bot}</span><span className="font-mono text-[10px] text-[#A6B9A6]">WhatsApp</span>
          </div>
          <div className="max-w-[85%] self-end rounded-[12px_12px_3px_12px] bg-[#E9EFE6] px-[11px] py-2 text-[12.5px] leading-[1.4] text-[#0E3A34]">{s.msg1}</div>
          <div className="max-w-[88%] self-start rounded-[12px_12px_12px_3px] bg-[#1d4a43] px-[11px] py-2 text-[12.5px] leading-[1.4] text-[#FAFAF7]">{s.msg2}</div>
          <div className="flex items-center gap-1.5 self-start font-mono text-[10.5px] text-[#A6B9A6]"><span>✓</span>{s.ok}</div>
        </div>
      </div>
    </div>
  );
}

function CalendarMockup({ t }: { t: Dictionary }) {
  const c = t.cal;
  const events = c.events as Record<string, string>;
  const days = Array.from({ length: 35 }, (_, k) => {
    const d = k - 1;
    const inMonth = d >= 1 && d <= 31;
    return { key: k, d: inMonth ? String(d) : '', ev: inMonth ? events[String(d)] : undefined, today: d === 23, featured: d === 14 };
  });

  return (
    <div className={`${PANEL} gap-[clamp(18px,2.4vw,28px)] border-[#1e2b45] bg-[#0f1a2e] p-[clamp(22px,3.2vw,40px)]`}>
      <Glow className="-top-[40%] -right-[20%] w-[70%] bg-[radial-gradient(closest-side,oklch(0.7_0.14_250/.2),transparent)]" />
      <div className="relative flex items-center justify-between gap-4">
        <span className={`${APP_TITLE} text-[#f2f5fb]`}>
          <span className="box-border flex size-[26px] items-end justify-center rounded-[7px] border-[1.5px] border-[oklch(0.7_0.14_250)] pb-1 font-mono text-[10px] text-[oklch(0.8_0.1_250)]">23</span>
          CalendarApp
        </span>
        <span className="font-mono text-[11px] text-[oklch(0.78_0.11_250)]">MERN · JWT</span>
      </div>
      <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] items-start gap-3.5">
        <div data-par="0.25" className="rounded-xl border border-[#22345a] bg-[#152340] p-3.5 will-change-transform">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="text-sm font-semibold text-[#f2f5fb]">{c.month} 2025</span>
            <span className="font-mono text-[11px] text-[#8ea0c2]">‹ ›</span>
          </div>
          <div className="grid grid-cols-7 gap-[3px]">
            {c.week.map((wd, i) => (
              <span key={i} className="pb-1 text-center font-mono text-[9.5px] text-[#6f81a6]">{wd}</span>
            ))}
            {days.map(day => (
              <div key={day.key} className={`flex min-h-[clamp(30px,3.2vw,40px)] flex-col gap-0.5 overflow-hidden rounded-[5px] p-[3px] ${day.today ? 'bg-[oklch(0.7_0.14_250/.18)]' : ''}`}>
                <span className="font-mono text-[9.5px] text-[#9fb0cf]">{day.d}</span>
                {day.ev && (
                  <span className={`truncate rounded-[3px] px-[3px] py-0.5 text-[8.5px] leading-[1.2] ${
                    day.featured ? 'bg-[oklch(0.7_0.14_250)] text-white' : 'bg-[oklch(0.7_0.14_250/.22)] text-[#c9d3e6]'
                  }`}>{day.ev}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div data-par="-0.35" className="rounded-xl bg-[#f4f6fb] p-3.5 text-[#0f1a2e] shadow-[0_24px_50px_-20px_rgba(0,0,0,.6)] will-change-transform">
            <div className="mb-2 text-[13px] font-semibold">{c.new}</div>
            {c.fields.map(f => (
              <div key={f.k} className="flex justify-between gap-2.5 border-t border-[#e1e6f0] py-[7px] text-xs">
                <span className="text-[#5b6b8a]">{f.k}</span><span className="font-medium">{f.v}</span>
              </div>
            ))}
            <div className="mt-2.5 flex justify-end">
              <span className="rounded-full bg-[oklch(0.55_0.17_255)] px-3.5 py-[7px] text-xs font-semibold text-white">{c.save}</span>
            </div>
          </div>
          <div className="rounded-[10px] border border-[#1e2b45] bg-[#0b1424] px-3 py-2.5 font-mono text-[10.5px] leading-[1.8] text-[#8ea0c2]">
            <div><span className="text-[oklch(0.8_0.1_250)]">POST</span> /api/events <span className="text-[oklch(0.82_0.15_150)]">201</span></div>
            <div><span className="text-[oklch(0.8_0.1_250)]">GET</span> /api/auth/renew <span className="text-[oklch(0.82_0.15_150)]">200</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function JournalMockup({ t }: { t: Dictionary }) {
  const j = t.jr;
  return (
    <div className={`${PANEL} gap-[clamp(18px,2.4vw,28px)] border-[#2c2350] bg-[#191233] p-[clamp(22px,3.2vw,40px)]`}>
      <Glow className="-top-[40%] -right-[20%] w-[70%] bg-[radial-gradient(closest-side,oklch(0.6_0.2_300/.22),transparent)]" />
      <div className="relative flex items-center justify-between gap-4">
        <span className={`${APP_TITLE} text-[#f4f4f0]`}>
          <span className="flex size-[26px] items-center justify-center rounded-[7px] bg-[oklch(0.74_0.15_300)] text-sm font-bold text-[#191233]">J</span>
          Journal
        </span>
        <span className="font-mono text-[11px] text-[oklch(0.74_0.15_300)]">Firebase · MUI</span>
      </div>
      <div className="relative grid grid-cols-[minmax(0,2fr)_minmax(0,5fr)] overflow-hidden rounded-xl border border-white/10 bg-white/[.04] backdrop-blur-[6px]">
        <div className="flex flex-col gap-1 border-r border-white/[.08] px-2.5 py-3">
          <span className="mb-1.5 font-mono text-[9.5px] text-[#9d93c4]">{j.notesLabel}</span>
          {j.notes.map(n => (
            <div key={n.t} className="rounded-[7px] bg-white/[.05] p-2">
              <div className="truncate text-[11.5px] font-medium text-[#ece8fb]">{n.t}</div>
              <div className="mt-0.5 font-mono text-[9.5px] text-[#8e85b5]">{n.d}</div>
            </div>
          ))}
        </div>
        <div data-par="0.2" className="flex flex-col gap-2.5 p-3.5 will-change-transform">
          <div className="flex items-center justify-between gap-2.5">
            <span className="font-mono text-[10px] text-[#9d93c4]">{j.date}</span>
            <span className="animate-[pulse-ring_2.4s_infinite] rounded-full bg-[oklch(0.74_0.15_300)] px-3 py-1.5 text-[11px] font-semibold text-[#191233]">{j.save}</span>
          </div>
          <div className="text-[clamp(17px,1.6vw,22px)] font-semibold tracking-[-.02em] text-[#f4f2fb]">{j.title}</div>
          <div className="text-[12.5px] leading-[1.5] text-[#b9b2d6]">{j.body}</div>
          <div className="mt-1 grid grid-cols-3 gap-1.5">
            <span className="aspect-[4/3] rounded-md bg-[linear-gradient(180deg,#e8a86b,#5a7fa8)]" />
            <span className="aspect-[4/3] rounded-md bg-[linear-gradient(180deg,#d49a6a,#6b4a3a)]" />
            <span className="aspect-[4/3] rounded-md bg-[linear-gradient(180deg,#9fb7c9,#e9e4d8)]" />
          </div>
        </div>
      </div>
      <div className="relative flex justify-end">
        <span className="flex items-center gap-2 text-xs text-[#ece8fb]">
          <span className="flex size-[30px] items-center justify-center rounded-full bg-[#e2557a] text-lg text-white">+</span>{j.new}
        </span>
      </div>
    </div>
  );
}

function EcommerceMockup({ t }: { t: Dictionary }) {
  const e = t.ec;
  const blue = 'text-[oklch(0.66_0.15_250)]';
  return (
    <div className={`${PANEL} gap-[clamp(18px,2.4vw,28px)] border-[#2e2a24] bg-[#1c1a17] p-[clamp(22px,3.2vw,40px)]`}>
      <Glow className="-bottom-[45%] -left-[20%] w-[70%] bg-[radial-gradient(closest-side,oklch(0.66_0.15_250/.18),transparent)]" />
      <div className="relative flex items-center justify-between gap-4">
        <span className={`${APP_TITLE} text-[#f4f4f0]`}>
          <span className="flex size-[26px] items-center justify-center rounded-[7px] bg-[oklch(0.66_0.15_250)] text-[13px] font-bold text-white">E</span>
          Ecommerce App
        </span>
        <span className={`font-mono text-[11px] ${blue}`}>Flutter · Riverpod</span>
      </div>
      <div className="relative flex flex-wrap items-center justify-center gap-[clamp(14px,2.4vw,28px)]">
        <div data-par="-0.3" className={PHONE}>
          <div className="flex aspect-[9/18.5] flex-col overflow-hidden rounded-[24px] bg-[#f6f6f3]">
            <div className="flex items-center justify-between px-3 pt-3 pb-2">
              <span className="text-[13px] font-bold text-[#1b1b1b]">ECommprarse</span>
              <span className="font-mono text-[10px] text-[#666]">⌕</span>
            </div>
            <div className="flex gap-[5px] px-3 pb-2.5">
              {e.cats.map(c => <span key={c} className="rounded-full bg-[#e7e7e2] px-2 py-1 text-[9.5px] text-[#333]">{c}</span>)}
            </div>
            <div className="grid flex-1 grid-cols-2 gap-[7px] px-3">
              {e.items.map(it => (
                <div key={it.n} className="flex flex-col gap-[3px]">
                  <span className="aspect-square rounded-lg" style={{ background: it.c }} />
                  <span className="truncate text-[9.5px] text-[#222]">{it.n}</span>
                  <span className={`font-mono text-[9px] ${blue}`}>{it.p}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-around border-t border-[#e3e3de] py-2.5 font-mono text-[10px] text-[#888]">
              <span className={blue}>●</span><span>◌</span><span>♡</span><span>◯</span>
            </div>
          </div>
        </div>
        <div className="flex max-w-[280px] min-w-[190px] flex-1 flex-col gap-3">
          <div data-par="0.35" className="rounded-xl bg-[#f6f6f3] p-3.5 text-[#1b1b1b] shadow-[0_24px_50px_-20px_rgba(0,0,0,.6)] will-change-transform">
            <div className="mb-2.5 flex items-baseline justify-between">
              <span className="text-[13px] font-bold">{e.cart}</span>
              <span className="font-mono text-[10px] text-[#666]">{e.cartN}</span>
            </div>
            {e.items.slice(0, 2).map(it => (
              <div key={it.n} className="flex items-center gap-2.5 border-t border-[#e3e3de] py-[7px]">
                <span className="size-7 rounded-md" style={{ background: it.c }} />
                <span className="flex-1 text-xs">{it.n}</span>
                <span className="font-mono text-[11px]">{it.p}</span>
              </div>
            ))}
            <div className="flex items-center justify-between border-t border-[#e3e3de] pt-2.5">
              <span className="text-xs text-[#555]">{e.total} · <b className="text-[#1b1b1b]">$54</b></span>
              <span className="rounded-full bg-[oklch(0.66_0.15_250)] px-3 py-1.5 text-[11.5px] font-semibold text-white">{e.pay}</span>
            </div>
          </div>
          <div className="rounded-[10px] border border-[#2e2a24] bg-[#141310] px-3 py-2.5 font-mono text-[10.5px] leading-[1.9] text-[#a49d90]">
            <div><span className={blue}>lib/features/</span>store</div>
            <div>├ domain</div><div>├ infrastructure</div><div>└ presentation</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CM_POSTERS = [{ c: '#5a2a2a', r: '7.8' }, { c: '#2b3a52', r: '6.6' }, { c: '#4a3d2a', r: '6.8' }];
const CM_SOON = ['#3d2a4a', '#523a2a', '#2a4a4a'];

function CinemapediaMockup({ t }: { t: Dictionary }) {
  const m = t.cm;
  const red = 'bg-[oklch(0.68_0.19_25)]';
  return (
    <div className={`${PANEL} gap-[clamp(18px,2.4vw,28px)] border-[#2e1719] bg-[#170b0d] p-[clamp(22px,3.2vw,40px)]`}>
      <Glow className="-top-[40%] -right-[20%] w-[70%] bg-[radial-gradient(closest-side,oklch(0.6_0.2_25/.22),transparent)]" />
      <div className="relative flex items-center justify-between gap-4">
        <span className={`${APP_TITLE} text-[#f4f4f0]`}>
          <span className={`flex size-[26px] items-center justify-center rounded-[7px] ${red} text-xs text-white`}>▶</span>
          Cinemapedia
        </span>
        <span className="font-mono text-[11px] text-[oklch(0.68_0.19_25)]">Flutter · TMDB</span>
      </div>
      <div className="relative flex flex-wrap items-center justify-center gap-[clamp(14px,2.4vw,28px)]">
        <div data-par="-0.3" className={PHONE}>
          <div className="flex aspect-[9/18.5] flex-col overflow-hidden rounded-[24px] bg-[#121212]">
            <div className="flex items-center justify-between px-3 pt-3 pb-2">
              <span className="flex items-center gap-1.5 text-[12.5px] font-bold text-[#f2f2f2]"><span className={`size-2.5 rounded-[2px] ${red}`} />Cinemapedia</span>
              <span className="font-mono text-[10px] text-[#888]">⌕</span>
            </div>
            <div className="relative mx-3 box-border flex aspect-video items-end rounded-[9px] bg-[linear-gradient(160deg,#5a1f22,#1d0d0f)] p-2">
              <span className="flex gap-[3px]">
                <span className="h-[3px] w-3 rounded-[2px] bg-white" />
                <span className="h-[3px] w-1 rounded-[2px] bg-[#777]" />
                <span className="h-[3px] w-1 rounded-[2px] bg-[#777]" />
              </span>
            </div>
            <div className="px-3 pt-2.5 pb-1.5 text-[10.5px] font-semibold text-[#eee]">{m.now}</div>
            <div className="grid grid-cols-3 gap-1.5 px-3">
              {CM_POSTERS.map(po => (
                <div key={po.c} className="flex flex-col gap-[3px]">
                  <span className="aspect-[2/3] rounded-md" style={{ background: po.c }} />
                  <span className="font-mono text-[8.5px] text-[#f2b84b]">★ {po.r}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between px-3 pt-2.5 pb-1.5">
              <span className="text-[10.5px] font-semibold text-[#eee]">{m.soon}</span>
              <span className={`rounded-full ${red} px-[7px] py-0.5 text-[8.5px] text-white`}>2025</span>
            </div>
            <div className="grid flex-1 grid-cols-3 gap-1.5 px-3">
              {CM_SOON.map(c => <span key={c} className="aspect-[2/3] rounded-md" style={{ background: c }} />)}
            </div>
            <div className="flex justify-around border-t border-[#262626] py-[9px] font-mono text-[9px] text-[#777]">
              {m.tabs.map(tb => <span key={tb}>{tb}</span>)}
            </div>
          </div>
        </div>
        <div className="flex max-w-[280px] min-w-[190px] flex-1 flex-col gap-3">
          <div data-par="0.35" className="overflow-hidden rounded-xl border border-[#3a2023] bg-[#1f1214] shadow-[0_24px_50px_-20px_rgba(0,0,0,.7)] will-change-transform">
            <div className="flex aspect-video items-center justify-center bg-[linear-gradient(160deg,#3a1517,#0d0607)]">
              <span className={`box-border flex size-10 items-center justify-center rounded-full ${red} pl-[3px] text-sm text-white`}>▶</span>
            </div>
            <div className="flex items-center justify-between px-3 py-2.5">
              <span className="text-xs font-semibold text-[#f2f2f2]">{m.trailer}</span>
              <span className="font-mono text-[9.5px] text-[#b98a8a]">YouTube</span>
            </div>
            <div className="h-[3px] bg-[#3a2023]"><div className={`h-full w-[38%] ${red}`} /></div>
          </div>
          <div className="flex items-center justify-between gap-2.5 rounded-[10px] border border-[#2e1719] bg-[#120809] px-3 py-2.5">
            <span className="text-xs text-[#eee]">♥ {m.fav}</span>
            <span className="font-mono text-[10px] text-[#b98a8a]">sqflite</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const MOCKUPS: Record<Mockup, (props: { t: Dictionary }) => React.JSX.Element> = {
  antoky: AntokyMockup,
  slot: SlotMockup,
  cal: CalendarMockup,
  jr: JournalMockup,
  ec: EcommerceMockup,
  cm: CinemapediaMockup,
};

export default function ProjectMockup({ kind, t }: { kind: Mockup; t: Dictionary }) {
  const Component = MOCKUPS[kind];
  return <Component t={t} />;
}
