import React from 'react'
import Image from 'next/image'
import { GiBathtub, GiBed, GiDirectionSign, GiGps, GiKitchenKnives, GiResize } from 'react-icons/gi'
import PhotosSwiper from '@/components/photo-swiper/swiper'

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
            <p className='w-3/4 sm:w-1/2 border-double border-spacing-4 border-l-2 py-6 font-bold text-gray-600 pl-8 leading-8 text-sm'>Each of our projects at Build Africa represents a unique chapter in our
               journey, showcasing our passion for construction and our commitment to
               creating spaces that make a positive impact on the lives of those who inhabit
               them.</p>
         </section>

         <section className="grid gap-16 mb-12">
            <section className="grid md:grid-cols-2 px-8 sm:px-16 md:px-24  gap-10  ">
               <div className='rounded overflow-hidden relative' data-aos="fade-up">
                  <Image
                     alt=".."
                     src="/h.jpg"
                     width={1280}
                     height={853}
                     className="object-cover w-full h-full"
                  />
                  <PhotosSwiper images={[{ url: "/am.jpg", width: "1000", height: "500" }, { url: "/c.jpg", width: "1000", height: "500" }, { url: "/a.jpg", width: "1000", height: "500" }]} />

               </div>
               <div className="overflow-hidden relative">
                  <h2 data-aos="fade-left">Urban Oasis Residences</h2>
                  <p className=' text-gray-600  leading-8 text-sm' data-aos="fade-left"> Nestled in the heart of the city, Urban Oasis Residences is a hallmark of
                     sophisticated living. These architecturally stunning residential complexes
                     offer more than just homes; they provide a lifestyle. With meticulous
                     attention to detail and contemporary design, each unit is a sanctuary
                     where comfort and aesthetics seamlessly blend. Discover a harmonious blend
                     of elegance and functionality in every corner of Urban Oasis Residences.</p>

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
               <div className='rounded overflow-hidden relative' data-aos="fade-up">
                  <Image
                     alt=".."
                     src="/as.jpg"
                     width={1280}
                     height={853}
                     className="object-cover w-full h-full"
                  />
                  <PhotosSwiper images={[{ url: "/am.jpg", width: "1000", height: "500" }, { url: "/c.jpg", width: "1000", height: "500" }, { url: "/a.jpg", width: "1000", height: "500" }]} />

               </div>
               <div className="overflow-hidden relative">
                  <h2 data-aos="fade-left">Commerce Hub Tower</h2>
                  <p className=' text-gray-600  leading-8 text-sm' data-aos="fade-left"> Commerce Hub Tower stands tall as a beacon of innovation in the commercial
                     landscape. This cutting-edge development redefines workspaces, offering
                     state-of-the-art offices that inspire productivity and growth. The tower's
                     striking design is a visual representation of our commitment to creating
                     environments that foster success. Explore the dynamic spaces within
                     Commerce Hub Tower and witness a new era of corporate excellence.</p>

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
               <div className='rounded overflow-hidden relative' data-aos="fade-up">
                  <Image
                     alt=".."
                     src="/f.jpg"
                     width={1280}
                     height={853}
                     className="object-cover w-full h-full"
                  />
                  <PhotosSwiper images={[{ url: "/am.jpg", width: "1000", height: "500" }, { url: "/c.jpg", width: "1000", height: "500" }, { url: "/a.jpg", width: "1000", height: "500" }]} />

               </div>
               <div className="overflow-hidden relative">
                  <h2 data-aos="fade-left">EcoVillage Sustainable Living</h2>
                  <p className=' text-gray-600  leading-8 text-sm' data-aos="fade-left">EcoVillage is more than just a residential development; it's a commitment
                     to sustainable living. Nestled in a lush green landscape, this project
                     combines eco-friendly architecture with modern amenities. From
                     energy-efficient designs to green spaces that promote well-being,
                     EcoVillage exemplifies our dedication to creating communities that thrive
                     in harmony with nature. Explore a lifestyle where sustainability and
                     comfort coexist seamlessly.</p>

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
