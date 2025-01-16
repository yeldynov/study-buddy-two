'use client'

import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import SectionTitle from './SectionTitle'
import { cn } from '@/lib/utils'

export interface Testimonial {
  id: string
  text: string
  author: {
    name: string
    city: string
    role: string
    image?: string
  }
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    text: 'Щиро дякую школі за надані знання. Моя найулюбленіша справа - це підбирати такі матеріали для студентів - від яких горять очі, на які й дивитися приємно і які дають класні знання. Я дуже люблю книги, настойки, ігри, і мої студенти знаю - я підтримаю будь яку розмову!',
    author: {
      name: 'Юлія',
      city: 'м. Бодрум',
      role: 'менеджер',
    },
  },
  {
    id: '2',
    text: 'Викладачі підбирають такі матеріали для студентів - від яких горять очі, на які і дивитися приємно і які дають класні знання. Я дуже люблю книги, настойки, ігри, і мої студенти знаю - я підтримаю будь яку розмову!',
    author: {
      name: 'Рита',
      city: 'м. Київ',
      role: 'стажер',
      image: '/testimonial-avatar.png',
    },
  },
  {
    id: '3',
    text: 'На які горять очі, на які й дивитися приємно і які дають класні знання. Я дуже люблю книги, настойки, ігри, і мої студенти знаю - я підтримаю будь яку розмову!',
    author: {
      name: 'Павло',
      city: 'м. Відень',
      role: 'розробник',
    },
  },
]

export const testimonialsSecondRow: Testimonial[] = [
  {
    id: '4',
    text: 'Дуже задоволена навчанням в школі. Викладачі професійні та уважні до кожного студента. Матеріали цікаві та корисні, а навчання проходить в дружній атмосфері.',
    author: {
      name: 'Марія',
      city: 'м. Львів',
      role: 'дизайнер',
    },
  },
  {
    id: '5',
    text: 'Чудова школа з індивідуальним підходом до кожного. Завдяки навчанню тут я значно покращив свій рівень англійської та знайшов нову роботу в міжнародній компанії.',
    author: {
      name: 'Олександр',
      city: 'м. Харків',
      role: 'програміст',
      image: '/testimonial-avatar.png',
    },
  },
  {
    id: '6',
    text: 'Заняття завжди проходять цікаво та продуктивно. Особливо подобається практичний підхід та можливість спілкування з носіями мови.',
    author: {
      name: 'Наталія',
      city: 'м. Одеса',
      role: 'перекладач',
    },
  },
]

export default function Testimonials() {
  return (
    <section
      id='testimonials'
      className='w-full hidden lg:block bg-gradient-to-b font-sans from-[#301A66] to-[#8c3688] min-h-screen py-16'
    >
      <div className='py-10'>
        <SectionTitle title='Відгуки студентів' />
      </div>

      <div className='space-y-12'>
        {/* First Row */}
        <div className='relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
          <div className='flex animate-infinite-scroll'>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className='flex-none mx-4 w-[400px]'
              >
                <Card className='relative h-full p-6 bg-gray-900/40 border-2 border-purple-500/50 backdrop-blur-sm overflow-hidden group hover:border-purple-400/70 transition-colors'>
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10' />

                  <div className='relative flex flex-col h-full'>
                    <div className='flex-1'>
                      <p className='text-gray-100 leading-relaxed'>
                        {testimonial.text}
                      </p>
                    </div>

                    <div className='flex font-jura fontb items-center gap-4 mt-4 pt-4 border-t border-purple-500/20'>
                      {testimonial.author.image && (
                        <div className='relative w-16 h-16'>
                          <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity' />
                          <Image
                            src={testimonial.author.image || '/placeholder.svg'}
                            alt={testimonial.author.name}
                            width={64}
                            height={64}
                            className='relative rounded-full object-cover'
                          />
                        </div>
                      )}
                      <div>
                        <p className='font-semibold text-white'>
                          {testimonial.author.name}
                        </p>
                        <p className='text-sm text-gray-300'>
                          {testimonial.author.city}, {testimonial.author.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className='relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
          <div className='flex animate-infinite-scroll-reverse'>
            {[...testimonialsSecondRow, ...testimonialsSecondRow].map(
              (testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className='flex-none mx-4 w-[400px]'
                >
                  <Card className='relative h-full p-6 bg-gray-900/40 border-2 border-purple-500/50 backdrop-blur-sm overflow-hidden group hover:border-purple-400/70 transition-colors'>
                    <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10' />

                    <div className='relative flex flex-col h-full'>
                      <div className='flex-1'>
                        <p className='text-gray-100 leading-relaxed'>
                          {testimonial.text}
                        </p>
                      </div>

                      <div className='flex font-jura fontb items-center gap-4 mt-4 pt-4 border-t border-purple-500/20'>
                        {testimonial.author.image && (
                          <div className='relative w-16 h-16'>
                            <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity' />
                            <Image
                              src={
                                testimonial.author.image || '/placeholder.svg'
                              }
                              alt={testimonial.author.name}
                              width={64}
                              height={64}
                              className='relative rounded-full object-cover'
                            />
                          </div>
                        )}
                        <div>
                          <p className='font-semibold text-white'>
                            {testimonial.author.name}
                          </p>
                          <p className='text-sm text-gray-300'>
                            {testimonial.author.city}, {testimonial.author.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
