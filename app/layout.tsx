import type { Metadata } from 'next'
import { Jura, Roboto, Londrina_Shadow } from 'next/font/google'
import './globals.css'

const jura = Jura({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jura',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

const londrinaShadow = Londrina_Shadow({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-londrina-shadow',
})

export const metadata: Metadata = {
  title: 'Study Buddy',
  description:
    'Study Buddy  - це онлайн та офлайн школа англійської мови з індивідуальним підходом. Наша школа зібрала досвідчених та класних викладачів та найкращі матеріали.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} ${jura.variable} ${londrinaShadow.variable} antialiased text-white`}
      >
        {children}
      </body>
    </html>
  )
}
