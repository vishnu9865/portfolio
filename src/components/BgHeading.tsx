'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BgHeading( { content }:{ content:string } ) {

  return (
    <>
      <motion.h1
        className="text-dark-text/0 leading-[0.75] font-medium text-[256px] tracking-[-0.10em] bg-gradient-to-b from-light-text/5 dark:from-dark-text/10 to-light-text/10 dark:to-dark-text/5 bg-clip-text"
        initial={{ opacity:0, x:-100 }}
        whileInView={{ opacity:[0,100,100] , x:0 }}
        viewport={{ once:true }}
        transition={{ type:'tween', duration:'2.5', ease:'easeInOut' }}
      >
        {content}
      </motion.h1>
    </>
  )
}
