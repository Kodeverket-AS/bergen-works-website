"use client";
import { createContext, useContext, useState } from "react";

const SanityContext = createContext();

export const SanityProvider = ({ children, articles, events }) => {
  const [loading] = useState(false);

  return (
    <SanityContext.Provider value={{ articles, events, loading }}>
      {children}
    </SanityContext.Provider>
  );
};

export const useSanity = () => useContext(SanityContext);
