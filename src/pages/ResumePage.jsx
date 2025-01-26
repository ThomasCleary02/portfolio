import React from 'react';

const ResumePage = () => {
  return (
    <div className="bg-backgroundLight container mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-3xl lg:text-4xl font-bold text-primaryBlue mb-4">
        Resume
      </h1>
      <p className="text-lg lg:text-xl text-darkGray mb-8">
        Professional experience and qualifications
      </p>
      
      <iframe 
        src="/resume.pdf" 
        width="100%" 
        height="800px" 
        title="Resume"
        className="border rounded-lg shadow-lg"
        allowFullScreen
        webkitallowfullscreen
        style={{
          maxWidth: '100%',
          maxHeight: '100vh',
          overflow: 'auto'
        }}
      />
    </div>
  );
};

export default ResumePage;