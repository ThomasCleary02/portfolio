import React from 'react';
import Header from './SectionHeader'

const Skill = ({ imgpath, title }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 hover:bg-blue-100">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <img className="w-full h-full object-contain" src={imgpath} alt={title} />
            </div>
            <span className="font-semibold text-center text-lg">{title}</span>
        </div>
    );
};

const Skills = () => {
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

    return (
        <div className="mb-8">
            <Header title="Skills"/>
            <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <Skill key={index} title={skill.title} imgpath={skill.imgpath} />
                ))}
            </div>
        </div>
    );
};

export default Skills;