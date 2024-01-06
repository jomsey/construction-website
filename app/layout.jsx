'use client'
import './globals.css'
import Nav from '@/components/nav-bar/nav'
import Footer from '@/components/footer/footer'
import Back2top from '@/components/back-to-top-button/b2top'
import Contact from '@/components/contacts/contacts'
import { usePathname } from 'next/navigation'
import 'aos/dist/aos.css'
import AOS from 'aos'
import React from "react"
import { Lato, Roboto } from "next/font/google"

const lato = Lato({
  weight: ['300', '400'],
  subsets: ['latin']
})

const roboto = Roboto({
  weight: ["700", "900"],
  subsets: ['latin'],
  variable: '--font-roboto'
})


export default function RootLayout({ children }) {
  const path = usePathname()

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    })
  }, [])

  return (
    <html lang="en" className='scroll-smooth relative' id='top'>
      <body className={`bg-gray-50 overflow-x-hidden scroll-smooth  ${lato.className}`}>
        {!path.toLocaleLowerCase().search('/admin') ?
          <>{children}</> :
          <>
            <Back2top />
            <Nav />
            {children}
            <Contact />
            <Footer />
          </>

        }
      </body>
    </html>
  )
}







