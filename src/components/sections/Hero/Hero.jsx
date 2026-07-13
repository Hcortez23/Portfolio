import { useEffect, useState } from 'react';
import { profile } from '../../../data/profile';
import { scrollToSection } from '../../../utils/scroll';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import Reveal from '../../ui/Reveal/Reveal';
import styles from './Hero.module.css';

/** Rota entre las áreas de enfoque con una transición sutil de fundido. */
function RotatingFocus({ items }) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setFading(false);
      }, 300);
      return () => clearTimeout(timeout);
    }, 2600);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <span className={`${styles.rotating} ${fading ? styles.fading : ''}`}>
      {items[index]}
    </span>
  );
}

function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <Reveal>
            <p className={`${styles.eyebrow} mono`}>$ whoami</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className={styles.name}>{profile.name}</h1>
          </Reveal>

          <Reveal delay={140}>
            <p className={`${styles.role} mono`}>
              <span className={styles.prompt}>&gt;</span> <RotatingFocus items={profile.focusAreas} />
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className={styles.tagline}>{profile.tagline}</p>
          </Reveal>

          <Reveal delay={260}>
            <div className={styles.ctas}>
              <Button variant="primary" onClick={() => scrollToSection('proyectos')}>
                Ver proyectos
              </Button>
              <Button variant="secondary" onClick={() => scrollToSection('contacto')}>
                Contactar
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className={styles.socials}>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icon name="github" size={20} />
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={20} />
              </a>
              <a href={`mailto:${profile.contact.email}`} aria-label="Correo">
                <Icon name="mail" size={20} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className={styles.terminalWrap}>
          <div className={styles.terminal} aria-hidden="true">
            <div className={styles.terminalBar}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
              <span className={`${styles.terminalTitle} mono`}>developer.js</span>
            </div>
            <pre className={`${styles.terminalBody} mono`}>
              <code>
                <span className={styles.kw}>const</span> developer = {'{'}
                {'\n'}  name: <span className={styles.str}>&apos;Herbert Cortez&apos;</span>,
                {'\n'}  role: <span className={styles.str}>&apos;Full Stack Developer&apos;</span>,
                {'\n'}  stack: [<span className={styles.str}>&apos;C#&apos;</span>, <span className={styles.str}>&apos;Java&apos;</span>, <span className={styles.str}>&apos;React&apos;</span>, <span className={styles.str}>&apos;Node.js&apos;</span>],
                {'\n'}  focus: <span className={styles.str}>&apos;backend &amp; arquitectura&apos;</span>,
                {'\n'}
                {'}'};
                {'\n'}
                <span className={styles.cursor}>▍</span>
              </code>
            </pre>
          </div>
        </Reveal>
      </div>

      <button
        type="button"
        className={styles.scrollHint}
        onClick={() => scrollToSection('sobre-mi')}
        aria-label="Ir a la sección Sobre mí"
      >
        <span className="mono">scroll</span>
        <Icon name="arrowDown" size={16} />
      </button>
    </section>
  );
}

export default Hero;
