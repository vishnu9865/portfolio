import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";
import { FaLinkedinIn, FaTwitter, FaGithub, FaDev, FaReact, FaFigma, FaNodeJs, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiAstro, SiFirebase, SiHashnode, SiMongodb, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';


export default function Home() {
  return (
    <>
      <main className="max-w-6xl px-16 mx-auto relative flex flex-col gap-[15rem] mb-[10rem] scroll-smooth">
        <AboutSection/>
        <SkillsSection/>
      </main>
    </>
  )
}
