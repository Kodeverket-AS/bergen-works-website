"use client";
import { createContext, useContext, useState } from "react";

const SanityContext = createContext();

export const SanityProvider = ({ children, articles }) => {
  const [loading] = useState(false);

  return (
    <SanityContext.Provider value={{ articles, loading }}>
      {children}
    </SanityContext.Provider>
  );
};

export const useSanity = () => useContext(SanityContext);
