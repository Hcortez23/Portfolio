import { profile } from '../../../data/profile';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Reveal from '../../ui/Reveal/Reveal';
import styles from './About.module.css';

function About() {
  return (
    <section id="sobre-mi" className={styles.section}>
      <div className="container">
        <SectionTitle eyebrow="~/sobre-mi" title="Sobre mí" />

        <div className={styles.grid}>
          <div className={styles.text}>
            {profile.about.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 20)} delay={i * 90} as="p" className={styles.paragraph}>
                {paragraph}
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className={styles.card}>
            <p className={`${styles.cardLabel} mono`}>// datos rápidos</p>
            <ul className={styles.highlightList}>
              {profile.highlights.map((item) => (
                <li key={item.label}>
                  <span className={styles.highlightLabel}>{item.label}</span>
                  <span className={styles.highlightValue}>{item.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
