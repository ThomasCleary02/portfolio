import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { effects } from '../styles/animationVariants.js'

const RouteButton = ({ 
  text, 
  route, 
  className = '', 
  onClick 
}) => {
  // Use React Router's navigation hook
  const navigate = useNavigate();

  // Handle button click - either custom onClick or navigate
  const handleClick = (e) => {
    // If custom onClick is provided, call it first
    if (onClick) {
      onClick(e);
    }
    
    // Then navigate to the specified route
    if (route) {
      navigate(route);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      variants={effects}
      whileHover="buttonHover"
      className={`
        px-4 py-2
        font-bold
        rounded-xl
        bg-lightBlue 
        text-white 
        border 
        hover:bg-primaryBlue 
        hover:shadow-md
        focus:outline-none 
        ${className}
      `}
    >
      {text}
    </motion.button>
  );
};

export default RouteButton;