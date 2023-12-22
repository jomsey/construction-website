'use client'
import './globals.css'
import Nav from '@/components/nav-bar/nav'
import Footer from '@/components/footer/footer'
import Back2top from '@/components/back-to-top-button/b2top'
import Contact from '@/components/contacts/contacts'
import { usePathname } from 'next/navigation'


export default function RootLayout({ children }) {
  const path = usePathname()
  const pathList = ['/admin', '/sign-in', '/admin/messages', '/admin/subscriptions', '/admin/events', '/admin/settings', '/admin/about']
  const pathInList = pathList.includes(path)

  return (
    <html lang="en" className='scroll-smooth relative' id='top'>
      <body className='bg-white scroll-smooth '>
        {pathInList ?
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







