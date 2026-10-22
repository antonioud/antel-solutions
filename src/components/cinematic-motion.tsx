'use client';

import { useEffect } from 'react';

/** A small scroll offset on the homepage architecture image only. */
export default function CinematicMotion() {
  useEffect(() => {
    const frame = document.querySelector<HTMLElement>('.boutique-photo');
    if (!frame) return;
    const enabled = window.matchMedia('(min-width: 761px) and (prefers-reduced-motion: no-preference)');
    let pending = 0;
    function update() {
      pending = 0;
      if (!frame) return;
      if (!enabled.matches) {
        frame.style.removeProperty('--cinematic-offset');
        return;
      }
      const bounds = frame.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      const progress = (bounds.top + bounds.height / 2 - window.innerHeight / 2) / ((window.innerHeight + bounds.height) / 2);
      frame.style.setProperty('--cinematic-offset', `${Math.max(-18, Math.min(18, progress * -18)).toFixed(2)}px`);
    }
    function schedule() {
      if (!pending) pending = requestAnimationFrame(update);
    }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    enabled.addEventListener('change', schedule);
    update();
    return () => {
      cancelAnimationFrame(pending);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      enabled.removeEventListener('change', schedule);
      frame.style.removeProperty('--cinematic-offset');
    };
  }, []);
  return null;
}
