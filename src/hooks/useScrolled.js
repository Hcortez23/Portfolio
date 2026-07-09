import { useEffect, useState } from 'react';

/**
 * Devuelve `true` cuando la página ha hecho scroll más allá de `threshold`.
 * Se usa para cambiar el estilo del Navbar (fondo, sombra) al desplazarse.
 */
export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
