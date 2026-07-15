import Icon from '../../ui/Icon/Icon';
import styles from './TechStack.module.css';

/** Tarjeta reutilizable para representar una tecnología dentro de una categoría. */
function TechCard({ name }) {
  return (
    <div className={styles.card}>
      <Icon name="code" size={16} className={styles.cardIcon} />
      <span>{name}</span>
    </div>
  );
}

export default TechCard;
