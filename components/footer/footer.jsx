import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'feather-icons-react/build/IconComponents'


export default function Footer() {
   return (
      <footer className='bg-gray-700 p-8 sm:p-12 lg:px-24 pb-0 overflow-hidden'>
         <section className='sm:grid grid-cols-5 gap-5'>
            <div className='col-span-2'>
               <h5 className='font-bold text-2xl text-white' data-aos="fade-up">Build Africa</h5>
               <p className='text-gray-400 mt-4 text-sm font-medium lg:w-3/4' data-aos="fade-up"> Embrace the future of construction  with Build Africa, where innovation is not just a buzzword but a cornerstone of our success.</p>
            </div>

            <div>
               <h6 className='font-bold text-sm mt-4 text-green-500' data-aos="fade-up">Site Links</h6>
               <nav className='flex flex-col w-full'>
                  <ul className='flex flex-col gap-2  mt-4' data-aos="fade-up">
                     <li className='text-gray-400 font-semibold hover:text-green-400 transition-colors ease-in duration-300 text-sm'><Link href="/">Home</Link></li>
                     <li className='text-gray-400 font-semibold hover:text-green-400 transition-colors ease-in duration-300 text-sm'><Link href="/">About</Link></li>
                     <li className='text-gray-400 font-semibold hover:text-green-400 transition-colors ease-in duration-300 text-sm'><Link href="/">Projects</Link></li>
                     <li className='text-gray-400 font-semibold hover:text-green-400 transition-colors ease-in duration-300 text-sm'><Link href="/">Blog</Link></li>
                     <li className='text-gray-400 font-semibold hover:text-green-400 transition-colors ease-in duration-300 text-sm'><Link href="/">Contact</Link></li>
                  </ul>
               </nav>
            </div>
            <div>
               <h6 className='font-bold text-sm mt-4 text-green-500' data-aos="fade-up">More Info</h6>
               <nav className='flex flex-col w-full'>
                  <ul className='flex flex-col gap-2  mt-4' data-aos="fade-up">
                     <li className='text-gray-400 font-semibold hover:text-green-400 text-sm transition-colors ease-in duration-300'><Link href="/">FAQ</Link></li>
                     <li className='text-gray-400 font-semibold hover:text-green-400 text-sm transition-colors ease-in duration-300'><Link href="/privacy">Privacy Policy</Link></li>
                     <li className='text-gray-400 font-semibold hover:text-green-400 text-sm transition-colors ease-in duration-300'><Link href="/disclaimer">Disclaimer</Link></li>
                     <li className='text-gray-400 font-semibold hover:text-green-400 text-sm transition-colors ease-in duration-300'><Link href="/terms">Terms Of Us</Link></li>
                  </ul>
               </nav>
            </div>
            <div>
               <h6 className='font-bold text-sm mt-4 text-green-500' data-aos="fade-up">Social Media</h6>
               <div className='mt-4 text-gray-400 flex gap-4' data-aos="fade-up">
                  <Facebook className='hover:text-green-400 transition-colors ease-in duration-300 cursor-pointer' />
                  <Twitter className='hover:text-green-400 transition-colors ease-in duration-300 cursor-pointer' />
                  <Instagram className='hover:text-green-400 transition-colors ease-in duration-300 cursor-pointer' />
               </div>
            </div>
         </section>
         <footer className='border-t border-gray-600 mt-5'>
            <small className='text-xs  mx-2 text-green-300'> developed by muwanguzi joseph</small>
         </footer>
      </footer>
   )
}
