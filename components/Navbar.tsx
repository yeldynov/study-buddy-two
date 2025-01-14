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
      className='font-jura fixed top-0 left-0 right-0 z-50 bg-navbarbg'
    >
      <div className='mx-auto'>
        <motion.nav
          initial='hidden'
          animate='visible'
          className='lg:flex items-center px-12 py-3 hidden justify-between lg:gap-10'
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
            <Button className='uppercase button-bg text-22-semibold hover:brightness-150'>
              Записатися
            </Button>
          </motion.div>
        </motion.nav>
        {/* Mobile */}
        <motion.div className='block mx-5 py-5 lg:hidden'>
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
              <SheetContent className='overflow-y-auto bg-navbarbg text-white z-50'>
                <SheetHeader>
                  <SheetTitle>
                    <div className='flex items-center gap-2'>
                      <img src='logo.png' className='w-20' alt='logo' />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <motion.div
                  className='flex flex-col z-20 gap-4 mt-8 mb-8'
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
                  <Button className='uppercase font-jura mt-20 button-bg text-22-semibold hover:brightness-150'>
                    Записатися
                  </Button>
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
