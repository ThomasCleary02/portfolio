import React from 'react';
import AboutMe from '../components/AboutMe.jsx';
import Education from '../components/Education.jsx';
import Projects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';
import Contact from '../components/Contact.jsx';


const skills = [
    { title: 'React.js', imgpath: '/react-svgrepo-com.png'},
    { title: 'TailwindCSS', imgpath: './tailwind-svgrepo-com.png'},
    { title: 'Figma', imgpath: './figma-svgrepo-com.png'},
    { title: 'Python', imgpath: './python-svgrepo-com.png' },
    { title: 'Java', imgpath: './java-svgrepo-com.png' },
    { title: 'MongoDB', imgpath: './mongodb-svgrepo-com.png' },
    { title: 'SQL', imgpath: './sql-svgrepo-com.png' },
    { title: 'Git', imgpath: './git-pull-request-svgrepo-com.png' },
    { title: 'HTML/CSS', imgpath: './html-tag-svgrepo-com.png' }
];

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
            <Skills skills={skills}/>

            </div>
        </div>
    );
};

export default About;
