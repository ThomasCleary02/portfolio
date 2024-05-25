import React from 'react';
import AboutMe from './about/AboutMe.jsx';
import Education from './about/Education.jsx';
import Projects from './about/Projects.jsx';
import Skills from './about/Skills.jsx';
import Contact from './about/Contact.jsx';

const About = ({ aboutMeRef }) => {

    return (
        <div className="flex justify-center items-center h-full bg-white" ref={aboutMeRef}>
            <div className="px-4 py-8 max-w-2xl">

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
