'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'
import { Toaster, toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Ім'я повинно містити принаймні 2 символи",
  }),
  email: z.string().email({
    message: 'Введіть коректну електронну пошту',
  }),
  phone: z.string().min(10, {
    message: 'Введіть коректний номер телефону',
  }),
  course: z.string({
    required_error: 'Оберіть курс',
  }),
  level: z.string({
    required_error: 'Оберіть рівень',
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Ви повинні погодитись з обробкою даних',
  }),
})

const courses = [
  { value: 'general', label: 'General English' },
  { value: 'business', label: 'Business English' },
  { value: 'speaking', label: 'Speaking English' },
]

const levels = [
  { value: 'a1-a2', label: 'A1-A2' },
  { value: 'b1', label: 'B1' },
  { value: 'b2', label: 'B2' },
  { value: 'c1', label: 'C1' },
]

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      course: 'general',
      level: 'a1-a2',
      consent: true,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone,
        course:
          courses.find((c) => c.value === values.course)?.label ||
          values.course,
        level:
          levels.find((l) => l.value === values.level)?.label || values.level,
      }

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      )

      if (response.status === 200) {
        toast.success('Форму успішно відправлено!', {
          duration: 3000,
          position: 'top-center',
        })
        form.reset()
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error('Помилка при відправці форми. Спробуйте ще раз.', {
        duration: 3000,
        position: 'top-center',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id='contact'
      className="relative bg-[url('/bg-contact.png')] w-full overflow-hidden font-sans overflow-x-hidden lg:p-32 bg-cover bg-no-repeat bg-blend-overlay flex items-center justify-center p-4"
    >
      <Toaster />

      <div className="w-full max-w-6xl bg-[url('/sub-bg-contact.png')] border-4 border-lime-500 rounded-lg relative">
        {/* Main container */}
        <div className='relative flex backdrop-blur-sm flex-col lg:flex-row rounded-lg overflow-hidden'>
          {/* Image section */}
          <div className='w-full lg:w-1/2 hidden lg:flex relative items-end'>
            <Image
              src='/racoon.png'
              alt='Cyberpunk raccoon'
              width={700} // Increase width
              height={700} // Increase height
              className='object-cover lg:object-contain' // Cover more space
              priority
            />
          </div>

          {/* Form section */}
          <div className='w-full lg:w-1/2 lg:ml-10 p-8 relative'>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-4'
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-gray-200 text-base'>
                        Ім'я
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="введіть своє ім'я"
                          {...field}
                          className='bg-white border-gray-600 h-12 xl:w-4/5 text-black placeholder:text-gray-400'
                        />
                      </FormControl>
                      <div className='h-2'>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <div className='space-y-1'>
                  <h3 className='text-gray-200'>Контактні дані</h3>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem className='py-3'>
                        <FormControl>
                          <Input
                            placeholder='електронна пошта'
                            type='email'
                            {...field}
                            className='bg-white border-gray-600 h-12 xl:w-4/5 text-black placeholder:text-gray-400'
                          />
                        </FormControl>
                        <div className='h-2'>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='phone'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder='номер телефону'
                            type='tel'
                            {...field}
                            className='bg-white border-gray-600 h-12 xl:w-4/5 text-black placeholder:text-gray-400'
                          />
                        </FormControl>
                        <div className='h-2'>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className='space-y-1'>
                  <h3 className='text-gray-200'>Оберіть курс та рівень</h3>
                  <FormField
                    control={form.control}
                    name='course'
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className='bg-white border-gray-600 h-12 xl:w-4/5 text-gray-600'>
                              <SelectValue placeholder='Оберіть курс' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className='bg-white text-gray-900 border-gray-200'>
                            {courses.map((course) => (
                              <SelectItem
                                className='cursor-pointer hover:bg-purple-300'
                                key={course.value}
                                value={course.value}
                              >
                                {course.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='level'
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className='bg-white border-gray-600 h-12 xl:w-4/5 text-gray-600'>
                              <SelectValue placeholder='Оберіть рівень' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className='bg-white  text-gray-900 border-gray-200'>
                            {levels.map((level) => (
                              <SelectItem
                                className='cursor-pointer hover:bg-purple-300'
                                key={level.value}
                                value={level.value}
                              >
                                {level.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name='consent'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className='data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600'
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel className='text-sm font-bold font-jura text-gray-300'>
                          Підтверджую обробку данних
                        </FormLabel>
                        <div className='h-2'>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  variant='sbMain'
                  className='w-full xl:w-4/5  h-12 '
                >
                  {isSubmitting && (
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  ЗАПИСАТИСЯ
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
