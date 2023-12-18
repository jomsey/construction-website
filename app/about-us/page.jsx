import React from 'react'
import Image from 'next/image';
import Compass from 'feather-icons-react/build/IconComponents/Compass';


export default function AboutUs() {
  return (
    <main>
      <section className='about-us-landing  w-full px-12 flex flex-col justify-center lg:px-24 mt-1' >
        <div>
            <h1 className="text-white font-bold text-5xl w-11/12 md:text-6xl  md:w-1/2">We Are Building Experts</h1>
            <button className='text-green-500 font-semibold border-white border py-3 px-5 mt-8'>See Our Work</button>
        </div>
      </section>

      <section className="p-12 md:px-24 w-full md:flex gap-8">
        <div>
            <Image
                 src='/new-home.jpg'
                 width={1920}
                 height={1280}
                 className="object-cover w-full h-full"
            />
        </div>

        <div>
          <div>
              <Image
                 src='/new-home.jpg'
                 width={1920}
                 height={1280}
                 className="object-cover w-full h-full mt-8 md:mt-0"
              />
          </div>

          <div>
             <h2 className="text-3xl font-bold mt-14  text-slate-700 ">The Architectural <br></br> Language</h2>
             <p className='font-semibold text-base py-6 text-green-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae?</p>
             <p className="text-gray-600 text-sm  leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>
          </div>
        </div>

      </section>

      <section className='p-12 md:px-24 w-full bg-gray-700'>
        <h2 className="text-3xl font-bold mb-8  text-white">Provide The Best <br></br> Services</h2>
        <p className="text-gray-300 text-sm  leading-6 sm:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>

        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:gap-10 xlg:grid-cols-4'>
            <div className="border p-6">
               <div className=" text-gray-300" >
                <Compass/>
               </div>
               <div>
                   <h3 className="text-white font-semibold my-3 text-xl">Lorem ipsum dolor sit amet.</h3>
                   <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur, assumenda aspernatur ex modi iure inventore earum natus dicta consequatur commodi id autem debitis placeat?</p>
               </div>
            </div>

            <div className="border p-6">
               <div className=" text-gray-300" >
                <Compass/>
               </div>
               <div>
                   <h3 className="text-white font-semibold my-3 text-xl">Lorem ipsum dolor sit amet.</h3>
                   <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur, assumenda aspernatur ex modi iure inventore earum natus dicta consequatur commodi id autem debitis placeat?</p>
               </div>
            </div>

            <div className="border p-6">
               <div className=" text-gray-300" >
                <Compass/>
               </div>
               <div>
                   <h3 className="text-white font-semibold my-3 text-xl">Lorem ipsum dolor sit amet.</h3>
                   <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur, assumenda aspernatur ex modi iure inventore earum natus dicta consequatur commodi id autem debitis placeat?</p>
               </div>
            </div>
            <div className="border p-6">
               <div className=" text-gray-300" >
                <Compass/>
               </div>
               <div>
                   <h3 className="text-white font-semibold my-3 text-xl">Lorem ipsum dolor sit amet.</h3>
                   <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur, assumenda aspernatur ex modi iure inventore earum natus dicta consequatur commodi id autem debitis placeat?</p>
               </div>
            </div>
        </div>
      </section>
      <section className='p-12 md:px-24 w-full md:grid grid-cols-2 gap-12'>
          <div className='md:py-12'>
             <h2 className="text-3xl font-bold  text-slate-700 ">Architectural  With People<br></br> In Mind</h2>
             <p className='text-gray-700 text-sm font-semibold py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae?</p>
             <p className="text-gray-600 text-sm  leading-6 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>
             <p className="text-gray-600 text-sm  leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>

          </div>
          <div className='mt-8 md:mt-0'>
              <Image
                 src='/new-home.jpg'
                 width={1920}
                 height={1280}
                 className="object-cover w-full h-full"
              />
          </div>
      </section>
    </main>
  )
}
