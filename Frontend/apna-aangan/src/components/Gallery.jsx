import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GalleryComponent = ({ images }) => {
  const { index } = useParams();
  const [currentIndex, setCurrentIndex] = useState(parseInt(index, 10) || 0);

  useEffect(() => {
    setCurrentIndex(parseInt(index, 10) || 0);
  }, [index]);

  const prevImage = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const currentImage = images[currentIndex];

  return (
    <div>
      {currentImage ? (
        <div>
          <img src={currentImage} alt={`Image ${currentIndex}`} />
          <button onClick={prevImage} disabled={currentIndex === 0}>Previous</button>
          <button onClick={nextImage} disabled={currentIndex === images.length - 1}>Next</button>
        </div>
      ) : (
        <p>Image not found.</p>
      )}
    </div>
  );
};

export default GalleryComponent;
