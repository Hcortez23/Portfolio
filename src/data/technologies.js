/**
 * technologies.js
 * -----------------------------------------------------------------------
 * Stack técnico agrupado por categoría. Para agregar una tecnología,
 * añade un string al arreglo `items` de la categoría correspondiente.
 * Para agregar una categoría nueva, agrega un objeto { category, items }.
 * -----------------------------------------------------------------------
 */

export const technologies = [
  {
    category: 'Lenguajes',
    items: ['C#', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend',
    items: ['.NET / WinForms', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'Node.js', 'Express', 'JWT', 'API REST', 'Swagger'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML', 'CSS', 'JavaScript', 'Bunifu UI'],
  },
  {
    category: 'Bases de datos',
    items: ['SQL Server', 'MySQL', 'MongoDB Atlas'],
  },
  {
    category: 'Herramientas',
    items: ['Git', 'GitHub', 'Figma', 'Postman', 'Swagger UI'],
  },
];
