import React, { useState } from 'react';
import Header from './SectionHeader';

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
    return (
        <div className="mb-8">
            <Header title="Projects" />
            <div className="flex flex-col space-y-4">
                <ProjectCard 
                    title="Capstone Research Project"
                    organization="Shepherd University"
                    location="Shepherdstown, WV"
                    date="Jan 2024 - Apr 2024"
                    description="Led the deployment of a database for a web application prototype showcasing products from Amazon. Engineered a Python web scraper for efficient data collection from Amazon, optimizing the prototype's content accuracy. Collaborated through GitHub in a MERN stack project to develop a responsive, visually appealing prototype website. Documented development processes and research findings, enhancing the project's academic value and future adaptability."
                />
                <ProjectCard 
                    title="SRA International Career Center"
                    organization="Lion Flower, LLC"
                    location="Hagerstown, MD"
                    date="May 2019 - Aug 2019"
                    description="Contributed to the current version of the SRA International Careers site and coordinated with UI/UX Lead in developing front-end interface using Angular. Worked with Angular, TypeScript, HTML, CSS, and Bootstrap."
                    link="https://careercenter.srainternational.org/index.php"
                />
                <ProjectCard
                    title="Halluminate Website"
                    organization="Halluminate"
                    location="Remote"
                    date="Jun 2024 - Jul 2024"
                    description="I collaborated remotely with a team to design and develop Halluminate’s website. Using Figma, I created and presented intuitive design prototypes, which we then brought to life using React and Tailwind CSS through collaborative efforts on GitHub. This project honed my UI/UX design skills and demonstrated my ability to effectively contribute to remote, agile development teams."
                />
            </div>
        </div>
    );
};

export default Projects;