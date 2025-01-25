import React from 'react';

const AboutMeSection = () => {
  return (
    <section className="bg-backgroundLight min-h-screen flex items-center justify-center px-20">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-12">
        {/* Right Image */}
        <div className="lg:w-1/3 flex">
          <img
            src="/Vector 1.png"
            alt="Thomas"
            className="rounded-lg max-w-full mlauto"
          />
        </div>

        {/* Left Content */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl lg:text-5xl font-bold text-primaryBlue mb-6">
            About Me
          </h1>
          <p className="text-lg lg:text-xl text-darkGray leading-relaxed">
            I'm Thomas Cleary, a student at Shepherd University studying
            Computer and Information Technology. I'm passionate about web
            development and proficient in HTML, CSS, JavaScript, and Python. I
            have experience with both relational and nonrelational databases,
            including MongoDB and MySQL. I'm familiar with tools like Figma, VS
            Code, and Postman, and have some exposure to Amazon Web Services.
            Let's collaborate and bring ideas to life with React and Django!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;