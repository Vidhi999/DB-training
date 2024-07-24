import React, { useState } from 'react';

const ImageUploadForm = ({ onAddImage }) => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !description) return;
    
    const reader = new FileReader();
    reader.onload = () => {
      const image = {
        url: reader.result,
        description: description
      };
      onAddImage(image);
      setFile(null);
      setDescription('');
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <input type="text" placeholder="Description" value={description} onChange={handleDescriptionChange} />
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default ImageUploadForm;
