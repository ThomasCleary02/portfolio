import React from 'react';

const ColorDisplay = ({ colors }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Analyzed Colors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {colors.map((color, index) => (
          <div key={index} className="text-center">
            <div
              className="w-24 h-24 mx-auto rounded-full border-2 border-gray-300"
              style={{ backgroundColor: color.hex }}
            ></div>
            <p className="mt-2 text-gray-700 font-medium">{color.hex}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorDisplay;