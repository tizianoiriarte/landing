'use client';

import { useEffect } from 'react';

// Animaciones del lado del cliente:
//  · aparición al hacer scroll (.reveal → .is-visible)
//  · números que cuentan (.count anima el último número de cada métrica)
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const re = /(\d+(?:,\d+)?)(?!.*\d)/;
    const fmt = (n, dec) => n.toFixed(dec).replace('.', ',');
    const prep = (el) => {
      const txt = el.textContent;
      const m = txt.match(re);
      if (!m) return null;
      const raw = m[1];
      const dec = raw.indexOf(',') > -1 ? raw.split(',')[1].length : 0;
      return {
        el,
        pre: txt.slice(0, m.index),
        post: txt.slice(m.index + raw.length),
        target: parseFloat(raw.replace(',', '.')),
        dec,
        final: txt,
      };
    };

    const frames = [];
    const timers = [];
    const run = (c) => {
      let t0 = null;
      const dur = 1600;
      const step = (t) => {
        if (!t0) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        c.el.textContent = c.pre + fmt(c.target * e, c.dec) + c.post;
        if (p < 1) frames.push(requestAnimationFrame(step));
        else c.el.textContent = c.final;
      };
      frames.push(requestAnimationFrame(step));
    };

    const counters = [];
    if (!reduce) {
      document.querySelectorAll('.count').forEach((el) => {
        const c = prep(el);
        if (c) {
          el.setAttribute('aria-label', c.final);
          el.textContent = c.pre + fmt(0, c.dec) + c.post;
          counters.push(c);
        }
      });
    }

    const reveals = document.querySelectorAll('.reveal');
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-visible'));
      counters.forEach((c) => { c.el.textContent = c.final; });
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-visible');
        io.unobserve(en.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));

    const co = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const c = counters.find((x) => x.el === en.target);
        if (c) timers.push(setTimeout(() => run(c), 250));
        co.unobserve(en.target);
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c.el));

    return () => {
      io.disconnect();
      co.disconnect();
      timers.forEach(clearTimeout);
      frames.forEach(cancelAnimationFrame);
      counters.forEach((c) => { c.el.textContent = c.final; });
    };
  }, []);

  return null;
}
