import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import ColorDisplay from '../components/ColorDisplay';

function ColorAnalyzerPage() {
  const [analyzerResults, setAnalyzerResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (file) => {
    setIsLoading(true);
    setError(null);
    setAnalyzerResults(null);
  
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('https://kkxfxeneah.execute-api.us-east-1.amazonaws.com/default/analyze-image', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.status === "success" && data.results) {
        setAnalyzerResults({
          results: data.results,
          confidence: data.confidence
        });
      } else if (data.status === "Failed") {
        throw new Error("No colors detected in the image");
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (e) {
      console.error("Error analyzing image:", e);
      setError(e.message || "Failed to analyze the image. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Color Analyzer</h1>
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-xl">
        <ImageUploader onImageUpload={handleImageUpload} />
        
        {isLoading && (
          <div className="mt-4">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
            <p className="text-center text-gray-600 mt-2">Analyzing image...</p>
          </div>
        )}
        
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        {analyzerResults && !isLoading && (
          <ColorDisplay 
            results={analyzerResults.results}
            confidence={analyzerResults.confidence}
          />
        )}
      </div>
    </div>
  );
}

export default ColorAnalyzerPage;