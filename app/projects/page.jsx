import React from 'react'
import Image from 'next/image'
import { GiBathtub, GiBed, GiDirectionSign, GiGps, GiKitchenKnives, GiResize } from 'react-icons/gi'

export const metadata = {
   title: 'Build Africa | Our Projects',
   description: 'Step into the tranformative world of Build Africa that shapes not just structures but the future.From residential marvels to commercial hubs, each structure is  a testament to our commitment to excellence.',
   authors: 'Muwanguzi Joseph',

}

export default function Projects() {
   return (
      <main className="overflow-hidden">
         <section className='h-96 projects-landing z- w-full px-12 relative flex flex-col justify-center lg:px-24 mt-1' >
            <div className='absolute w-full h-full top-0 left-0 bg-black opacity-30'></div>

            <h1 className="text-white font-bold text-5xl relative  w-11/12 md:text-6xl  md:w-1/2">The Magical  Luxury</h1>

         </section>
         <section className='flex justify-center items-center my-12'>
            <p className='w-3/4 sm:w-1/2 border-double border-spacing-4 border-l-2 py-6 text-gray-600 pl-8 leading-8 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam libero deserunt ad sunt eveniet quibusdam neque et possimus ipsum iure recusandae quia animi repellat hic, voluptatibus facilis iste nam.</p>
         </section>

         <section className="grid gap-16 mb-12">
            <section className="grid md:grid-cols-2 px-8 sm:px-16 md:px-24  gap-10  ">
               <div className='rounded overflow-hidden' data-aos="fade-up">
                  <Image
                     alt=".."
                     src="/h.jpg"
                     width={1280}
                     height={853}
                     className="object-cover w-full h-full"
                  />
               </div>
               <div className="overflow-hidden">
                  <h2 data-aos="fade-left">Lorem ipsum dolor sit amet.</h2>
                  <p className=' text-gray-600  leading-8 text-sm' data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam libero deserunt ad sunt eveniet quibusdam neque et possimus ipsum iure recusandae quia animi repellat hic, voluptatibus facilis iste nam.</p>
                  <p className='text-gray-600 leading-8 text-sm' data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam libero deserunt ad sunt eveniet quibusdam neque et possimus ipsum iure recusandae quia animi repellat hic, voluptatibus facilis iste nam.</p>

                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4" data-aos="fade-up">
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiBathtub className="text-3xl" />
                        <small>3 Bathrooms</small>
                     </div>
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiBed className="text-3xl" />
                        <small>4 Bedrooms</small>
                     </div>
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiDirectionSign className="text-3xl" />
                        <small>Nairobi</small>
                     </div>
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiKitchenKnives className="text-3xl" />
                        <small>1 Kitchen</small>
                     </div>
                  </div>
                  <button className="border rounded-full border-green-500 text-gray-50 text-sm px-8 py-2 mt-8 bg-green-600" data-aos="fade-right">View Photo Slide</button>
               </div>
            </section>

            <section className="grid md:grid-cols-2 px-8 sm:px-16 md:px-24  gap-10  ">
               <div className='rounded overflow-hidden' data-aos="fade-up">
                  <Image
                     alt=".."
                     src="/h.jpg"
                     width={1280}
                     height={853}
                     className="object-cover w-full h-full"
                  />
               </div>
               <div className="overflow-hidden">
                  <h2 data-aos="fade-left">Lorem ipsum dolor sit amet.</h2>
                  <p className=' text-gray-600  leading-8 text-sm' data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam libero deserunt ad sunt eveniet quibusdam neque et possimus ipsum iure recusandae quia animi repellat hic, voluptatibus facilis iste nam.</p>
                  <p className='text-gray-600 leading-8 text-sm' data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam libero deserunt ad sunt eveniet quibusdam neque et possimus ipsum iure recusandae quia animi repellat hic, voluptatibus facilis iste nam.</p>

                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4" data-aos="fade-up">
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiBathtub className="text-3xl" />
                        <small>3 Bathrooms</small>
                     </div>
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiBed className="text-3xl" />
                        <small>4 Bedrooms</small>
                     </div>
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiDirectionSign className="text-3xl" />
                        <small>Nairobi</small>
                     </div>
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiKitchenKnives className="text-3xl" />
                        <small>1 Kitchen</small>
                     </div>
                  </div>
                  <button className="border rounded-full border-green-500 text-gray-50 text-sm px-8 py-2 mt-8 bg-green-600" data-aos="fade-right">View Photo Slide</button>
               </div>
            </section>

            <section className="grid md:grid-cols-2 px-8 sm:px-16 md:px-24  gap-10  ">
               <div className='rounded overflow-hidden' data-aos="fade-up">
                  <Image
                     alt=".."
                     src="/h.jpg"
                     width={1280}
                     height={853}
                     className="object-cover w-full h-full"
                  />
               </div>
               <div className="overflow-hidden">
                  <h2 data-aos="fade-left">Lorem ipsum dolor sit amet.</h2>
                  <p className=' text-gray-600  leading-8 text-sm' data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam libero deserunt ad sunt eveniet quibusdam neque et possimus ipsum iure recusandae quia animi repellat hic, voluptatibus facilis iste nam.</p>
                  <p className='text-gray-600 leading-8 text-sm' data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam libero deserunt ad sunt eveniet quibusdam neque et possimus ipsum iure recusandae quia animi repellat hic, voluptatibus facilis iste nam.</p>

                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4" data-aos="fade-up">
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiBathtub className="text-3xl" />
                        <small>3 Bathrooms</small>
                     </div>
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiBed className="text-3xl" />
                        <small>4 Bedrooms</small>
                     </div>
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiDirectionSign className="text-3xl" />
                        <small>Nairobi</small>
                     </div>
                     <div className="flex gap-2 text-gray-500 flex-col items-center border  p-3 rounded">
                        <GiKitchenKnives className="text-3xl" />
                        <small>1 Kitchen</small>
                     </div>
                  </div>
                  <button className="border rounded-full border-green-500 text-gray-50 text-sm px-8 py-2 mt-8 bg-green-600" data-aos="fade-right">View Photo Slide</button>
               </div>
            </section>



         </section>

      </main>
   )
}
