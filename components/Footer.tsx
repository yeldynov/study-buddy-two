import { Phone, Instagram, Facebook, Send } from 'lucide-react'

const sections = [
  {
    title: 'Про Школу',
    link: '#about',
    links: [
      { name: 'Чому ми?', href: '#why-us' },
      { name: 'Курси', href: '#courses' },
      { name: 'Відгуки', href: '#testimonials' },
      { name: 'Викладачі', href: '#teachers' },
    ],
  },
  {
    title: 'for your education',
    link: '/for-your-education',
    links: [
      { name: 'best tim for your?', href: '#why-us' },
      { name: 'best tim for your', href: '#courses' },
    ],
  },
  {
    title: 'for your education',
    link: '/for-your-education',
    links: [
      { name: 'best tim for your?', href: '#why-us' },
      { name: 'best tim for your', href: '#courses' },
    ],
  },
  {
    title: '',
    links: [
      {
        name: 'Instagram',
        href: 'https://yeldynov.tech/',
        icon: (
          <Instagram className='h-6 w-6 text-white hover:text-primary transition-colors' />
        ),
      },
      {
        name: 'Facebook',
        href: 'https://yeldynov.tech/',
        icon: (
          <Facebook className='h-6 w-6 text-white hover:text-primary transition-colors' />
        ),
      },
      {
        name: 'Telegram',
        href: 'https://yeldynov.tech/',
        icon: (
          <Send className='h-6 w-6 text-white hover:text-primary transition-colors' />
        ),
      },
    ],
  },
]

const Footer = () => {
  return (
    <>
      <section className='lg:py-32 py-16 text-white font-jura footer-bg'>
        <div className='mx-5 lg:mx-40'>
          <footer>
            <div className='grid grid-cols-2 mx-auto  gap-8 lg:grid-cols-4'>
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <a
                    href={section.link}
                    className='mb-4 hover:text-primary font-bold'
                  >
                    {section.title ? (
                      section.title
                    ) : (
                      <>
                        <img src='/logo.png' alt='logo' className='h-14 mb-8' />
                        <div className='flex gap-4 mt-4'>
                          {section.links.map((link, linkIdx) => (
                            <a
                              key={linkIdx}
                              href={link.href}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='hover:text-primary transition-colors'
                            >
                              {link.icon}
                            </a>
                          ))}
                        </div>
                        <div className='flex items-center gap-2 mt-4 text-white'>
                          <Phone className='h-5 w-5' />
                          <span className='text-sm lg:text-base'>
                            +380 987 65 43 21
                          </span>
                        </div>
                      </>
                    )}
                  </a>
                  {section.title && (
                    <ul className='mt-4 space-y-4 text-muted-foreground'>
                      {section.links.map((link, linkIdx) => (
                        <li
                          key={linkIdx}
                          className='font-medium hover:text-primary'
                        >
                          <a
                            href={link.href}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </footer>
        </div>
      </section>
      <a
        href='https://yeldynov.tech'
        target='_blank'
        rel='noopener noreferrer'
        className='flex flex-col bg-black hover:text-primary justify-center font-jura text-gray-400 gap-4 p-4 text-sm font-medium text-muted-foreground md:flex-row md:items-center'
      >
        <p>© 2025 design and production by WildHorses. All rights reserved.</p>
      </a>
    </>
  )
}

export default Footer
