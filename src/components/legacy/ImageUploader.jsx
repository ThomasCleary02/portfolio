import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onImageUpload }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setPreviewUrl(URL.createObjectURL(file));
    onImageUpload(file);
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    }
  });

  return (
    <div {...getRootProps()} className="border-4 border-dashed border-gray-300 rounded-lg p-6 text-center bg-white">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-gray-500">Drop the image here ...</p>
      ) : (
        <p className="text-gray-500">Drag and drop an image here, or click to select one</p>
      )}
      {previewUrl && <img src={previewUrl} alt="Preview" className="mt-4 w-full max-w-xs mx-auto rounded-lg shadow-md" />}
    </div>
  );
};

export default ImageUploader;