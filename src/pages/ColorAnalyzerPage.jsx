import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import ColorDisplay from '../components/ColorDisplay';

function ColorAnalyzerPage() {
  const [analyzedColors, setAnalyzedColors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (file) => {
    setIsLoading(true);
    setError(null);
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('isBase64Encoded', 'false');
  
    try {
      const response = await fetch('https://kkxfxeneah.execute-api.us-east-1.amazonaws.com/default/analyze_image', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.color1 && data.color2 && data.color3) {
        setAnalyzedColors([
          { hex: data.color1.color.hex },
          { hex: data.color2.color.hex },
          { hex: data.color3.color.hex },
        ]);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (e) {
      console.error("There was a problem with the fetch operation: " + e.message);
      setError("Failed to analyze the image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8">Color Analyzer</h1>
      <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg">
        <ImageUploader onImageUpload={handleImageUpload} />
        {isLoading && <p className="mt-4 text-center text-gray-600">Analyzing image...</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        {analyzedColors.length > 0 && <ColorDisplay colors={analyzedColors} />}
      </div>
    </div>
  );
}

export default ColorAnalyzerPage;