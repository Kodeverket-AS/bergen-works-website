"use client"; 

import { useState, useEffect } from 'react';

const ArticleCarousel = () => {
  const articles = [
    {
      title: 'Article Title 1',
      date: 'March 31, 2025',
      image: 'image1.jpg',
      description: 'This is a short introduction to the first article. It briefly describes what the article is about and invites the reader to explore more.',
      link: '#',
    },
    {
      title: 'Article Title 2',
      date: 'March 29, 2025',
      image: 'image2.jpg',
      description: 'This is a short introduction to the second article. It gives a preview of the content and highlights the main points.',
      link: '#',
    },
    {
      title: 'Article Title 3',
      date: 'March 25, 2025',
      image: 'image3.jpg',
      description: 'This is a short introduction to the third article. It outlines the key takeaways and gives the reader an idea of what they’ll learn.',
      link: '#',
    },
    {
      title: 'Article Title 4',
      date: 'March 24, 2025',
      image: 'image4.jpg',
      description: 'This is a short introduction to the fourth article. It provides insights on a new trend in technology.',
      link: '#',
    },
    {
      title: 'Article Title 5',
      date: 'March 22, 2025',
      image: 'image5.jpg',
      description: 'This article discusses the importance of presentation skills in the modern workplace and provides some useful tips.',
      link: '#',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCarousel = () => {
    const offset = -(currentIndex * (100 / 3)); // Move by 1/3 for each click
    return offset;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  useEffect(() => {
    // Ensure to update on index change.
    updateCarousel();
  }, [currentIndex]);

  return (
    <div className="flex flex-col gap-3 p-10 m-3 lg:flex-row bg-white text-black">
      {/* Control Panel Section */}
      <div className="shadow-2xl rounded-2xl p-3">
        <h1 className="text-4xl">Articles</h1>
        <p className="text-2xl">Our latest news and articles</p>

        {/* Control Buttons inside Control Panel */}
        <div className="button-container flex justify-between mt-4">
          <button
            id="prevButton"
            className="carousel-button p-2 bg-blue-500 text-white rounded hover:bg-blue-400"
            aria-label="Previous article"
            onClick={handlePrev}
          >
            ←
          </button>
          <button
            id="nextButton"
            className="carousel-button p-2 bg-blue-500 text-white rounded hover:bg-blue-400"
            aria-label="Next article"
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex flex-1 items-center">
        <div className="carousel-container relative overflow-hidden w-full">
          {/* Carousel Wrapper */}
          <div
            id="carousel"
            className="carousel-wrapper flex space-x-4 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${updateCarousel()}%)` }}
          >
            {/* Dynamically generate carousel items */}
            {articles.map((article, index) => (
              <div
                key={index}
                className={`carousel-item p-6 bg-white rounded-xl shadow-lg flex-shrink-0 w-[calc(33.3333%-1rem)] ${
                  index === currentIndex ? 'border-3 border-blue-500 shadow-lg' : ''
                }`}
              >
                <img
                  src={article.image}
                  alt={`Article image ${index + 1}`}
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{article.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{article.date}</p>
                <p className="text-gray-700">{article.description}</p>
                <a href={article.link} className="text-blue-600 mt-4 inline-block hover:underline">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCarousel;

