import { useInView } from '../../../hooks/useInView';
import styles from './Reveal.module.css';

/**
 * Envuelve a sus hijos con una animación sutil de aparición
 * (fade + slide-up) cuando entran en el viewport.
 *
 * @param {'div'|'li'|'span'} as - elemento contenedor a renderizar
 * @param {number} delay - retraso en ms, útil para escalonar listas
 */
function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }) {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${isInView ? styles.visible : ''} ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
