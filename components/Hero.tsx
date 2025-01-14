'use client'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section className='bg-[url("/bg-hero.png")] lg:min-h-[1024px] min-h-screen bg-[right_27%_top] bg-cover bg-no-repeat'>
      <Navbar />
      <div className='container pt-20 flex flex-col items-center'>
        <div className='w-full '>
          <motion.div className='flex flex-col'>
            <div className='container justify-between flex flex-col items-center px-4 pb-10 pt-5 lg:pt-16 lg:mx-auto lg:items-start lg:px-[4rem] lg:text-left'>
              <motion.h1
                className='heading'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Study Buddy
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className='sub-heading font-bold -mt-5 lg:mt-20'
              >
                english center<span className='blink'>_</span>
              </motion.h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
