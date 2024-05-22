import React from 'react';

const Hero = ({ aboutMeRef }) => {

  const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="text-center">

        <h1 className="text-6xl font-bold mb-4">Hey, I'm Thomas Cleary!</h1>
        <p className="text-lg mb-8">A passionate developer ready to make an impact.</p>
        <button onClick={scrollToAboutMe} className="bg-white text-black py-2 px-4 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300">Learn More About Me</button>
      </div>
    </div>

  );
};

export default Hero;