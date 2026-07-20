/**
 * experience.js
 * -----------------------------------------------------------------------
 * Línea de tiempo de experiencia / formación. Edita, agrega o quita
 * entradas de este arreglo; la sección "Experiencia" se actualiza sola.
 * `current: true` marca la entrada como vigente (badge "Actual").
 * -----------------------------------------------------------------------
 */

export const experience = [
  {
    id: 'formacion-desarrollo',
    role: 'Formación en Desarrollo de Software',
    organization: 'Autoformación y proyectos personales', // TODO: ajusta institución/organización
    period: '2024 — Presente',
    current: true,
    description:
      'Estudio y práctica constante en desarrollo de software, cubriendo desde aplicaciones de escritorio con .NET hasta desarrollo backend con Java/Spring Boot y aplicaciones full stack con React y Node.js.',
    tags: ['C#', '.NET', 'Java', 'Spring Boot', 'React', 'Node.js'],
  },
  {
    id: 'proyecto-securis',
    role: 'Desarrollo de Securis',
    organization: 'Proyecto de portafolio', // TODO: ajusta si aplica a un curso/institución
    period: '2026',
    current: false,
    description:
      'Diseño y desarrollo de un sistema de gestión administrativa de escritorio con arquitectura por capas, aplicando buenas prácticas del ecosistema .NET.',
    tags: ['C#', 'WinForms', 'SQL Server', 'Arquitectura por capas'],
  },
  {
    id: 'proyecto-h2c',
    role: 'Desarrollo de H2C',
    organization: 'Proyecto de portafolio', // TODO: ajusta si aplica a un curso/institución
    period: '2026',
    current: false,
    description:
      'Diseño de una API REST con Spring Boot para gestión de tickets de soporte técnico, implementando autenticación JWT y buenas prácticas de arquitectura por capas.',
    tags: ['Java', 'Spring Boot', 'JWT', 'MySQL'],
  },
];
