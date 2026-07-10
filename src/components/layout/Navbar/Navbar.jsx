import { useState } from 'react';
import { navigation } from '../../../data/navigation';
import { profile } from '../../../data/profile';
import { useScrolled } from '../../../hooks/useScrolled';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { scrollToSection } from '../../../utils/scroll';
import Icon from '../../ui/Icon/Icon';
import Button from '../../ui/Button/Button';
import styles from './Navbar.module.css';

const sectionIds = navigation.map((item) => item.id);

function Navbar() {
  const scrolled = useScrolled(16);
  const activeId = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.inner}`} aria-label="Navegación principal">
        <a
          href="#inicio"
          className={`${styles.logo} mono`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('inicio');
          }}
        >
          <span className={styles.logoAccent}>~/</span>
          {profile.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toLowerCase()}
        </a>

        <ul className={styles.links}>
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${styles.link} ${activeId === item.id ? styles.active : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button variant="secondary" href={profile.social.github} icon="github" className={styles.desktopOnly}>
            GitHub
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul>
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`mono ${activeId === item.id ? styles.mobileActive : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.path}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
