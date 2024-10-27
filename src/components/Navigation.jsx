// components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <Link 
              to="/" 
              className="flex items-center py-4 px-2 text-gray-700 hover:text-blue-500"
            >
              Home
            </Link>
            <Link 
              to="/color-analyzer" 
              className="flex items-center py-4 px-2 text-gray-700 hover:text-blue-500"
            >
              Color Analyzer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;