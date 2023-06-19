import React from 'react'
import { FaReact, FaFigma, FaNodeJs, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiAstro, SiVisualstudiocode, SiTailwindcss, SiFirebase, SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import BgHeading from './BgHeading';

const skills = [
  {
    skill: 'ReactJS',
    icon: <FaReact/>
  },
  {
    skill: 'NextJS',
    icon: <TbBrandNextjs/>
  },
  {
    skill: 'Astro',
    icon: <SiAstro/>
  },
  {
    skill: 'VSCode',
    icon: <SiVisualstudiocode/>
  },
  {
    skill: 'Tailwind',
    icon: <SiTailwindcss/>
  },
  {
    skill: 'Figma',
    icon: <FaFigma />
  },
  {
    skill: 'NodeJS',
    icon: <FaNodeJs/>
  },
  {
    skill: 'Core Java',
    icon: <FaJava/>
  },
  {
    skill: 'Firebase',
    icon: <SiFirebase/>
  },
  {
    skill: 'MongoDB',
    icon: <SiMongodb/>
  },
  {
    skill: 'Bootstrap',
    icon: <FaBootstrap/>
  }
];


export default function SkillsSection() {
  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="scroll-m-48">
        {/* Skills bg Section */}
        <BgHeading content="Skills"/>
        {/* Hero Text Container */}
        <div className="mt-[-6%] flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            {/* <p className="text-[48px] tracking-[-0.1em] leading-[0.75]">Hi I&apos;m</p> */}
            <h2 className="text-[128px] font-medium tracking-[-0.1em] leading-none text-dark-text/0 bg-gradient-to-b from-light-text/60 dark:from-dark-text to-light-text dark:to-dark-text/60 bg-clip-text">
              My Skills
            </h2>
          </div>
          <div className="text-[32px] leading-[1.63] text-justify max-w-[710px]">
            <div className="grid grid-cols-2 gap-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="w-fit flex flex-row justify-center items-center gap-4">
                  {skill.icon}
                  <p>{skill.skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
