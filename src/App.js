
import React from 'react';
import Loadpage from './components/loadpage';
import Navbar from './components/navbar';
import About from './pages/about';
import Certificates from './pages/certificates';
import Projects from './pages/projects';
import Contact from './pages/contact';

import Home from './pages/home';

import './App.css';

function App() {
  return (
  <div>
    <nav>
      <Navbar />
    </nav>
    <section id='home'>
      <Home />  
    </section>

    <section id='about'>
      <About />
    </section>

    <section id='certificates'>
      <Certificates />
    </section>

    <section id='projects'>
      <Projects />
    </section>

    <section id='contact'>
      <Contact />
    </section>

    </div>
  );
}

export default App;
