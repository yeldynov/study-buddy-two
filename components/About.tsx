import React from 'react'
import Image from 'next/image'
import { ScrollArea } from './ui/scroll-area'

const About = () => {
  return (
    <section
      id='about'
      className="relative bg-[url('/bg-about.png')] overflow-hidden lg:p-16 bg-cover bg-no-repeat bg-blend-overlay"
    >
      <div
        style={{
          background: `radial-gradient(circle, rgba(248, 98, 214, 0.5) 30%, rgba(87, 54, 130, 0.2) 70%, rgba(87, 54, 130, 0) 100%)`,
          width: '535px',
          height: '800px',
          filter: 'blur(50px)',
        }}
        className='absolute top-[227px] -left-[100px]'
      ></div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row min-h-screen'>
          {/* Left Column - 40% on desktop */}
          <div className='w-full lg:w-[40%] p-6 flex flex-col'>
            <div className='relative w-full mb-6'>
              <Image
                src='/viktoria-teacher.png'
                alt='Cyberpunk portrait'
                width={500}
                height={750}
                className='object-cover'
                priority
              />
            </div>
            <ScrollArea className='flex-1 pr-4'>
              <div className='space-y-6'>
                <h2 className='text-2xl font-jura font-bold tracking-wider'>
                  Чому саме Study Buddy?
                </h2>
                <p className='text-white font-sans'>
                  Наша місія - дати необхідні знання, що виведуть тебе на інший
                  рівень кар'єри, навчання, спілкування, подорожей.
                </p>
                <p className='text-white font-sans'>
                  Ми не просто вчимо слова та правила, ми занурюємо наших
                  студентів у мовне середовище.
                </p>
              </div>
            </ScrollArea>
          </div>

          {/* Divider */}
          {/* <div className='hidden lg:block w-px bg-gradient-to-b from-transparent via-green-500 to-transparent opacity-50 shadow-[0_0_15px_0_rgba(34,197,94,0.6)] mx-4' /> */}
          <div className='hidden lg:block w-1 bg-lime-500 mx-4' />

          {/* Right Column - 60% on desktop */}
          <div className='w-full lg:w-[60%] p-6 flex flex-col'>
            <ScrollArea className='flex-1 pr-4'>
              <div className='space-y-6 mb-6'>
                <h1 className='text-2xl font-jura font-bold tracking-wider'>
                  Про школу англійської Study Buddy
                </h1>
                <p className='text-white font-sans'>
                  Study Buddy - це онлайн та офлайн школа англійської мови з
                  індивідуальним підходом. Наша школа зібрала досвідчених та
                  класних викладачів та найкращі матеріали.
                </p>
                <p className='text-white font-sans'>
                  Школа заснована в 2021 році.
                </p>
                <p className='text-white font-sans'>
                  За цей час ми випустили більше 100 учнів з 15 країн світу.
                </p>
                <p className='text-white font-sans'>
                  Наша ціль - зробити твій шлях до вільної англійської
                  комфортним та цікавим.
                </p>
                <p className='text-white font-sans'>
                  Назавжди стерти твій мовний бар'єр та дати впевненість у собі.
                </p>
                <p className='text-white font-sans'>
                  Стати для тебе справжніми менторами і наставниками, щоб ти
                  точно отримав той результат, про який мрієш.
                </p>
              </div>
              <div className='relative w-full aspect-video'>
                <Image
                  src='/about-2.png'
                  alt='Cyberpunk workspace'
                  fill
                  className='object-cover rounded-lg'
                />
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
