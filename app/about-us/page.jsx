import Image from 'next/image';
import { GiAchievement, GiGears, GiBrickWall, GiSparkles } from "react-icons/gi"


export default function AboutUs() {
  return (
    <main>
      <section className='about-us-landing bg-center w-full px-12 flex flex-col justify-center lg:px-24 mt-1' >
        <div>
          <h1 className="text-white font-bold text-5xl w-11/12 md:text-6xl  md:w-1/2">Shaping Spaces, Building Dreams</h1>
          <button className='text-white font-semibold border-white border py-3 px-5 mt-8'>See Our Work</button>
        </div>
      </section>

      <section className="p-8 md:px-24 w-full lg:flex gap-12  py-14">
        <div>
          <Image
            src='/h.jpg'
            width={1920}
            height={1280}
            className="object-cover w-full h-full"
            alt="..."
          />
        </div>

        <div className="flex flex-col-reverse gap-12">
          <div>
            <Image
              src='/new-home.jpg'
              width={1920}
              height={1280}
              className="object-cover w-full h-full mt-8 md:mt-0"
              alt="..."
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mt-14  text-gray-700 ">The Architectural <br></br> Language</h2>
            <p className="text-gray-600 text-sm font-medium  leading-6 my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>
            <p className="text-gray-600 text-sm font-medium  leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>
          </div>
        </div>

      </section>

      <section className='p-8 py-14 md:px-24 w-full bg-gray-700'>
        <h2 className="text-3xl font-extrabold mb-8  text-white">Provide The Best <br></br> Services</h2>
        <p className="text-gray-300 text-sm font-medium  leading-6 sm:w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>

        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:gap-10 xlg:grid-cols-4'>
          <div className="border p-6 rounded-md">
            <div className=" text-gray-300" >
              <GiSparkles className='text-7xl' />
            </div>
            <div>
              <h3 className="text-white font-bold mb-8 mt-4 text-xl">Conceptualizing Yor Vision.</h3>
              <p className="text-sm text-gray-400 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur, assumenda aspernatur ex modi iure inventore earum natus dicta consequatur commodi id autem debitis placeat?</p>
            </div>
          </div>

          <div className="border p-6 rounded-md">
            <div className=" text-gray-300" >
              <GiGears className='text-7xl' />

            </div>
            <div>
              <h3 className="text-white font-bold my-8 text-xl">Comprehensive Solutions</h3>
              <p className="text-sm text-gray-400 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur, assumenda aspernatur ex modi iure inventore earum natus dicta consequatur commodi id autem debitis placeat?</p>
            </div>
          </div>

          <div className="border p-6 rounded-md">
            <div className=" text-gray-300" >
              <GiBrickWall className='text-7xl' />

            </div>
            <div>
              <h3 className="text-white font-bold my-8 text-xl">Construction Expertise.</h3>
              <p className="text-sm text-gray-400 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur, assumenda aspernatur ex modi iure inventore earum natus dicta consequatur commodi id autem debitis placeat?</p>
            </div>
          </div>
          <div className="border p-6 rounded-md">
            <div className=" text-gray-300" >
              <GiAchievement className='text-7xl' />

            </div>
            <div>
              <h3 className="text-white font-bold my-8 text-xl">Collaborative Excellence</h3>
              <p className="text-sm text-gray-400 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, pariatur, assumenda aspernatur ex modi iure inventore earum natus dicta consequatur commodi id autem debitis placeat?</p>
            </div>
          </div>
        </div>
      </section>
      <section className='p-8 py-14 md:px-24 w-full md:grid grid-cols-2 gap-12'>
        <div className='md:py-12'>
          <h2 className="text-3xl font-extrabold  text-gray-700 ">Our Constuction Legacy</h2>
          <p className='text-gray-700 text-sm font-medium  py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae?</p>
          <p className="text-gray-600 text-sm font-medium  leading-6 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>
          <p className="text-gray-600 text-sm font-medium  leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>

        </div>
        <div className='mt-8 md:mt-0'>
          <Image
            src='/m.jpg'
            width={1920}
            height={1280}
            className="object-cover w-full h-full"
            alt="..."
          />
        </div>
      </section>

      <section className='p-8 pb-14 md:px-24 w-full'>
        <div>
          <h2 className="text-3xl font-extrabold  text-gray-700 ">Architectural  With People In Mind</h2>
          <p className='text-gray-700 text-sm font-medium  py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae?</p>
          <p className="text-gray-600 text-sm font-medium  leading-6 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>
          <p className="text-gray-600 text-sm font-medium  leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>

        </div>

      </section>

    </main>

  )
}
