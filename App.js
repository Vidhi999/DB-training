import React, { useState } from 'react';
import ImageUploadForm from './ImageUploadForm';
import ImageGrid from './ImageGrid';

const App = () => {
  const [images, setImages] = useState([]);

  const addImage = (image) => {
    setImages([...images, image]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="App">
      <ImageUploadForm onAddImage={addImage} />
      <ImageGrid images={images} onRemoveImage={removeImage} />
    </div>
  );
};

export default App;
