
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
    {/* <nav className="bg-[rgba(51,51,51,0.5)] backdrop-blur-md p-2.5 px-5 fixed top-5 left-1/2 transform -translate-x-1/2 rounded-[20px] z-[1000]">
      <ul className="flex space-x-4">
        <li><a href="#home" className="text-white no-underline px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Home</a></li>
        <li><a href="#about" className="text-white no-underline px-5 py-3 inline-block hover:bg-[#575757] rounded-md">About</a></li>
        <li><a href="#certificates" className="text-white no-underline px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Certificates</a></li>
        <li><a href="#projects" className="text-white no-underline px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Projects</a></li>
        <li><a href="#contact" className="text-white no-underline px-5 py-3 inline-block hover:bg-[#575757] rounded-md">Contact</a></li>
      </ul>
    </nav> */}

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
