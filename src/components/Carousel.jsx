import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1711645372528-cddb2c6eb565?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1710607292812-b45077aba7f1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682687982502-b05f0565753a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1711635101367-0d70297e9645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 10000); // Auto scroll every 10 seconds
    return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
  }, []); // Runs only once on component mount

  return (
    <div className="relative p-5 rounded-md">
      <div className="overflow-hidden w-full min-h-[600px] max-h-[500px]">
        <div className="flex transition-transform duration-500 ease-in-out transform">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`flex-shrink-0 w-full rounded-md ${index === currentIndex ? 'block' : 'hidden'}`}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full z-10"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
