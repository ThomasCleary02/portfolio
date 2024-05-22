import React from 'react';
import AboutMe from './AboutMe.jsx';
import Education from './Education.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';

const About = ({ aboutMeRef }) => {

    return (
        <div className="flex justify-center items-center h-full" ref={aboutMeRef}>
            <div className="px-4 py-8 max-w-2xl">

            {/* About Me */}
            <AboutMe />
            
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
