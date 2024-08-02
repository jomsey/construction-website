'use client'
import { Menu, X } from 'feather-icons-react/build/IconComponents'
import { useRef } from 'react'
import NavLink from '../nav-link/nav-link'
import { useSession } from 'next-auth/react'


export default function Nav() {

  const navList = useRef(null)
  const { status } = useSession()

  const handleMobileMenuOpen = () => {
    navList.current.classList.remove('w-0')
    navList.current.classList.add('w-full')
  }

  const handleMobileMenuClose = () => {
    navList.current.classList.remove('w-full')
    navList.current.classList.add('w-0')
  }


  return (
    <nav className="flex justify-between items-center h-11  w-4/8 mt-6 z-10">
      <div className='bg-green-400 logo text-white flex  items-center flex-col gap-1 justify-center text-center z-40'>
        <span className='font-bold text-2xl'>Build</span>
        <span className='font-bold'>Africa</span>
      </div>
      <div>

        <div ref={navList} className="fixed w-0 h-full transition-all ease-linear duration-300  overflow-hidden top-0 left-0 bg-gray-700 md:bg-gray-50 z-50 pt-0 md:pt-0 md:h-auto md:w-auto md:static   ">

          <div className='text-green-400 cursor-pointer m-auto w-min  mt-6 mb-8 md:hidden' onClick={handleMobileMenuClose}>
            {/* this is a close menu button */}
            <X />
          </div>
          <ul className='flex gap-8 mb-6 flex-col md:flex-row  items-center text-xl md:text-base'>
            <NavLink path='/'>Home</NavLink>
            <NavLink path='/projects'>Projects</NavLink>
            <NavLink path='/about-us'>About Us</NavLink>
            <NavLink path='/contact-us'>Contact</NavLink>
            <NavLink path='/#services'>Services</NavLink>
            <NavLink path='/blog'>Blog</NavLink>
            {status == "authenticated" && <NavLink path='/admin'>DashBoard</NavLink>}
            {status == "authenticated" && <NavLink path='/api/auth/signout'>Logout</NavLink>}

          </ul>
        </div>
        <div className='text-green-400 cursor-pointer mb-4 md:hidden' onClick={handleMobileMenuOpen} >
          <Menu className='menu-open' />
        </div>
      </div>
    </nav>
  )
}
