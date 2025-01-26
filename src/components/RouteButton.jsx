import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    <button
      onClick={handleClick}
      className={`
        px-4 py-2
        font-bold
        rounded-xl
        bg-lightBlue 
        text-white 
        transition-all 
        duration-300 
        border 
        border-lightBlue
        hover:bg-transparent 
        hover:text-lightBlue 
        focus:outline-none 
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default RouteButton;