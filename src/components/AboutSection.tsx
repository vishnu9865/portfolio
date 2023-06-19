import React from 'react'
import BgHeading from './BgHeading';

export default function AboutSection() {
  return (
    <>
      {/* Hero section */}
      <section id="about" className="scroll-m-48">
        <BgHeading content="About"/>
        {/* Hero Text Container */}
        <div className="mt-[-6%] flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <p className="text-[48px] tracking-[-0.1em] leading-[0.75]">Hi I&apos;m</p>
            <h2 className="text-[128px] font-medium tracking-[-0.1em] leading-none text-dark-text/0 bg-gradient-to-b from-light-text/60 dark:from-dark-text to-light-text dark:to-dark-text/60 bg-clip-text">Jeyavishnu</h2>
            <h3 className="text-[48px] tracking-[-0.1em]">Full Stack Developer</h3>
          </div>
          <div className="text-[32px] leading-[1.63] text-justify max-w-[710px]">
            &#123;/* A passionate and driven developer working towards Good Quality Code and Products. An Open Source Enthusiast skilled in ReactJS/Next, AstroJS, MongoDB, Firebase. */&#125;
          </div>
        </div>
      </section>
    </>
  )
}
