import React, { useState } from 'react';
import Header from './SectionHeader';

const EducationCard = ({ logo, alt, school, date, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/2">
            <div className="flex flex-col items-center mb-4">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                    <img src={logo} alt={alt} className="max-w-full max-h-full object-contain"/>
                </div>
                <span className="font-bold text-lg text-left">{school}</span>
                <p className="text-center mb-2">{date}</p>
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 px-4 py-2 border border-black rounded transition duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-500"
                >
                    {isExpanded ? 'Show Less' : 'Learn More'}
                </button>
                {isExpanded && (
                    <p className="text-left mt-4 transition-all duration-300 ease-in-out">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

const Education = () => {
    return (
        <div className="mb-8">
            <Header title="Education"/>
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
                <EducationCard 
                    logo="/shepherd-logo.png"
                    alt="Shepherd University"
                    school="Shepherd University"
                    date="Expected: May 2025"
                    description="I'm currently pursuing a Bachelor of Science in Computer and Information Technology. My coursework includes web development, databases, software engineering, and more. I have engaged in various projects and collaborative efforts, enhancing my practical skills and theoretical knowledge."
                />
                <EducationCard 
                    logo="/hcc-logo.png"
                    alt="Hagerstown Community College"
                    school="Hagerstown Community College"
                    date="Sep 2018 - May 2020"
                    description="I participated in the Early College Access Program where I began my college education while still in high school. This experience provided a strong foundation in my academic journey and prepared me for further studies in computer and information technology."
                />
            </div>
        </div>
    );
};

export default Education;