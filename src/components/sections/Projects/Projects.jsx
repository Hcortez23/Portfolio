import { projects } from '../../../data/projects';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section id="proyectos" className={styles.section}>
      <div className="container">
        <SectionTitle
          eyebrow="~/proyectos"
          title="Proyectos"
          description="Aplicaciones diseñadas y construidas como si fueran productos reales: con objetivos claros, arquitectura por capas y buenas prácticas de desarrollo."
        />

        <div className={styles.list}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} reversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
