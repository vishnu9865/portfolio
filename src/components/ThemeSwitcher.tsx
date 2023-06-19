'use client'
import React, { useContext, useEffect } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import ThemeContext from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeSwitcher() {
  const themeContext = useContext(ThemeContext);

  function toggleTheme():void {
    themeContext.toggleThemeHandler();
  }

  return (
    <>
      <motion.button
        type="button"
        className="flex items-center justify-center"
        onClick={toggleTheme}
        whileHover={{ rotate: 25 }}
        whileTap={{ scale: 0.90 }}
      >
        {themeContext.theme === 'dark'? <MdOutlineLightMode className='text-[42px]'/> : <MdOutlineDarkMode className='text-[42px]'/>}
      </motion.button>
    </>
  )
}
