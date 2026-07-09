import styles from './Badge.module.css';

/**
 * Chip reutilizable para tecnologías, tags de experiencia, etc.
 * Si recibe `dotColor`, muestra un punto de color (usado para estado).
 */
function Badge({ children, dotColor }) {
  return (
    <span className={styles.badge}>
      {dotColor && <span className={styles.dot} style={{ background: dotColor }} />}
      {children}
    </span>
  );
}

export default Badge;
