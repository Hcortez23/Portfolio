/**
 * projects.js
 * -----------------------------------------------------------------------
 * Cada objeto de este arreglo genera automáticamente una sección de
 * proyecto completa (imagen, descripción, objetivo, tecnologías, estado,
 * fecha, características y botones de enlaces) sin tocar ningún componente.
 *
 * CÓMO AGREGAR UN PROYECTO NUEVO
 *   1. Copia uno de los objetos de abajo.
 *   2. Cambia el `id` (debe ser único, sin espacios).
 *   3. Completa los campos con la información del nuevo proyecto.
 *   4. Listo — aparecerá automáticamente en la sección "Proyectos".
 *
 * ENLACES (links)
 *   Deja el valor en `null` mientras no tengas el enlace todavía.
 *   El botón correspondiente se mostrará automáticamente deshabilitado
 *   ("Próximamente") hasta que reemplaces el `null` por la URL real.
 *
 * IMAGEN (image)
 *   Deja `image: null` para mostrar una portada generada automáticamente.
 *   Cuando tengas una captura, importa la imagen en la parte superior de
 *   este archivo (ej. `import securisCover from '../assets/securis.png'`)
 *   y asígnala aquí.
 *
 * ESTADO (status)
 *   Usa uno de estos tres valores exactos: 'planeado' | 'en-desarrollo' | 'finalizado'
 * -----------------------------------------------------------------------
 */

export const projects = [
  {
    id: 'securis',
    name: 'Securis',
    tagline: 'Sistema de gestión y control administrativo',
    image: null,
    description:
      'Sistema de escritorio orientado a organizaciones que necesitan administrar información de manera segura y eficiente. Centraliza la gestión de usuarios, controla el acceso mediante roles, registra operaciones importantes y facilita la consulta de información mediante búsquedas, filtros y reportes.',
    objective:
      'Centralizar la administración de usuarios, accesos y operaciones de una organización en una única aplicación de escritorio, con una interfaz moderna que se aleje del aspecto tradicional de WinForms y transmita profesionalismo empresarial.',
    technologies: ['C#', '.NET / WinForms', 'Bunifu UI', 'SQL Server'],
    status: 'en-desarrollo',
    date: '2026',
    features: [
      'Autenticación mediante inicio de sesión',
      'Gestión de usuarios y roles',
      'Dashboard con estadísticas generales',
      'Administración completa de registros (CRUD)',
      'Búsqueda y filtrado avanzado',
      'Historial o bitácora de acciones realizadas por los usuarios',
      'Generación de reportes',
      'Configuración general del sistema',
      'Validaciones y manejo de errores',
    ],
    links: {
      github: null, // TODO: URL del repositorio de GitHub
      docs: null, // TODO: URL de la documentación
      diagrams: null, // TODO: URL de los diagramas (arquitectura, BD, etc.)
      figma: null, // TODO: URL del diseño en Figma
      demo: null, // TODO: URL del demo (cuando exista)
    },
  },

  {
    id: 'h2c',
    name: 'H2C',
    tagline: 'Sistema web de gestión de tickets de soporte técnico',
    image: null,
    description:
      'Plataforma web que centraliza y optimiza la atención de incidencias dentro de una organización, administrando solicitudes de soporte desde su creación hasta su resolución y facilitando la comunicación entre usuarios, técnicos y administradores mediante un flujo de trabajo organizado.',
    objective:
      'Ofrecer una plataforma segura y escalable para la gestión de tickets, con roles diferenciados, autenticación mediante JWT y una API REST documentada que facilite futuras integraciones.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'JWT', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    status: 'planeado',
    date: '2026',
    features: [
      'Inicio de sesión seguro con autenticación JWT',
      'Gestión de usuarios y roles',
      'Creación, asignación, actualización y cierre de tickets',
      'Seguimiento del estado de cada incidencia',
      'Dashboard con estadísticas e indicadores principales',
      'Búsqueda y filtrado avanzado de tickets',
      'Historial de actividades y cambios realizados',
      'Gestión de prioridades y categorías',
      'Administración de técnicos',
      'API REST documentada para futuras integraciones',
      'Interfaz web responsive',
    ],
    links: {
      github: null, // TODO: URL del repositorio de GitHub
      docs: null, // TODO: URL de la documentación
      diagrams: null, // TODO: URL de los diagramas (arquitectura, BD, etc.)
      figma: null, // TODO: URL del diseño en Figma
      demo: null, // TODO: URL del demo (cuando exista)
    },
  },

  {
    id: 'camviraw',
    name: 'CamviRaw',
    tagline: 'Plataforma para gestión de un estudio audiovisual',
    image: null,
    description:
      'Implementación desarrollada desde cero, inspirada en un proyecto académico realizado para el emprendimiento Camvi RAW (producción audiovisual y cobertura fotográfica de eventos). Centraliza los procesos comerciales, operativos y administrativos del negocio en una plataforma web moderna.',
    objective:
      'Sustituir procesos manuales y herramientas dispersas por una plataforma que cubra cotizaciones, reservas, pagos, gestión de proyectos fotográficos y galerías privadas para clientes, con una arquitectura propia y código completamente original.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'Swagger', 'JWT'],
    status: 'planeado',
    date: '2026',
    features: [
      'Registro e inicio de sesión de clientes',
      'Catálogo de servicios y paquetes',
      'Portafolios digitales organizados por categorías',
      'Solicitud y generación automática de cotizaciones',
      'Gestión de reservas y fechas disponibles',
      'Administración de pagos y anticipos',
      'Integración preparada para pagos digitales (Wompi)',
      'Galerías privadas por cliente con selección de fotografías',
      'Descarga organizada de fotografías seleccionadas',
      'Gestión de auxiliares y checklist de avance por proyecto',
      'Sistema de reseñas y valoraciones',
      'Panel administrativo con estadísticas del negocio',
      'API REST documentada con Swagger',
    ],
    links: {
      github: null, // TODO: URL del repositorio de GitHub
      docs: null, // TODO: URL de la documentación
      diagrams: null, // TODO: URL de los diagramas (arquitectura, BD, etc.)
      figma: null, // TODO: URL del diseño en Figma
      demo: null, // TODO: URL del demo (cuando exista)
    },
  },
];

// Etiquetas visibles y color asociado a cada estado de proyecto
export const statusConfig = {
  planeado: { label: 'Planeado', varColor: 'var(--status-planned)' },
  'en-desarrollo': { label: 'En desarrollo', varColor: 'var(--status-progress)' },
  finalizado: { label: 'Finalizado', varColor: 'var(--status-done)' },
};
