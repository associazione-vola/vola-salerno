import { useCallback, useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';

// Quota della larghezza della galleria, a sinistra e a destra, in cui il cursore fa comparire la freccia
const EDGE_ZONE = 0.1;

// Logica di scorrimento della galleria delle storie: frecce per il mouse e accenno di scorrimento iniziale
export function useGalleryScroll() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState<'left' | 'right' | null>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

  // Le frecce si nascondono all'inizio e alla fine della galleria
  const updateCanScroll = useCallback(() => {
    const el = galleryRef.current;
    if (!el) return;
    const left = el.scrollLeft > 4;
    const right = el.scrollLeft < el.scrollWidth - el.clientWidth - 4;
    setCanScroll((prev) => (prev.left === left && prev.right === right ? prev : { left, right }));
  }, []);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    const observer = new ResizeObserver(updateCanScroll);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateCanScroll]);

  // Piccolo accenno di scorrimento la prima volta che la galleria compare, per far capire che si può scorrere.
  // Parte una sola volta, si ferma appena l'utente interagisce e non parte con "riduci animazioni".
  useEffect(() => {
    const el = galleryRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;
    let timerId = 0;
    let cancelled = false;

    const stop = () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      window.clearTimeout(timerId);
    };
    const userEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'] as const;
    userEvents.forEach((type) => el.addEventListener(type, stop, { passive: true }));

    const nudge = () => {
      if (cancelled || el.scrollLeft > 0) return;
      const distance = 72;
      const duration = 1500;
      const startTime = performance.now();
      let lastSet = 0;

      const step = (now: number) => {
        if (cancelled) return;
        // Se la posizione non è quella che ho impostato, qualcun altro ha mosso la galleria: non ostacolarlo
        if (Math.abs(el.scrollLeft - lastSet) > 1.5) return;
        const t = Math.min((now - startTime) / duration, 1);
        lastSet = distance * Math.sin(Math.PI * t) ** 2; // 0 → distanza → 0, con andamento morbido
        el.scrollLeft = lastSet;
        if (t < 1) rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          timerId = window.setTimeout(nudge, 600);
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      stop();
      userEvents.forEach((type) => el.removeEventListener(type, stop));
    };
  }, []);

  // Il cursore vicino al lato sinistro o destro della galleria fa comparire la freccia di quel lato
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const next = x < EDGE_ZONE ? 'left' : x > 1 - EDGE_ZONE ? 'right' : null;
    setEdge((prev) => (prev === next ? prev : next));
  };

  const clearEdge = () => setEdge(null);

  const scrollByCards = (direction: 1 | -1) => {
    const el = galleryRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('article')?.getBoundingClientRect().width ?? 320;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: direction * (cardWidth + 20) * 2, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return { galleryRef, edge, canScroll, updateCanScroll, handleMouseMove, clearEdge, scrollByCards };
}
