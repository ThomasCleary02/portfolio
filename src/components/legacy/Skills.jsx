import React from 'react';
import Header from './SectionHeader'
import profile from '../../../profile.json'


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

    const { skills } = profile;

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