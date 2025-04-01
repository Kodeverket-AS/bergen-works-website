import { createContext, useContext, useEffect, useState } from "react";
import { client } from "./sanity/lib/client";

const SanityContext = createContext();

const SanityProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       const query = `
  *[_type == "document"]{
    _id,
    title,
    articleBody,
    background { asset -> { url } },
    releaseDate,
    author,
    cathegory,
    tags,
    images[]{
      "url": image.asset->url,
      alt,
      "slug": slug.current
    }
  }
`;

        const data = await client.fetch(query);
        setArticles(data);
      } catch (error) {
        console.error("Data failed to load:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, ); 

  return (
    <SanityContext.Provider value={{ articles, loading }}>
      {children}
    </SanityContext.Provider>
  );
};

const useSanity = () => useContext(SanityContext);

export { SanityProvider, useSanity };
