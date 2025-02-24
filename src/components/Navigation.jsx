import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { effects } from '../styles/animationVariants.js';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Add new state to track whether we've scrolled
  const [hasScrolled, setHasScrolled] = useState(false);

  // Add useEffect hook to handle scroll events
  useEffect(() => {
    // Function to check scroll position and update state
    const handleScroll = () => {
      // Check if we've scrolled down at all (window.scrollY > 0)
      setHasScrolled(window.scrollY > 0);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Important: Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <nav 
      // Dynamically apply shadow classes based on scroll position
      className={`bg-backgroundLight w-full fixed top-0 z-50 transition-shadow duration-300 ${
        hasScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto max-w-6xl py-2 px-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.svg width="55" height="55" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" variants={effects} whileHover="iconHover">
              <path d="M34.567 5.75C34.7594 5.41667 35.2406 5.41666 35.433 5.75L60.5478 49.25C60.7402 49.5833 60.4996 50 60.1147 50H9.88526C9.50037 50 9.2598 49.5833 9.45225 49.25L34.567 5.75Z" stroke="#0348A5" stroke-width="5"/>
              <path d="M30.3906 29.625V41H29.4375V29.625H30.3906ZM34.2891 29.625V30.4531H25.5469V29.625H34.2891ZM43.0078 37.4531H43.9688C43.8906 38.2188 43.6797 38.8802 43.3359 39.4375C42.9922 39.9896 42.5234 40.4141 41.9297 40.7109C41.3359 41.0078 40.6198 41.1562 39.7812 41.1562C39.1354 41.1562 38.5495 41.0339 38.0234 40.7891C37.5026 40.5443 37.0547 40.1979 36.6797 39.75C36.3047 39.2969 36.0156 38.7552 35.8125 38.125C35.6094 37.4948 35.5078 36.7943 35.5078 36.0234V34.6016C35.5078 33.8307 35.6094 33.1328 35.8125 32.5078C36.0156 31.8776 36.3073 31.3359 36.6875 30.8828C37.0677 30.4297 37.5234 30.0807 38.0547 29.8359C38.5859 29.5911 39.1849 29.4688 39.8516 29.4688C40.6589 29.4688 41.3568 29.6172 41.9453 29.9141C42.5339 30.2057 42.9974 30.6276 43.3359 31.1797C43.6797 31.7318 43.8906 32.3984 43.9688 33.1797H43.0078C42.9349 32.5651 42.7734 32.0443 42.5234 31.6172C42.2734 31.1901 41.9271 30.8646 41.4844 30.6406C41.0469 30.4115 40.5026 30.2969 39.8516 30.2969C39.3203 30.2969 38.8464 30.3984 38.4297 30.6016C38.013 30.8047 37.6589 31.0964 37.3672 31.4766C37.0755 31.8516 36.8516 32.3021 36.6953 32.8281C36.5443 33.3542 36.4688 33.9401 36.4688 34.5859V36.0234C36.4688 36.6484 36.5417 37.224 36.6875 37.75C36.8333 38.276 37.0469 38.7318 37.3281 39.1172C37.6146 39.5026 37.9635 39.8021 38.375 40.0156C38.7865 40.2292 39.2552 40.3359 39.7812 40.3359C40.4531 40.3359 41.013 40.2292 41.4609 40.0156C41.9141 39.7969 42.2656 39.474 42.5156 39.0469C42.7656 38.6198 42.9297 38.0885 43.0078 37.4531Z" fill="#0348A5"/>
            </motion.svg>
          </Link>

          <div className="relative">
            <motion.button
              variants={effects}
              whileHover="iconHover"
              className="p-2 rounded-md"
              aria-label="Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={40} strokeWidth={3} className="text-primaryBlue" />
            </motion.button>

            <div 
              className={`absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-opacity duration-150 ${
                isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onMouseLeave={() => setIsOpen(false)}
            >
              <Link 
                to="/" 
                className="block px-4 py-2 text-darkGray hover:bg-gray-100 hover:text-primaryBlue"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className="block px-4 py-2 text-darkGray hover:bg-gray-100 hover:text-primaryBlue"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/blog" 
                className="block px-4 py-2 text-darkGray hover:bg-gray-100 hover:text-primaryBlue"
                onClick={() => setIsOpen(false)}
              >
                Blog Posts
              </Link>
              <Link 
                to="/resume" 
                className="block px-4 py-2 text-darkGray hover:bg-gray-100 hover:text-primaryBlue"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;