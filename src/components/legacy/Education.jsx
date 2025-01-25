import React, { useState } from 'react';
import Header from './SectionHeader';
import profile from '../../../profile.json'

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

    const { schools } = profile;

    return (
        <div className="mb-8">
            <Header title="Education"/>
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
                {schools.map((school, index) => (
                    <EducationCard
                        key={index}
                        logo={school.logo}
                        alt={school.alt}
                        school={school.school}
                        date={school.date}
                        description={school.description}
                    />
                 ))}
            </div>
        </div>
    );
};

export default Education;