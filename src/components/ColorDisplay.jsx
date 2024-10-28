import React from 'react';

function ColorDisplay({ results, confidence }) {
  if (!results || results.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Detected Items and Colors
        <span className={`ml-2 text-sm ${confidence === 'high' ? 'text-green-500' : 'text-yellow-500'}`}>
          ({confidence} confidence)
        </span>
      </h2>
      <div className="space-y-6">
        {results.map((result, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-700 mb-3">{result.item}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {result.color.map((color, colorIndex) => (
                <div key={colorIndex} className="flex flex-col items-center">
                  <div 
                    className="w-20 h-20 rounded-lg shadow-md border border-gray-200" 
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="mt-2 text-sm font-mono text-gray-600">{color.hex}</p>
                  <p className="text-xs text-gray-500">
                    RGB: ({color.rgb.join(', ')})
                  </p>
                  {color.percentage && (
                    <p className="text-xs text-gray-400">{color.percentage.toFixed(1)}%</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorDisplay;