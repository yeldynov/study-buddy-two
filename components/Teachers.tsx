'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import SectionTitle from './SectionTitle'
import { Button } from './ui/button'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'

export type Teacher = {
  id: string
  name: string
  role: string
  description: string
  about: string
  photo: string
  cooperation: string
}

interface TeacherSliderProps {
  teachers: Teacher[]
}

export const teachers: Teacher[] = [
  {
    id: '1',
    name: 'teacher Viktoria',
    role: 'викладач, ментор, засновниця школи',
    description:
      'Вища філологічна освіта, вільно володіє англійською та китайською, CELTA сертифікат, 7 років досвіду роботи з міжнародними компаніями, 8 років досвіду в викладанні. ',
    about:
      'Завдяки багаторічному досвіду роботи безпосередньо у міжнародних компаніях, з реальними замовниками, я чітко вивчила, які навички потрібно давати студентам, щоб вони могли використовувати знання тут і зараз. Без нудної теорії.',
    photo: '/viktoria-teacher.png', // Replace with the actual URL
    cooperation: 'Можливість співпраці - індивідуальні заняття, пари, групи',
  },
  {
    id: '2',
    name: 'teacher Ivan',
    role: 'викладач, редактор',
    description:
      'Вища філологічна освіта, вільно володіє англійською та шведською, 4 річний досвід викладання англійської мови. ',
    about:
      'Про себе - моя найулюбленіша справа - це підбирати такі матеріали для студентів - від яких горять очі, на які й дивитися приємно і які дають класні знання. Я дуже люблю книги, настолки, ігри, і мої студенти знають - я підтримаю будь яку розмову!',
    photo: '/ivan-teacher.png', // Replace with the actual URL
    cooperation: 'Можливість співпраці - індивідуальні заняття, пари, групи',
  },
  {
    id: '3',
    name: 'teacher Anna',
    role: 'старший викладач, розробник додаткових матеріалів',
    description:
      'Вища філологічна освіта, вільно володіє англійською та німецькою, 4 річний досвід викладання англійської мови. ',
    about:
      'Про себе - моя найулюбленіша справа - це підбирати такі матеріали для студентів - від яких горять очі, на які й дивитися приємно і які дають класні знання. Я дуже люблю книги, настолки, ігри, і мої студенти знають - я підтримаю будь яку розмову!',
    photo: '/anna-teacher.png', // Replace with the actual URL
    cooperation: 'Можливість співпраці - індивідуальні заняття, пари, групи',
  },
  {
    id: '4',
    name: 'teacher Diana',
    role: 'викладач, редактор матеріалів',
    description:
      'Вища філологічна освіта, вільно володіє англійською та німецькою, 4 річний досвід викладання англійської мови.',
    about:
      'Про себе - моя найулюбленіша справа - це підбирати такі матеріали для студентів - від яких горять очі, на які й дивитися приємно і які дають класні знання. Я дуже люблю книги, настолки, ігри, і мої студенти знають - я підтримаю будь яку розмову!',
    photo: '/diana-teacher.png', // Replace with the actual URL
    cooperation: 'Можливість співпраці - індивідуальні заняття, пари, групи',
  },
]

export default function Teachers() {
  return (
    <>
      <section
        id='teachers'
        className='w-full bg-[url("/bg-teachers.png")] min-h-screen lg:p-16 bg-[right_27%_top] bg-cover bg-no-repeat bg-blend-overlay'
      >
        <SectionTitle title={'Наші фахівці'} />
        <div className='max-w-6xl px-4 mx-auto 2xl:max-w-7xl'>
          <Carousel
            opts={{
              loop: true,
              align: 'start',
            }}
            plugins={[Autoplay({ delay: 3000 })]}
            className='relative'
          >
            <CarouselContent>
              {teachers.map((teacher) => (
                <CarouselItem
                  key={teacher.id}
                  className='w-[95%] lg:mx-auto md:px-4'
                >
                  <div className='flex flex-col items-center justify-center gap-12 p-8 font-sans py-16 md:flex-row bg-[#331C1C80]/50 '>
                    <div className='relative w-full md:w-1/3 aspect-[3/4] overflow-hidden'>
                      <Image
                        className='object-cover'
                        fill
                        sizes='(max-width: 406px) 100vw 50vw'
                        alt={teacher.name}
                        src={teacher.photo}
                        priority
                      />
                      <div className='absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 mix-blend-overlay' />
                    </div>

                    <div className='flex flex-col w-full space-y-6 md:w-1/2'>
                      <h3 className='text-4xl font-semibold text-white font-jura'>
                        [{teacher.name}]
                      </h3>
                      <p className='text-lg font-medium text-purple-200'>
                        {teacher.role}
                      </p>
                      <p className='leading-relaxed text-gray-300'>
                        {teacher.description}
                      </p>
                      <p className='leading-relaxed text-gray-300'>
                        {teacher.about}
                      </p>
                      <p className='font-medium text-purple-200'>
                        {teacher.cooperation}
                      </p>
                      <Link href='#contact'>
                        <Button size='lg' variant='sbMain'>
                          ЗАПИСАТИСЯ
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='absolute right-0 justify-between hidden -translate-y-1/2 pointer-events-none lg:flex left-2 top-1/2'>
              <CarouselPrevious className='relative pointer-events-auto left-2 md:left-[-70px] h-12 w-12  bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white'></CarouselPrevious>
              <CarouselNext className='relative pointer-events-auto right-2 md:right-[-50px] h-12 w-12  bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white'></CarouselNext>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  )
}
