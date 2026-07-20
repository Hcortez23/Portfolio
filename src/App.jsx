import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import TechStack from './components/sections/TechStack/TechStack';
import Projects from './components/sections/Projects/Projects';
import Experience from './components/sections/Experience/Experience';

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
      </main>
      <Footer />
    </>
  );
}

export default App;
