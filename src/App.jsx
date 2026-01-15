import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stack from './components/About'; // We renamed the component internal to Stack
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="app">
      <Cursor />
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
