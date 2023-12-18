import React from 'react'
import Image from 'next/image'

export default function Projects() {
  return (
    <main>
       <section className='h-96 projects-landing z- w-full px-12 relative flex flex-col justify-center lg:px-24 mt-1' >
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-30'></div>
        
         <h1 className="text-white font-bold text-5xl relative  w-11/12 md:text-6xl  md:w-1/2">The Magical  Luxury</h1>
        
      </section>
      <section className='flex justify-center items-center my-12'>
         <p className='w-3/4 sm:w-1/2 border-double border-spacing-4 border-l-2 py-10 text-gray-600 pl-8 leading-8 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam libero deserunt ad sunt eveniet quibusdam neque et possimus ipsum iure recusandae quia animi repellat hic, voluptatibus facilis iste nam.</p>
      </section>
      <section className=' grid sm:grid-cols-2 lg:grid-cols-4'>
          <div className='relative cursor-zoom-in h-96'>
              <div className='bg-black opacity-75 absolute top-0 left-0 w-full h-full'></div>

              <div className='absolute top-0 left-0 w-full h-full p-12'>
                 <h5 className='text-white font-bold uppercase text-2xl'>Residential</h5>
                 <h6 className='text-green-300 font-bold uppercase'>Lodwar</h6>
              </div> 

              <Image
                 src='/a.jpg'
                 width={1920}
                 height={1280}
                 className="object-cover w-full h-full"
                 alt='....'
              />
          </div>
          <div className='relative cursor-zoom-in h-96'>
              <div className='bg-black opacity-75 absolute top-0 left-0 w-full h-full'></div>

              <div className='absolute top-0 left-0 w-full h-full p-12'>
                 <h5 className='text-white font-bold uppercase text-2xl'>Hotel</h5>
                 <h6 className='text-green-300 font-bold uppercase'>Kampala</h6>
              </div> 

              <Image
                 src='/b.jpg'
                 width={1920}
                 height={1280}
                 className="object-cover w-full h-full"
                 alt='....'

              />
          </div>
          <div className='relative cursor-zoom-in h-96'>
              <div className='bg-black opacity-25 absolute top-0 left-0 w-full h-full'></div>

              <div className='absolute top-0 left-0 w-full h-full p-12'>
                 <h5 className='text-white font-bold uppercase text-2xl'>Residential</h5>
                 <h6 className='text-green-300 font-bold uppercase'>Lodwar</h6>
              </div> 

              <Image
                 src='/d.jpg'
                 width={1920}
                 height={1280}
                 className="object-cover w-full h-full"
                 alt='....'

              />
          </div>
          <div className='relative cursor-zoom-in h-96'>
              <div className='bg-black opacity-60 absolute top-0 left-0 w-full h-full'></div>

              <div className='absolute top-0 left-0 w-full h-full p-12'>
                 <h5 className='text-white font-bold uppercase text-2xl'>Restaurant</h5>
                 <h6 className='text-green-300 font-bold uppercase'>Eldoret</h6>
              </div> 

              <Image
                 src='/new-home.jpg'
                 width={1920}
                 height={1280}
                 className="object-cover w-full h-full"
                 alt='....'

              />
          </div>
          
      </section>
    </main>
  )
}
