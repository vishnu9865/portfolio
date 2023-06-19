import React from 'react'
import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaGithub, FaDev } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'
import ThemeSwitcher from '../ThemeSwitcher'
import NavbarLink from './NavbarLink'

const navbarLinks = [
  { link: 'About' },
  { link: 'Skills'},
  { link: 'Projects'}
];

const sidebarLinks = [
  {
    link: "https://www.linkedin.com/in/vishnu9865",
    icon: <FaLinkedinIn />
  },
  {
    link: "https://www.twitter.com/Jvishnu9865",
    icon: <FaTwitter />
  },
  {
    link: "https://www.github.com/vishnu9865",
    icon: <FaGithub />
  },
  {
    link: "https://hashnode.com/@vishnu9865",
    icon: <SiHashnode/>
  },
  {
    link: "https://dev.to/vishnu9865",
    icon: <FaDev />
  },
  
];

export default function Navbar() {
  return (
    <>
      {/* header - container with full width */}
      <header className="w-full bg-bg-light/80 dark:bg-bg-dark/80 transition-all sticky top-0 left-0 z-[999] backdrop-blur-md scroll-smooth">
        {/* Navbar with 1152px tot. width and 1024 content width */}
        <nav className="relative flex flex-row justify-between item-center max-w-6xl px-16 py-12 mx-auto">
          {/* Navbar brand/website name */}
          <div className="text-3xl tracking-[-0.1em]">|Jeyavishnu</div>
          {/* Navbar links with theme switcher */}
          <div className="flex flex-row items-center gap-9">
            {/* Navbar links */}
            {/* Note: Used <a> tag instead of next/link element because somehow css smooth scroll property is not having an effect */}
            {navbarLinks.map((linkObj, index) => (
              <NavbarLink
                key={index}
                sectionId={linkObj.link}
              />
            ))}
            {/* Theme Switcher */}
            <ThemeSwitcher/>
          </div>
          {/* Social media column */}
          <div className="absolute top-[250px] right-[64px] flex flex-col gap-9 text-[41px]">
            {sidebarLinks.map((obj, index) => (
              <Link 
                key={index} 
                href={obj.link}
                target='_blank'
                className="hover:scale-125 transition-all active:scale-100"
              >
                {obj.icon}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}
