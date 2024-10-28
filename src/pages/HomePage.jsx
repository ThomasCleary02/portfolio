import React from 'react';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const HomePage = ({ aboutMeRef }) => {
    return (
        <div>
            <div className="flex justify-center items-center h-full bg-white">
                <div className="px-4 py-8 max-w-4xl">
                    <div ref={aboutMeRef}>
                        <AboutMe />
                    </div>
                    <Contact />
                    <Education />
                    <Projects />
                    <Skills />
                </div>
            </div>
        </div>
    );
};

export default HomePage;