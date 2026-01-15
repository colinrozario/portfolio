import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack'; // Renamed from About
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Cursor />
          <ParticlesBackground />
          <Header />
          <main>
            <Hero />
            <About />
            <Stack />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
