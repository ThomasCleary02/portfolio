import React from 'react';
import RouteButton from './RouteButton';
import { motion } from 'framer-motion'
import { effects } from '../styles/animationVariants.js'

const Hero = () => {
  return (
    <section className="bg-backgroundLight h-screen flex items-center justify-center px-10">
      <div className="container mx-auto max-w-6xl px-2 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div 
          className="lg:w-2/3 text-center lg:text-left w-full"
          whileHover="heroHover"
          variants={effects}>
          <h1 className="text-4xl lg:text-5xl font-bold text-primaryBlue mb-4">
            Hey, I'm Thomas!
          </h1>
          <p className="text-lg lg:text-xl text-darkGray">
            A full-stack{' '}
            <span className="text-primaryBlue font-semibold">developer</span>{' '}
            crafting dynamic, responsive, and{' '}
            <span className="text-primaryBlue font-semibold">user-focused</span>{' '}
            web applications.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <RouteButton 
              text="Check Out My Projects!" 
              route="/projects"
            />
          </div>
        </motion.div>

        {/* Right Image */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end w-full">
          <motion.img
            whileHover="heroHover"
            variants={effects}
            src="/avatar.png"
            alt="Thomas"
            className="rounded-lg max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;