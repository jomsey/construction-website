'use client'
import Link from 'next/link'
import {Triangle,Menu,Delete} from 'feather-icons-react/build/IconComponents'
import { useRef } from 'react'
import NavLink from '../nav-link/nav-link'


export default function Nav() {

  const navList = useRef(null)

  const handleMobileMenuOpen=()=>{
    navList.current.classList.remove('w-0')
    navList.current.classList.add('w-full')
  }

  const handleMobileMenuClose=()=>{
    navList.current.classList.remove('w-full')
    navList.current.classList.add('w-0')
  }

  
  return (
    <nav className="flex justify-between items-center h-11  w-4/8 mt-6 z-10">
        <span className='bg-amber-400 logo text-white flex flex-col items-center justify-center text-center z-40'><Triangle/></span>
        <div>
          
            <div  ref={navList} className="fixed w-0 h-full transition-all ease-linear duration-300  overflow-hidden top-0 left-0 bg-gray-700 md:bg-white z-50 pt-0 md:pt-0 md:h-auto md:w-auto md:static   ">

            <div className='text-amber-400 cursor-pointer m-auto w-min  mt-6 mb-8 md:hidden'  onClick={handleMobileMenuClose}>
              <Delete/>
            </div>
                <ul className='flex gap-8 mb-6 flex-col md:flex-row  items-center text-xl md:text-base'>
                    <NavLink path='/'>
                        <Link href="/">Home</Link>
                    </NavLink>

                    <NavLink path='/projects'>
                        <Link href="/projects">Projects</Link>
                    </NavLink>
                    
                    <NavLink path='/about-us'>
                        <Link href="/about-us">About Us</Link>
                    </NavLink>

                    <NavLink path='/contact-us'>
                        <Link href="/contact-us">Contact</Link>
                    </NavLink>

                    <NavLink path='/#services'>
                        <Link href="/#services">Services</Link>
                    </NavLink>

                </ul> 
            </div>
            <div className='text-amber-400 cursor-pointer mb-4 md:hidden' onClick={handleMobileMenuOpen} >
              <Menu className='menu-open'/>
            </div>
        </div>
    </nav>
  )
}
