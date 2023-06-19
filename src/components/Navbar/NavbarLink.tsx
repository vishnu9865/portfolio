'use client'
import React from 'react'
import { motion } from 'framer-motion';

export default function NavbarLink( { sectionId }:{ sectionId:string }) {

  const LeftbracketMotion = {
    initial: { x:-5, opacity:0 },
    hover: { x:0, opacity:0.5 }
  }

  const RightbracketMotion = {
    initial: { x:5, opacity:0 },
    hover: { x:0, opacity:0.5 }
  }

  return (
    <>
      <motion.a 
        href={`#${sectionId.toLowerCase()}`} 
        className="text-[24px] group"
        initial="initial"
        whileHover="hover"
      >
        {/* <span className="opacity-0 group-hover:opacity-50 transition-all">[</span> */}
        <motion.span
          variants={LeftbracketMotion}
          className="inline-block"
        >
          [
        </motion.span>
        {sectionId}
        <motion.span
          variants={RightbracketMotion}
          className="inline-block"
        >
          ]
        </motion.span>
      </motion.a>
    </>
  )
}