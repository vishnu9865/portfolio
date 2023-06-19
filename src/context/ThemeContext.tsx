'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';

// Interface for Theme Context
const ThemeContext = createContext({
  theme: 'dark',
  toggleThemeHandler: () => {}
});
export default ThemeContext;

// Customized wrapper component with theme information with default react provider
export function ThemeContextProvider( { children }:{ children:ReactNode } ) {
  // State to hold theme data
  const [ theme, setTheme] = useState('dark');

  useEffect(() => initialTheme(),[])

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement?.classList.toggle('dark');
    localStorage.setItem('theme', theme === 'dark'?`dark`:`light`);
  }, [theme])

  function initialTheme() {
    const getLocalPref = localStorage.getItem('theme');
    const getOSPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if( getLocalPref === null) {
      setTheme(getOSPref?'dark':'light');
      localStorage.setItem('theme', getOSPref?`dark`:`light`);
    } else 
      setTheme(getLocalPref);
  }

  function toggleThemeHandler() {
    setTheme( theme === 'dark' ? 'light': 'dark');
  }
  // return a wrapper component
  return (
    <ThemeContext.Provider value={{ theme:theme, toggleThemeHandler }}>
      { children }
    </ThemeContext.Provider>
  );
}