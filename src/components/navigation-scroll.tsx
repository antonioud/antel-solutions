'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NavigationScroll() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Section links retain their anchor destination; ordinary pages open at the hero.
    if (window.location.hash) return;
    const reset = () => {
      if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
    reset();
    const frame = requestAnimationFrame(reset);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest('a') : null;
      if (!anchor || anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return;
      const destination = new URL(anchor.href, window.location.href);
      // A header/footer link back to the current page should also leave a deep section.
      if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname || destination.hash) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
    }
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('click', onClick); cancelAnimationFrame(frame); };
  }, []);

  return null;
}
