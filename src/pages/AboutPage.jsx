import React from 'react';
import AboutMe from '../components/AboutMe.jsx';
import Education from '../components/Education.jsx';
import Projects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';
import Contact from '../components/Contact.jsx';

const About = ({ aboutMeRef }) => {

    return (
        <div className="flex justify-center items-center h-full bg-white" ref={aboutMeRef}>
            <div className="px-4 py-8 max-w-4xl">

            {/* About Me */}
            <AboutMe />

            {/* Contact */}
            <Contact />
            
            {/* Education */}
            <Education />

            {/* Projects */}
            <Projects />

            {/* Skills */}
            <Skills />

            </div>
        </div>
    );
};

export default About;
