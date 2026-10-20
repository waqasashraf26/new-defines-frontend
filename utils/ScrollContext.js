// ScrollContext.js
'use client'
import React, { createContext, useContext } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={scrollToSection}>
      {children}
    </ScrollContext.Provider>
  );
};
