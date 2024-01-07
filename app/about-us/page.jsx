import Image from 'next/image';
import { GiAchievement, GiGears, GiBrickWall, GiSparkles } from "react-icons/gi"

export const metadata = {
  title: 'Build Africa | About Us',
  description: 'Step into the tranformative world of Build Africa that shapes not just structures but the future.From residential marvels to commercial hubs, each structure is  a testament to our commitment to excellence.',
  authors: 'Muwanguzi Joseph',

}

export default function AboutUs() {
  return (
    <main>
      <section className='about-us-landing bg-center w-full px-12 flex flex-col justify-center lg:px-24 mt-1' >
        <div>
          <h1 className="text-white font-bold text-5xl w-11/12 md:text-6xl  md:w-1/2">Shaping Spaces</h1>
          <button className='text-white font-semibold border-white border py-3 px-5 mt-8'>See Our Work</button>
        </div>
      </section>

      <section className="p-8 md:px-24 w-full lg:flex gap-12  py-14">
        <div className="rounded-md overflow-hidden" data-aos="fade-top">
          <Image
            src='/h.jpg'
            width={1920}
            height={1280}
            className="object-cover w-full h-full"
            alt="..."
          />
        </div>

        <div className="flex flex-col-reverse gap-12">
          <div className="overflow-hidden rounded-md" data-aos="fade-top">
            <Image
              src='/new-home.jpg'
              width={1920}
              height={1280}
              className="object-cover w-full h-full mt-8 md:mt-0"
              alt="..."
            />
          </div>

          <div>
            <h2 className="mt-14" data-aos="fade-top">The Architectural <br></br> Language</h2>
            <p className="text-gray-600 text-sm font-medium  leading-6 my-8" data-aos="fade-up">Build Africa is more than just a construction company; it's a vision brought
              to life. Our journey began with a commitment to redefine infrastructure in
              Africa, and today, we stand as a symbol of innovation and reliability in the
              construction industry.</p>
            <p className="text-gray-600 text-sm font-medium  leading-6" data-aos="fade-top">At Build Africa, our mission goes beyond erecting structures; it's about
              building communities and fostering sustainable development. With a team of
              dedicated professionals, we bring a wealth of experience and expertise to
              every project, ensuring excellence in execution and a lasting impact on the
              landscapes we shape.</p>
          </div>
        </div>

      </section>

      <section className='p-8 py-14 md:px-24 w-full bg-gray-700'>
        <h2 data-aos="fade-up">Provide The Best Services</h2>
        <p className="text-gray-300 text-sm font-medium  leading-8 sm:w-3/4" data-aos="fade-up">Build Africa is committed to provide unparalleled  services that priotise quality, efficiency, and client satisfaction.With focus on excellence, our team is dedicated  and strives to deliver superior results in every aspect of our offerings.We  priotize clear commuication, attention to detail, and innovative solutions to ensure that our services not only meet but exceed your expectations.Trust us to bring your vision to life with expertise, liability, and a commitment to excellence.</p>

        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:gap-10 xlg:grid-cols-4'>
          <div className="border p-6 rounded-md" data-aos="fade-up">
            <div className=" text-gray-300" >
              <GiSparkles className='text-7xl' />
            </div>
            <div>
              <h3 className="text-green-500 font-medium my-8 text-xl">Conceptualizing Yor Vision.</h3>
              <p className="text-sm text-gray-400 font-medium">Our conceptualization phase is a dynamic journey that evolves in response to your feedback.We priotize not only capturing the essence of your vission but also enhancing it with our expertise in construction, design and project management.</p>
            </div>
          </div>

          <div className="border p-6 rounded-md" data-aos="fade-up">
            <div className=" text-gray-300" >
              <GiGears className='text-7xl' />

            </div>
            <div>
              <h3 className="text-green-500 font-medium my-8 text-xl">Comprehensive Solutions</h3>
              <p className="text-sm text-gray-400 font-medium">Our approach extends beyond conventional services to provide a comprehensive solution that addresses every facet of your project. From initial concept to final execution, we integrate expertise in construction, special projects, consulting, renovation, architecture, and interior design, ensuring a seamless and holistic experience.</p>
            </div>
          </div>

          <div className="border p-6 rounded-md" data-aos="fade-up">
            <div className=" text-gray-300" >
              <GiBrickWall className='text-7xl' />

            </div>
            <div>
              <h3 className="text-green-500 font-medium my-8 text-xl">Construction Expertise.</h3>
              <p className="text-sm text-gray-400 font-medium">Our construction expertise is grounded in a profound understanding of industry best practices, cutting-edge technologies, and a commitment to delivering projects with precision. With a seasoned team of professionals, we bring a wealth of experience to every construction endeavor.</p>
            </div>
          </div>
          <div className="border p-6 rounded-md" data-aos="fade-up">
            <div className=" text-gray-300" >
              <GiAchievement className='text-7xl' />

            </div>
            <div>
              <h3 className="text-green-500 font-medium my-8 text-xl">Collaborative Excellence</h3>
              <p className="text-sm text-gray-400 font-medium">In embracing collaborative excellence, we integrate diverse perspectives, ensuring that every aspect of the project benefits from a holistic understanding.Together, we navigate challenges, seize opportunities, and deliver projects marked by innovation, efficiency, and a shared commitment to excellence. </p>
            </div>
          </div>
        </div>
      </section>
      <section className='p-8 py-14 md:px-24 w-full md:grid grid-cols-2 gap-12'>
        <div className='md:py-12'>
          <h2 data-aos="fade-right">Our Constuction Legacy</h2>
          <p className='text-gray-700 text-sm font-medium  leading-8 py-6' data-aos="fade-right">Our construction legacy is built on a foundation of unwavering commitment, decades of expertise, and a history of delivering landmark projects. With a track record marked by excellence, we take pride in shaping the built environment and contributing to the infrastructure that defines communities.</p>
          <p className="text-gray-600 text-sm font-medium  leading-8" data-aos="fade-right">From iconic structures to essential facilities, our legacy reflects a dedication to quality craftsmanship, innovative solutions, and a client-centric approach. Each completed project stands as a testament to our enduring commitment to construction excellence. As we continue to evolve, our construction legacy remains a source of inspiration, guiding us to new heights and setting benchmarks for the industry.</p>

        </div>
        <div className='mt-8 md:mt-0 rounded-md overflow-hidden' data-aos="fade-left">
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
          <h2 data-aos="fade-up">Architectural  With People In Mind</h2>
          <p className="text-gray-600 text-sm font-medium  leading-8 mb-6" data-aos="fade-up">Our architectural philosophy places people at the forefront, emphasizing designs that seamlessly integrate with human needs and experiences. We believe in creating spaces that not only captivate aesthetically but also enhance the well-being and functionality of those who inhabit them.</p>
          <p className="text-gray-600 text-sm font-medium  leading-8" data-aos="fade-up">By prioritizing human-centric design principles, we ensure that our architectural solutions go beyond mere structures, fostering environments that are comfortable, accessible, and responsive to the diverse needs of individuals. From communal spaces to private sanctuaries, our architecture with people in mind aims to enrich daily lives, promote connectivity, and contribute positively to the human experience within the built environment.</p>

        </div>

      </section>

    </main>

  )
}
