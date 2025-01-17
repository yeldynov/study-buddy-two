'use client'

import { useRef } from 'react'
import SectionTitle from './SectionTitle'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
export interface Course {
  id: string
  title: string
  availableLevels: EnglishLevel[]
  groupSize: string
  lessonDuration: string
  pricePerLesson: number
  courseDuration: string
  availableSpots: number
}

export type EnglishLevel = 'A1-A2' | 'B1' | 'B2' | 'C1'

const levelColors: Record<EnglishLevel, { bg: string; hover: string }> = {
  'A1-A2': { bg: 'bg-green-500/20', hover: 'hover:bg-green-500/30' },
  B1: { bg: 'bg-blue-500/20', hover: 'hover:bg-blue-500/30' },
  B2: { bg: 'bg-purple-500/20', hover: 'hover:bg-purple-500/30' },
  C1: { bg: 'bg-red-500/20', hover: 'hover:bg-red-500/30' },
}

export const courses: Course[] = [
  {
    id: 'general-english',
    title: 'General English',
    availableLevels: ['A1-A2', 'B1', 'B2'],
    groupSize: '2-5',
    lessonDuration: '60 хвилин',
    pricePerLesson: 300,
    courseDuration: '7 місяців',
    availableSpots: 2,
  },
  {
    id: 'business-english',
    title: 'Business English',
    availableLevels: ['B1', 'B2'],
    groupSize: '2-5',
    lessonDuration: '60 хвилин',
    pricePerLesson: 350,
    courseDuration: '8 місяців',
    availableSpots: 3,
  },
  {
    id: 'speaking-english',
    title: 'Speaking English',
    availableLevels: ['A1-A2', 'B1', 'B2', 'C1'],
    groupSize: '2-5',
    lessonDuration: '60 хвилин',
    pricePerLesson: 350,
    courseDuration: '8 місяців',
    availableSpots: 3,
  },
]

const Courses = () => {
  const ref = useRef(null) // Reference for the section
  const isInView = useInView(ref, { once: true }) // Trigger when the section is visible

  return (
    <section
      id='courses'
      ref={ref}
      className='mx-auto bg-[url("/bg-courses.png")] min-h-screen lg:p-16 sm:bg-center bg-center bg-cover bg-no-repeat bg-blend-overlay'
    >
      <SectionTitle title={'Програми та курси'} />
      <p className='max-w-3xl p-6 font-sans'>
        Заняття відбуваються у ZOOM з використанням інтерактивних дошок та
        матеріалів, а завдяки менторському підходу, ми підтримуємо мотивацію та
        дисципліну студентів. Ти дійсно зануришся у мовне середовище, і
        зрозумієш, що таке “оточити себе англійською”...
      </p>
      <div className='grid grid-cols-1 gap-6 p-6 md:grid-cols-3'>
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
          >
            <Card className='relative overflow-hidden font-sans border-2 text-white transition-colors border-purple-500 bg-[#331C1C80]/50 hover:border-purple-400'>
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10' />

              <CardContent className='relative p-6 space-y-4'>
                <h2 className='text-2xl font-bold tracking-tight font-jura'>
                  {course.title}
                </h2>

                <div className='space-y-1'>
                  <p className='text-gray-300 text-lg'>Доступні рівні:</p>
                  <div className='flex flex-wrap gap-2'>
                    {course.availableLevels.map((level) => (
                      <Badge
                        key={level}
                        variant='outline'
                        className={`
                 border-0 text-white font-medium
                 ${levelColors[level].bg}
                 ${levelColors[level].hover}
               `}
                      >
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className='space-y-2 text-lg text-gray-200'>
                  <p>
                    Кількість учнів у групі:{' '}
                    <span className='font-bold'>{course.groupSize}</span>
                  </p>
                  <p>
                    Тривалість заняття:{' '}
                    <span className='font-bold'>{course.lessonDuration}</span>
                  </p>
                  <p>
                    Вартість 1 заняття:{' '}
                    <span className='font-bold'>
                      {course.pricePerLesson} грн
                    </span>
                  </p>
                  <p>
                    Тривалість курсу:{' '}
                    <span className='font-bold'>{course.courseDuration}</span>
                  </p>
                  <p>
                    Вільних місць:{' '}
                    <span className='font-bold'>{course.availableSpots}</span>
                  </p>
                </div>
              </CardContent>

              <CardFooter className='relative p-6 pt-0'>
                <Link href='#contact'>
                  <Button variant='sbMain' size='lg'>
                    ЗАПИСАТИСЯ
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Courses
