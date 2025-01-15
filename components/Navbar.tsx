'use client'

import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import { Button, buttonVariants } from '@/components/ui/button'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'

// Links array
const links = [
  { label: 'Про школу', href: '#about' },
  { label: 'Чому ми', href: '#why-us' },
  { label: 'Курси', href: '#courses' },
  { label: 'Відгуки', href: '#testimonials' },
  { label: 'Викладачі', href: '#teachers' },
]

const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleLinkClick = () => {
    setIsSidebarOpen(false) // Close the sidebar
  }

  return (
    <motion.section
      initial='hidden'
      animate='visible'
      variants={navbarVariants}
      className='fixed top-0 left-0 right-0 z-50 font-jura bg-navbarbg'
    >
      <div className='mx-auto'>
        <motion.nav
          initial='hidden'
          animate='visible'
          className='items-center justify-between hidden px-12 py-3 lg:flex lg:gap-10'
        >
          <motion.div
            variants={navbarVariants}
            className='flex items-center gap-2'
          >
            <img src='logo.png' className='w-full' alt='logo' />
          </motion.div>

          <motion.div
            className='flex items-center justify-center flex-1 gap-6'
            initial='hidden'
            animate='visible'
          >
            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                custom={i}
                variants={linkVariants}
                className={cn(
                  ' hover:text-primary px-4 text-26-semibold',
                  navigationMenuTriggerStyle
                )}
                href={href}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>

          <motion.div className='flex gap-2'>
            <Link href='#contact'>
              <Button size='lg' variant='sbMain'>
                ЗАПИСАТИСЯ
              </Button>
            </Link>
          </motion.div>
        </motion.nav>
        {/* Mobile */}
        <motion.div className='block py-5 mx-5 lg:hidden'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img src='logo.png' className='w-full' alt='logo' />
            </div>
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button
                  className='p-2 border-none'
                  variant='outline'
                  size='icon'
                  onClick={() => setIsSidebarOpen(true)} // Open the sidebar
                >
                  <Menu className='w-8 h-8' />
                </Button>
              </SheetTrigger>
              <SheetContent className='z-50 overflow-y-auto text-white bg-navbarbg'>
                <SheetHeader>
                  <SheetTitle>
                    <div className='flex items-center gap-2'>
                      <img src='logo.png' className='w-20' alt='logo' />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <motion.div
                  className='z-20 flex flex-col gap-4 mt-8 mb-8'
                  initial='hidden'
                  animate='visible'
                >
                  {links.map(({ label, href }, i) => (
                    <motion.a
                      key={label}
                      custom={i}
                      href={href}
                      className='text-medium hover:text-primary text-[26px] font-jura'
                      onClick={handleLinkClick}
                    >
                      {label}
                    </motion.a>
                  ))}
                  <Button variant='sbMain'>Записатися</Button>
                </motion.div>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Navbar
