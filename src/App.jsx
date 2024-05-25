import React, { useRef } from 'react';
import Hero from './components/Hero.jsx';
import AboutPage from './components/AboutPage.jsx';
import Footer from './components/Footer.jsx';
import Background from './components/Background.jsx'

function App() {
   const aboutMeRef= useRef(null);
   const heroRef = useRef(null);

  return (
    <Background>
      <div>
        <div ref={heroRef}>
          <Hero aboutMeRef = {aboutMeRef} />
        </div>
        <AboutPage aboutMeRef = {aboutMeRef} />
        <Footer />
      </div>
    </Background>
  );
}

export default App
