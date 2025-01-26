import React from 'react';
import Hero from '../components/Hero';
import AboutMeSection from '../components/AboutMe';
import CTASec from '../components/CallToAction';


const HomePage = () => {
    return (
        <div>
            <Hero />
            <AboutMeSection />
            <CTASec />
        </div>
    );
};

export default HomePage;