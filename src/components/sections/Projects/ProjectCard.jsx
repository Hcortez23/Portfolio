import { statusConfig } from '../../../data/projects';
import Badge from '../../ui/Badge/Badge';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import Reveal from '../../ui/Reveal/Reveal';
import styles from './Projects.module.css';

/** Portada del proyecto: usa `image` si existe, o una portada generada. */
function ProjectCover({ project }) {
  if (project.image) {
    return (
      <img src={project.image} alt={`Captura del proyecto ${project.name}`} className={styles.coverImage} />
    );
  }

  return (
    <div className={styles.coverPlaceholder} aria-hidden="true">
      <Icon name="code" size={30} />
      <span className="mono">{project.name}</span>
    </div>
  );
}

/**
 * Tarjeta reutilizable con toda la información de un proyecto:
 * portada, descripción, objetivo, tecnologías, estado, fecha,
 * características principales y botones de enlaces.
 */
function ProjectCard({ project, reversed = false }) {
  const status = statusConfig[project.status];
  const { github, docs, diagrams, figma, demo } = project.links;

  return (
    <Reveal as="article" id={project.id} className={`${styles.card} ${reversed ? styles.reversed : ''}`}>
      <div className={styles.coverCol}>
        <ProjectCover project={project} />
      </div>

      <div className={styles.contentCol}>
        <div className={styles.metaRow}>
          <Badge dotColor={status.varColor}>{status.label}</Badge>
          <Badge>
            <Icon name="calendar" size={13} />
            {project.date}
          </Badge>
        </div>

        <h3 className={styles.name}>{project.name}</h3>
        <p className={`${styles.tagline} mono`}>{project.tagline}</p>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.objective}>
          <p className={`${styles.objectiveLabel} mono`}>// objetivo</p>
          <p>{project.objective}</p>
        </div>

        <div className={styles.techRow}>
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <ul className={styles.features}>
          {project.features.map((feature) => (
            <li key={feature}>
              <Icon name="check" size={15} className={styles.featureIcon} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Button variant="primary" href={github} icon="github">
            Repositorio
          </Button>
          <Button variant="secondary" href={docs} icon="file">
            Documentación
          </Button>
          <Button variant="secondary" href={diagrams} icon="diagram">
            Diagramas
          </Button>
          <Button variant="secondary" href={figma} icon="figma">
            Figma
          </Button>
          {demo && (
            <Button variant="secondary" href={demo} icon="externalLink">
              Demo
            </Button>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default ProjectCard;
