/**
 * Desplaza suavemente hacia una sección.
 */
export function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  el.scrollIntoView({ behavior: 'smooth' });
}
