import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ aboutMeRef }) => {
    const scrollToAboutMe = () => {
        aboutMeRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
        });
    };

    return (
        <motion.div
            className="h-screen flex justify-center items-center text-black text-shadow-lg hero-container"
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">
                    Hey, I'm Thomas Cleary!
                </h1>
                <p className="text-lg mb-8 font-semibold">
                    A passionate developer ready to make an impact.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToAboutMe}
                    className="font-bold border-solid border-black border-2 text-black py-2 px-4 rounded-lg hover:border-transparent hover:text-white hover:bg-black"
                >
                    Learn More About Me
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Hero;