'use client';
import React, { useState, useEffect } from 'react';
import {tiles} from './Medlemskap_iconer-tiles'

const tilesOrder = (tiles, columns) => {
  if (columns === 4) return tiles; 
  if (columns === 3) return [tiles[0], tiles[1], tiles[2], tiles[3], tiles[5], tiles[4], tiles[7], tiles[6]];
  if (columns === 2) return [tiles[0], tiles[1], tiles[3], tiles[2], tiles[5], tiles[4], tiles[6], tiles[7]];
  return tiles;
};

const Medlemskap_iconer = () => {
  
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(2); 
      else if (window.innerWidth < 1024) setColumns(3); 
      else setColumns(4); 
    };
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const orderedTiles = tilesOrder(tiles, columns);

  return (
    <section className="w-full px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {orderedTiles.map((tile, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center ${tile.bg} ${tile.textColor} rounded-2xl p-4 shadow-md transition-all`}
          >
            <img
              className="h-20 w-20 object-contain"
              src={tile.src}
              alt={tile.text}
            />
            <p className="text-center text-lg md:text-xl mt-2">{tile.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Medlemskap_iconer;