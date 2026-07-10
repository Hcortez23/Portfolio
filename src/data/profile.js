/**
 * profile.js
 * -----------------------------------------------------------------------
 * Información personal usada en Hero, Sobre mí, Footer y Contacto.
 * Edita este archivo para actualizar textos, enlaces o datos de contacto
 * sin tocar ningún componente.
 * -----------------------------------------------------------------------
 */

export const profile = {
  name: 'Herbert Cortez',
  role: 'Desarrollador de Software',
  location: 'El Salvador',

  // Frase corta que aparece en el Hero, debajo del nombre
  tagline:
    'Construyo sistemas robustos de escritorio y web, desde la base de datos hasta la interfaz.',

  // Roles que rotan/se listan en el Hero (mono, estilo terminal)
  focusAreas: ['Backend', 'Full Stack', 'Arquitectura de Software', 'Bases de Datos'],

  // Párrafos de la sección "Sobre mí". Puedes agregar o quitar párrafos.
  about: [
    'Soy desarrollador de software enfocado en construir aplicaciones sólidas, escalables y bien pensadas desde su arquitectura. Disfruto tanto el trabajo de backend, diseñando la lógica y estructura de los sistemas, como el de frontend, dando forma a experiencias claras y funcionales.',
    'Me interesa particularmente el diseño de arquitecturas por capas, el modelado de bases de datos y la construcción de APIs limpias y bien documentadas. Trabajo con distintos ecosistemas — .NET, Java/Spring y JavaScript/Node — adaptando la herramienta correcta a cada problema.',
    'Cada proyecto en este portafolio está pensado como si fuera una aplicación real: con objetivos claros, buenas prácticas y una interfaz que transmita profesionalismo, más allá de ser un simple ejercicio académico.',
  ],

  // Datos rápidos que se muestran como lista en "Sobre mí"
  highlights: [
    { label: 'Enfoque', value: 'Backend & arquitectura de software' },
    { label: 'Ecosistemas', value: '.NET · Java/Spring · Node.js' },
    { label: 'Bases de datos', value: 'SQL Server · MySQL · MongoDB' },
    { label: 'Ubicación', value: 'El Salvador (remoto disponible)' },
  ],

  contact: {
    email: 'herbert.cortez@example.com', // TODO: reemplazar con tu correo real
    phone: '', // TODO: opcional, ej. '+503 0000 0000'
    whatsapp: '', // TODO: opcional, ej. 'https://wa.me/50300000000'
  },

  social: {
    github: 'https://github.com/', // TODO: agrega tu usuario de GitHub
    linkedin: 'https://linkedin.com/in/', // TODO: agrega tu perfil de LinkedIn
  },

  // TODO: agrega el enlace a tu CV en PDF cuando lo tengas listo
  resumeUrl: '',
};
