import React from 'react';
import background from '/Background.jpg';

const Background = ({ children }) => {

    return (
        <div className="relative w-screen h-screen overflow-y-scroll  ">

            {/* Background Image */}
            <div 
                className="fixed top-0 left-0 w-full h-full"
                style={{ 
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0
                }}
            />

            {/* Overlay to Dim the Image */}
            <div 
                className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
                style={{
                    zIndex: 1
                }}
            />

            {/* Content Container */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default Background;