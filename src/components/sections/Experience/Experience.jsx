import { experience } from '../../../data/experience';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import Badge from '../../ui/Badge/Badge';
import Reveal from '../../ui/Reveal/Reveal';
import Icon from '../../ui/Icon/Icon';
import styles from './Experience.module.css';

function Experience() {
  return (
    <section id="experiencia" className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow="~/experiencia"
          title="Experiencia"
          description="Recorrido de formación y proyectos que reflejan mi crecimiento como desarrollador."
        />

        <ol className={styles.timeline}>
          {experience.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 90} className={styles.item}>
              <div className={styles.marker}>
                <span className={styles.dot} />
                {index !== experience.length - 1 && <span className={styles.line} />}
              </div>

              <div className={styles.itemContent}>
                <div className={styles.itemHeader}>
                  <h3 className={styles.role}>{item.role}</h3>
                  {item.current && <Badge dotColor="var(--status-done)">Actual</Badge>}
                </div>

                <div className={`${styles.subHeader} mono`}>
                  <span className={styles.org}>
                    <Icon name="briefcase" size={14} />
                    {item.organization}
                  </span>
                  <span className={styles.period}>{item.period}</span>
                </div>

                <p className={styles.description}>{item.description}</p>

                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
