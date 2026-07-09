import Reveal from '../Reveal/Reveal';
import styles from './SectionTitle.module.css';

/**
 * Encabezado de sección reutilizable. `eyebrow` es la ruta estilo
 * terminal (ej. "~/proyectos") que identifica visualmente cada sección.
 */
function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <Reveal className={`${styles.wrapper} ${align === 'center' ? styles.center : ''}`}>
      <p className={`${styles.eyebrow} mono`}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </Reveal>
  );
}

export default SectionTitle;
