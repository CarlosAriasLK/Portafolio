'use client';

import { useEffect, useState } from 'react';

const clamp = (v: number) => Math.max(0, Math.min(1, v));

/**
 * Efectos ligados al scroll, aplicados directamente sobre el DOM vía atributos data-*:
 * - [data-progress]   barra de progreso superior
 * - [data-reveal=ms]  aparición al entrar en pantalla (con retardo en ms)
 * - [data-hero-name] / [data-hero-term]  parallax del hero
 * - [data-words] > [data-word]  resaltado palabra a palabra
 * - [data-tl]         línea de tiempo que se rellena
 * - [data-drift=±1]   desplazamiento horizontal de titulares
 * - [data-par=k]      parallax vertical
 * Devuelve si la página ya se desplazó (para el fondo del header).
 */
export function useScrollEffects(rerunKey: unknown) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const d = document;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Aparición al entrar en pantalla
    let io: IntersectionObserver | null = null;
    const reveals = d.querySelectorAll<HTMLElement>('[data-reveal]');
    const show = (el: HTMLElement) => { el.style.opacity = '1'; el.style.transform = 'none'; };
    if (reduced || !('IntersectionObserver' in window)) {
      reveals.forEach(show);
    } else {
      io = new IntersectionObserver(entries => entries.forEach(e => {
        if (e.isIntersecting) { show(e.target as HTMLElement); io?.unobserve(e.target); }
      }), { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
      reveals.forEach(el => {
        const delay = Number(el.dataset.reveal) || 0;
        el.style.transition = `opacity 1s cubic-bezier(.2,.7,.1,1) ${delay}ms, transform 1.1s cubic-bezier(.2,.7,.1,1) ${delay}ms`;
        io!.observe(el);
      });
    }

    const tick = () => {
      const y = window.scrollY, vh = window.innerHeight;
      const max = d.documentElement.scrollHeight - vh;

      const pb = d.querySelector<HTMLElement>('[data-progress]');
      if (pb) pb.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      setScrolled(y > 40);

      const words = d.querySelectorAll<HTMLElement>('[data-word]');
      if (reduced) { words.forEach(w => { w.style.opacity = '1'; }); return; }

      const hn = d.querySelector<HTMLElement>('[data-hero-name]');
      if (hn && y < vh * 1.4) {
        hn.style.transform = `translate3d(0,${y * 0.22}px,0)`;
        hn.style.opacity = String(Math.max(0, 1 - y / (vh * 0.85)));
      }
      const ht = d.querySelector<HTMLElement>('[data-hero-term]');
      if (ht && y < vh * 1.4) ht.style.transform = `translate3d(0,${y * 0.08}px,0) scale(${1 - clamp(y / vh) * 0.05})`;

      const wc = d.querySelector<HTMLElement>('[data-words]');
      if (wc && words.length) {
        const r = wc.getBoundingClientRect();
        const p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.25));
        const k = Math.round(p * words.length * 1.05);
        words.forEach((w, i) => { const o = i < k ? '1' : '0.16'; if (w.style.opacity !== o) w.style.opacity = o; });
      }

      const tl = d.querySelector<HTMLElement>('[data-tl]');
      if (tl?.parentElement) {
        const r = tl.parentElement.getBoundingClientRect();
        tl.style.transform = `scaleY(${clamp((vh * 0.65 - r.top) / r.height)})`;
      }

      d.querySelectorAll<HTMLElement>('[data-drift]').forEach(el => {
        const r = el.getBoundingClientRect(); if (r.bottom < -200 || r.top > vh + 200) return;
        const c = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(${c * 80 * (Number(el.dataset.drift) || 1)}px,0,0)`;
      });

      d.querySelectorAll<HTMLElement>('[data-par]').forEach(el => {
        const r = el.getBoundingClientRect(); if (r.height === 0 || r.bottom < -150 || r.top > vh + 150) return;
        const c = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0,${(c * -50 * (Number(el.dataset.par) || 0)).toFixed(1)}px,0)`;
      });
    };

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = 0; tick(); });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', tick);
    tick();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', tick);
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [rerunKey]);

  return scrolled;
}
