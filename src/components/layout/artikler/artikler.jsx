"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';

const ArticleCard = ({ article, index }) => (
  <Card sx={{width: '100%' }} key={index}>
    <CardMedia
      component="img"
      height="140"
      image={article.image}
      alt={`Article image ${index + 1}`}
      sx={{ objectFit: 'cover' }} // Ensure proper image fit
    />
    <CardContent>
      <Typography variant="h6" component="div">
        {article.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {article.date}
      </Typography>
      <Typography variant="body2" color="text.primary" paragraph>
        {article.description}
      </Typography>
      <Button size="small" href={article.link}>
        Read More
      </Button>
    </CardContent>
  </Card>
);

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

  return (
    <div className="w-full p-0 m-0 lg:flex-row bg-white text-black">
      {/* Articles Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 shadow-2xl p-3 rounded-2xl w-full max-w-7xl mx-auto">
        {articles.map((article, index) => (
          <ArticleCard article={article} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ArticleCarousel;

