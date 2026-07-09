import Icon from '../Icon/Icon';
import styles from './Button.module.css';

/**
 * Botón/enlace reutilizable.
 *
 * - Si recibe `href`, se renderiza como <a>. Si no, como <button>.
 * - Si `href` es null/undefined, se muestra deshabilitado con la
 *   etiqueta "Próximamente" (útil para enlaces que aún no existen,
 *   como el repositorio o el demo de un proyecto).
 *
 * @param {'primary'|'secondary'|'ghost'} variant
 */
function Button({
  children,
  href,
  onClick,
  icon,
  variant = 'secondary',
  disabledLabel = 'Próximamente',
  className = '',
}) {
  const isDisabled = href === null || href === undefined;
  const classes = `${styles.button} ${styles[variant]} ${isDisabled ? styles.disabled : ''} ${className}`;

  const content = (
    <>
      {icon && <Icon name={icon} size={17} />}
      <span>{isDisabled ? disabledLabel : children}</span>
    </>
  );

  if (isDisabled) {
    return (
      <button type="button" className={classes} disabled aria-disabled="true" title={`${children} — ${disabledLabel}`}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
