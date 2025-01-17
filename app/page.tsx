import About from '@/components/About'
import Contact from '@/components/Contact'
import Courses from '@/components/Courses'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Teachers from '@/components/Teachers'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Teachers />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
