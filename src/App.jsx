import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import TechStack from './components/sections/TechStack/TechStack';
import Projects from './components/sections/Projects/Projects';
import Experience from './components/sections/Experience/Experience';
import Contact from './components/sections/Contact/Contact';

/**
 * Landing page de una sola página (SPA por anclas).
 * Para agregar una sección nueva:
 *   1. Crea el componente en src/components/sections/.
 *   2. Agrega su entrada en src/data/navigation.js.
 *   3. Renderízalo aquí dentro de <main>, con el mismo `id` del navigation.js.
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
