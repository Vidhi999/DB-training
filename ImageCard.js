import React from 'react';

const ImageCard = ({ image, index, onRemoveImage }) => {
  const handleRemove = () => {
    onRemoveImage(index);
  };

  return (
    <div className="image-card">
      <img src={image.url} alt={image.description} />
      <p>{image.description}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default ImageCard;
