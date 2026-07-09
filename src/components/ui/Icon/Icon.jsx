import { icons } from '../../../data/icons';

/**
 * Icono lineal reutilizable. `name` debe existir en `data/icons.js`.
 */
function Icon({ name, size = 20, strokeWidth = 1.75, className }) {
  const path = icons[name];
  if (!path) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export default Icon;
