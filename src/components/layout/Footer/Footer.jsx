import { profile } from '../../../data/profile';
import { scrollToSection } from '../../../utils/scroll';
import Icon from '../../ui/Icon/Icon';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className="mono">
          <span className={styles.accent}>$</span> diseñado y desarrollado por {profile.name} · {year}
        </p>

        <button
          type="button"
          className={styles.toTop}
          onClick={() => scrollToSection('inicio')}
          aria-label="Volver arriba"
        >
          <Icon name="chevronUp" size={16} />
          Volver arriba
        </button>
      </div>
    </footer>
  );
}

export default Footer;
