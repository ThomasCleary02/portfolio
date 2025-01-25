import React from 'react';

const Hero = () => {
  return (
    <section className="bg-backgroundLight h-screen flex items-center justify-center px-20">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-12">
      {/* Left Content */}
        <div className="lg:w-2/3 text-left lg:text-left">
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
        <div className="lg:w-1/3 flex">
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
