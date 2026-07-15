import { technologies } from '../../../data/technologies';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Reveal from '../../ui/Reveal/Reveal';
import TechCard from './TechCard';
import styles from './TechStack.module.css';

function TechStack() {
  return (
    <section id="tecnologias" className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow="~/tecnologias"
          title="Tecnologías"
          description="Herramientas y lenguajes que uso para diseñar, construir y mantener aplicaciones de escritorio y web."
        />

        <div className={styles.categories}>
          {technologies.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 60} className={styles.category}>
              <p className={`${styles.categoryLabel} mono`}>// {group.category}</p>
              <div className={styles.cards}>
                {group.items.map((tech) => (
                  <TechCard key={tech} name={tech} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
