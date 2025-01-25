import React from 'react';

const Hero = () => {
  return (
    <section className="bg-backgroundLight h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-20">
        {/* Left Content */}
        <div className="lg:w-2/3 text-center lg:text-left px-20 py-20">
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
        </div>

        {/* Right Image */}
        <div className="lg:w-1/3 px-20 py-20">
          <img
            src="/avatar.png"
            alt="Thomas"
            className="rounded-lg max-w-full ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
