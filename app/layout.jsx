import './globals.css'
import Nav from '@/components/nav-bar/nav'
import Footer from '@/components/footer/footer'
import Back2top from '@/components/back-to-top-button/b2top'
import Contact from '@/components/contacts/contacts'

export const metadata = {
  title: 'Page Title Will Go Here',
  description: 'Page Description Will Go Here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth' id='top'>
      <body className='bg-white scroll-smooth '>
        <Back2top/>
        <Nav/>
        {children}
        <Contact/> 
        <Footer/>
      </body>
    </html>
  )
}



  
  

