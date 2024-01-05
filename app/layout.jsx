'use client'
import './globals.css'
import Nav from '@/components/nav-bar/nav'
import Footer from '@/components/footer/footer'
import Back2top from '@/components/back-to-top-button/b2top'
import Contact from '@/components/contacts/contacts'
import { usePathname } from 'next/navigation'
import { Lato } from 'next/font/google'


const lato = Lato({ subsets: ['latin'], weight: ["100", "700", "900"] })

export default function RootLayout({ children }) {
  const path = usePathname()

  return (
    <html lang="en" className='scroll-smooth relative' id='top'>
      <body className={`bg-white scroll-smooth ${lato.className}`}>
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







