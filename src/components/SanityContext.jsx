"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";

const SanityContext = createContext();

const SanityProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type == "article"]{ 
            _id, 
            title, 
           articleBody[]{
      ...,
      _type == "image" => {
        asset -> { url },
        alt
      }
    },
            background { asset -> { url } }, 
            releaseDate, 
            author, 
            category, 
            tags, 
            images[]{
      asset -> { url },
      alt
    }
          }
        `;

        const data = await client.fetch(query);
        setArticles(data);
      } catch (error) {
        console.error("Feil:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SanityContext.Provider value={{ articles, loading }}>
      {children}
    </SanityContext.Provider>
  );
};

const useSanity = () => useContext(SanityContext);

export { SanityProvider, useSanity };
