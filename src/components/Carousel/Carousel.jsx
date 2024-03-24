import React, { useState, useEffect } from 'react';
import './Carousel.scss';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides]);

  const moveToSelected = (direction) => {
    let newIndex = currentIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % slides.length;
    } else if (direction === 'prev') {
      newIndex = (currentIndex - 1 + slides.length) % slides.length;
    }
    setCurrentIndex(newIndex);
  };

  const getSlideClassName = (index) => {
    if (index === currentIndex) return 'selected';
    if (index === (currentIndex - 1 + slides.length) % slides.length) return 'prev';
    if (index === (currentIndex + 1) % slides.length) return 'next';
    return 'inactive';
  };

  const handleSlideClick = (index) => {
    setCurrentIndex(index);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft') {
      moveToSelected('prev');
    } else if (e.key === 'ArrowRight') {
      moveToSelected('next');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <main className="carousel-container">
      <div className="gradientBRD"></div>
      <div id="carousel">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${getSlideClassName(index)}`}>
            <a
              onClick={() => handleSlideClick(index)}
              href="#/"
            >
              <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
              <div className="footnote">
                <h3>{slide.title}</h3>
              </div>
            </a>
          </div>
        ))}
        <div className="indicator">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleSlideClick(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="gradientBRD"></div>
      <div className="buttons">
        <button id="prev" className="arrow left" onClick={() => moveToSelected('prev')}>
          {"<"}
        </button>
        <button id="next" className="arrow right" onClick={() => moveToSelected('next')}>
          {">"}
        </button>
      </div>
    </main>
  );
};

export default Carousel;
