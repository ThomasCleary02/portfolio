import React, { useState } from 'react';
import Header from './SectionHeader';
import profile from '../../../profile.json'

const ProjectCard = ({ title, organization, location, date, description, link }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w">
            <div className="flex flex-col mb-4">
                <div className="flex justify-between mb-4">
                    <div>
                        <span className="font-bold text-lg">{title}</span><br />
                        {organization}
                    </div>
                    <div className="text-right">
                        <span className="font-bold">{location}</span><br />
                        {date}
                    </div>
                </div>
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 px-4 py-2 border border-black rounded transition duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-500"
                >
                    {isExpanded ? 'Show Less' : 'Learn More'}
                </button>
                {isExpanded && (
                    <>
                        <p className="text-left mt-4 transition-all duration-300 ease-in-out">
                            {description}
                        </p>
                        {link && (
                            <a 
                                href={link} 
                                className="block text-blue-500 hover:text-blue-700 mt-2 text-left"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link}
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

const Projects = () => {

    const { projects } = profile;

    return (
        <div className="mb-8">
            <Header title="Projects" />
            <div className="flex flex-col space-y-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        organization={project.organization}
                        location={project.location}
                        date={project.date}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;