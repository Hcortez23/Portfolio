/**
 * Desplaza suavemente hacia una sección, compensando la altura del
 * navbar fijo para que el título no quede oculto detrás de él.
 */
export function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
    10
  ) || 72;

  const top = el.getBoundingClientRect().top + window.scrollY - navHeight + 1;

  window.scrollTo({ top, behavior: 'smooth' });
}
