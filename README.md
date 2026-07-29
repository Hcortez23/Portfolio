# Portfolio · Herbert Cortez

Portafolio personal construido como una landing page de una sola página (SPA por anclas), con un tema visual tipo "terminal oscuro".

## Stack

- **React 19** + **Vite**
- CSS Modules (sin frameworks de UI)
- `oxlint` para linting

## Estructura del proyecto

```
src/
  components/
    layout/      -> Navbar, Footer
    sections/    -> Hero, About, TechStack, Projects, Experience, Contact
    ui/          -> Button, Badge, Icon, SectionTitle, Reveal
  data/          -> contenido editable (perfil, proyectos, experiencia, etc.)
  hooks/         -> useScrolled, useActiveSection, useInView
  utils/         -> utilidades de scroll
```

La idea del proyecto es que el **contenido viva en `src/data/`**, separado de los componentes, para poder actualizar textos, proyectos o experiencia sin tocar la lógica de UI.

## Scripts

```bash
npm run dev       # entorno de desarrollo
npm run build     # build de producción
npm run preview   # preview del build
npm run lint      # oxlint
```

## Agregar una sección nueva

1. Crear el componente en `src/components/sections/`.
2. Agregar su entrada en `src/data/navigation.js`.
3. Renderizarlo en `src/App.jsx` dentro de `<main>`, usando el mismo `id` que en `navigation.js`.
