import { useEffect, useRef, useState } from 'react';

/**
 * Detecta cuándo un elemento entra en el viewport, para disparar
 * animaciones sutiles de aparición (fade-in / slide-up) una sola vez.
 *
 * @param {object} options
 * @param {number} options.threshold - porcentaje visible requerido (0-1)
 * @returns {[React.RefObject, boolean]} [ref, isInView]
 */
export function useInView({ threshold = 0.15 } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}
