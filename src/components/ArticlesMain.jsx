"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ArticleCard = ({ article, index }) => (
  <Card sx={{ width: '100%' }} key={index}>
    {/* Inner wrapper to control margin */}
    <div style={{ margin: '20px' }}>
      {/* Image with rounded corners */}
      <CardMedia
        component="img"
        height="140"
        image={article.image}
        alt={`Article image ${index + 1}`}
        sx={{ objectFit: 'cover', marginBottom: '20px', borderRadius: '10px' }} // Added borderRadius for rounded corners
      />
      {/* Title */}
      <Typography variant="h6" component="div" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
        {article.title}
      </Typography>
      {/* Date */}
      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
        {article.date}
      </Typography>
      {/* Description and arrow icon in the same line */}
      <div style={{ display: 'flex', gap: '20px'}}>
        <div className="paragraph">
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            flex: 1,
            marginBottom: '10px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {article.description}
        </Typography>
        </div>
        
        <div className="link" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>

        <ArrowForwardIcon
          sx={{
            cursor: 'pointer',
            color: 'gray',
            transition: 'color 0.3s',
            '&:hover': { color: 'black' }, // Hover effect
            marginLeft: 'auto', // Ensures the arrow is at the right end of the container
            fontSize: '36px', // Make it a bit larger
            transform: 'rotate(45deg)', // Rotate the arrow by 45 degrees
          }}
          onClick={() => window.location.href = article.link}
        />

        </div>
     
      </div>
    </div>
  </Card>
);

const ArticleCarousel = () => {
  const articles = [
    {
      title: 'Article Title 1',
      date: 'March 31, 2025',
      image: 'Inkubatoren-som-tar-deg-videre-300x169.png',
      description: 'This is a short introduction to the first article. It briefly describes what the article is about and invites the reader to explore more.',
      link: '#',
    },
    {
      title: 'Article Title 2',
      date: 'March 29, 2025',
      image: 'Inkubatoren-som-tar-deg-videre-300x169.png',
      description: 'This is a short introduction to the second article. It gives a preview of the content and highlights the main points.',
      link: '#',
    },
    {
      title: 'Article Title 3',
      date: 'March 25, 2025',
      image: 'Inkubatoren-som-tar-deg-videre-300x169.png',
      description: 'This is a short introduction to the third article. It outlines the key takeaways and gives the reader an idea of what they’ll learn.',
      link: '#',
    },
    {
      title: 'Article Title 4',
      date: 'March 24, 2025',
      image: 'Inkubatoren-som-tar-deg-videre-300x169.png',
      description: 'This is a short introduction to the fourth article. It provides insights on a new trend in technology.',
      link: '#',
    },
    {
      title: 'Article Title 5',
      date: 'March 22, 2025',
      image: 'Inkubatoren-som-tar-deg-videre-300x169.png',
      description: 'This article discusses the importance of presentation skills in the modern workplace and provides some useful tips.',
      link: '#',
    },
  ];

  return (
    <div className="w-full p-0 m-0 lg:flex-row bg-white text-black">
      <h1 className="text-4xl text-center mb-8">Artikler</h1> {/* Centered header */}
      {/* Articles Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <ArticleCard article={article} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ArticleCarousel;