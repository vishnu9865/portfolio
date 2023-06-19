import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import { ThemeContextProvider } from '@/context/ThemeContext'
import Navbar from '@/components/Navbar'

const JBMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Jeyavishnu',
  description: 'Welcome to Jeyavishnu\'s Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth scroll-m-48'>
      <body className={`${JBMono.className} w-full text-light-text dark:text-dark-text bg-bg-light dark:bg-bg-dark transition-all scroll-smooth overflow-x-hidden`}>
        {/* Context for theme switcher component */}
        <ThemeContextProvider>
          <Navbar/>
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  )
}
