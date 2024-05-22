import React, { useState, useRef } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';


function App() {
   const aboutMeRef= useRef(null);

  return (
    <div>
      {/* <Navbar /> */}
      <Hero aboutMeRef = {aboutMeRef} />
      <About aboutMeRef = {aboutMeRef} />
      <Footer />
    </div>
  );
}

export default App
