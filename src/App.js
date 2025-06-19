import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import CyberpunkBackground from './components/CyberpunkBackground';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CyberpunkBackground />
      <div className="relative z-10 dark bg-background min-h-screen font-sans scroll-smooth">
        <Navbar />
        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
