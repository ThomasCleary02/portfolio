import React, { useState } from 'react';
import Header from './SectionHeader'

const ContactCard = ({ icon, contactInfo, link }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <a
            className={`rounded-lg shadow-md p-6 flex justify-between items-center w-full transition duration-300 ${
                isHovered ? 'bg-blue-500' : 'bg-white'
            }`}
            href={link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`flex items-center space-x-4 ${
                isHovered ? 'text-white' : 'text-black'
            }`}>
                <div className="w-6 h-6">
                    {icon}
                </div>
                <div>
                    {contactInfo}
                </div>
            </div>
        </a>
    );
}

const Contact = () => {
    return (
        <div>
            <Header title="Contact"/>
            <div className="grid grid-cols-2 mb-4 mt-4 gap-4">
                <ContactCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    }
                    contactInfo="thomas@thomasmcleary.com"
                    link="mailto:thomas@thomasmcleary.com"
                />
                <ContactCard
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    }
                    contactInfo="(301) 800-2523"
                    link="tel:3018002523"
                />
            </div>
        </div>
    );
};

export default Contact;
