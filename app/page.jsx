import Image from "next/image"
import {Facebook,Twitter,Linkedin,Check,Compass} from 'feather-icons-react/build/IconComponents'
import {FaTractor,FaBrush,FaQuestionCircle,FaCity,FaPencilRuler,FaPaintRoller,FaPaintBrush} from 'react-icons/fa'


import Button from "@/components/landing-button/btn"

export const metadata = {
            title: 'Build Africa | We Build For Generations',
            description: 'Page Description Will Go Here',
            author: 'Muwanguzi Joseph',
        
          }

export default function Home() {
  return (
    <main>
          <section className="w-full overflow-hidden relative hero">
              <Image
                 src='/cranes.jpg'
                 width={1920}
                 height={1280}
                 className="object-cover w-full h-full"

              />
              <div className="w-full h-full overlay absolute left-0 top-0  flex  flex-col justify-end">
                  <div className="flex-col flex px-12 pb-12 gap-8 md:w-1/2">
                     <h1 className="text-white font-bold text-5xl w-11/12 md:text-6xl  ">We Are <span className="text-green-500">Building</span> Experts</h1>
                     <p className="text-gray-200 leading-8 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ratione voluptate perferendis saepe repudiandae iste est nesciunt minus non praesentium.</p>
                     <Button/>
                  </div>
              </div>

          </section>

      <section className="w-full bg-gray-700  p-8 flex gap-10 justify-between px-14  flex-col lg:px-24">
       <p className="text-gray-400 text-sm md:w-1/2 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, dolore error at commodi cupiditate, exercitationem, ullam accusantium quod ducimus ea dolorem. Voluptates consequatur magni unde?</p>
       <div className="text-white flex gap-12 ">
          <Facebook/>
          <Twitter/>
          <Linkedin/>
       </div>
      </section>
      
      <section className="lg:flex md:mx-16 lg:gap-8 lg:px-24">
         <div className="px-12 pb-14 md:px-0">
              <h2 className="text-2xl font-bold mt-14 mb-10 text-slate-700">We Are Leaders In Construction</h2>
              <p className="text-gray-600 text-sm lg:w-3/4 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>
             
              <div className="mt-6 flex flex-col gap-6 justify-evenly">
                    <div className="flex gap-6 items-center" >
                        <Check className="text-green-500"/>
                        <span className="font-semibold text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, neque!</span>
                    </div>
                    <div className="flex gap-6 items-center" >
                        <Check className="text-green-500"/>
                        <span className="font-semibold text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, neque!</span>
                    </div>
                    <div className="flex gap-6 items-center" >
                        <Check className="text-green-500"/>
                        <span className="font-semibold text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, neque!</span>
                    </div>
                    <div className="flex gap-6 items-center" >
                        <Check className="text-green-500"/>
                        <span className="font-semibold text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, neque!</span>
                    </div>
              </div>

          </div>

         <div className="relative">
              <Image
                alt="..."
                src='/a.jpg'
                width={1000}
                height={500}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-44  bg-white p-2">
                    <div className="flex  items-center flex-col">
                        <span className="text-green-500 font-bold text-xl">46+</span>
                        <small className="text-gray-7000 font-semibold">Lorem, ipsum.</small>
                    </div>
                    <div className="flex  items-center flex-col mt-2">
                        <span className="text-green-500 font-bold text-xl">90%</span>
                        <small className="text-gray-7000 font-semibold">Lorem, ipsum</small>
                    </div>
              </div>
          </div>
      </section>

      <section className="w-full bg-gray-700 px-12 sm:px-16 py-14 lg:flex  lg:px-24">
         <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold  mb-10 text-white">Providing Solutions For Construction</h2>
              <p className="text-gray-400 text-base lg:w-3/4 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam maxime, adipisci rerum illum consequatur repellat? Aspernatur maxime voluptates voluptatem impedit. Repudiandae asperiores quia porro mollitia.</p>
              <div className="mt-8 w-60  grid grid-cols-2 gap-8">
                    <div className="flex   flex-col">
                        <span className="text-white font-bold text-3xl">46+</span>
                        <small className="text-gray-200 font-semibold">Lorem, ipsum.</small>
                    </div>
                    <div className="flex   flex-col">
                        <span className="text-white font-bold text-3xl">46+</span>
                        <small className="text-gray-200 font-semibold">Lorem, ipsum.</small>
                    </div>
                    <div className="flex   flex-col">
                        <span className="text-white font-bold text-3xl">46+</span>
                        <small className="text-gray-200 font-semibold">Lorem, ipsum.</small>
                    </div>
                    <div className="flex   flex-col">
                        <span className="text-white font-bold text-3xl">46+</span>
                        <small className="text-gray-200 font-semibold">Lorem, ipsum.</small>
                    </div>
              </div>
         </div>
        <div className="bg-white p-8 mt-12">
           <div className="flex gap-6 border-b pb-6 h-auto sm:h-24 flex-col sm:flex-row">
               <div className=" border border-green-500  w-24 h-24 sm:h-full text-green-500 flex items-center justify-center" >
               <Compass/>
               </div>
               <div>
                   <h3 className="text-gray-700 font-semibold mb-3">Lorem ipsum dolor sit amet.</h3>
                   <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti verit</p>
               </div>
           </div>
           <div className="flex gap-6 border-b pb-6 h-auto sm:h-24 flex-col sm:flex-row mt-4">
               <div className=" border border-green-500  w-24 h-24 sm:h-full text-green-500 flex items-center justify-center" >
               <Compass/>
               </div>
               <div>
                   <h3 className="text-gray-700 font-semibold mb-3">Lorem ipsum dolor sit amet.</h3>
                   <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti verit</p>
               </div>
           </div>
           <div className="flex gap-6 border-b pb-6 h-auto sm:h-24 flex-col sm:flex-row mt-4">
               <div className=" border border-green-500  w-24 h-24 sm:h-full text-green-500 flex items-center justify-center" >
               <Compass/>
               </div>
               <div>
                   <h3 className="text-gray-700 font-semibold mb-3">Lorem ipsum dolor sit amet.</h3>
                   <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti verit</p>
               </div>
           </div>

        </div>

      </section>
           

      <section className="px-12 py-14 sm:p-14 lg:px-24">
           <div className="flex flex-col items-center"> 
              <h2 className="text-2xl font-bold  mb-10 text-gray-700" id="services">Our Services</h2>
              <h3 className="text-gray-600 font-bold mb-3">Lorem, ipsum dolor.</h3>
               <p className="text-sm text-gray-500  leading-8 w-full sm:w-3/4 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reprehenderit accusamus ipsa tempore debitis magnam, deleniti vel commodi quisquam quia aliquam aut incidunt natus, architecto harum eaque ab ducimus exercitationem!</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mt-8 ">
                <div className=" p-6 shadow-sm shadow-green-500 hover:shadow-md">
                        <div className=" w-20 h-20  text-green-500 flex items-center justify-center" >
                            <FaTractor className="text-5xl text-" />
                        </div>
                        <div>
                            <h4 className="text-green-500 font-bold my-3 text-base">Construction</h4>
                            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti verit</p>
                        </div>
                </div>
                <div className="p-6 shadow-sm  shadow-green-500">
                        <div className=" w-20 h-20  text-green-500 flex items-center justify-center" >
                        <FaCity className="text-5xl text-" />
                        </div>
                        <div>
                            <h4 className="text-green-500 font-bold my-3 text-base">Special Project</h4>
                            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti verit</p>
                        </div>
                </div>
                <div className="p-6 shadow-sm shadow-green-500">
                        <div className=" w-20 h-20  text-green-500 flex items-center justify-center" >
                        <FaQuestionCircle className="text-5xl text-" />
                        </div>
                        <div>
                            <h4 className="text-green-500 font-bold my-3 text-base">Consulting</h4>
                            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti verit</p>
                        </div>
                </div>
                <div className="p-6 shadow-sm shadow-green-500">
                        <div className=" w-20 h-20  text-green-500 flex items-center justify-center" >
                        <FaPaintBrush className="text-5xl text-" />

                        </div>
                        <div>
                            <h4 className="text-green-500 font-bold my-3 text-base">Renovation</h4>
                            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti verit</p>
                        </div>
                </div>
                <div className="p-6 shadow-sm shadow-green-500">
                        <div className=" w-20 h-20  text-green-500 flex items-center justify-center" >
                        <FaPencilRuler className="text-5xl text-" />
                        </div>
                        <div>
                            <h4 className="text-green-500 font-bold my-3 text-base">Architecture</h4>
                            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti verit</p>
                        </div>
                </div>
                <div className="p-6 shadow-sm shadow-green-500">
                        <div className=" w-20 h-20  text-green-500 flex items-center justify-center" >
                        <FaPaintRoller className="text-5xl text-" />
                        </div>
                        <div>
                            <h4 className="text-green-500 font-bold my-3 text-base">Interior Design</h4>
                            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae corrupti verit</p>
                        </div>
                </div>

            </div>

      </section>

      <section className="blue-bee py-24 w-full flex  items-center ">
        <div className="bg-gray-700  w-full sm:w-auto p-12 h-auto flex  flex-col md:flex-row justify-between opacity-95 gap-8">
           
            <div className="w-72">
               <h3 className="text-gray-200 font-semibold mb-3 text-base">Lorem, ipsum dolor.</h3>
               <p className="text-sm text-gray-400  leading-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reprehenderit accusamus ipsa tempore debitis magnam, deleniti vel commodi quisquam quia aliquam aut incidunt natus, architecto harum eaque ab ducimus exercitationem!</p>

            </div>
            <div className="w-72">
               <h3 className="text-gray-200 font-semibold mb-3 text-base">Lorem, ipsum dolor.</h3>
               <p className="text-sm text-gray-400  leading-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reprehenderit accusamus ipsa tempore debitis magnam, deleniti vel commodi quisquam quia aliquam aut incidunt natus, architecto harum eaque ab ducimus exercitationem!</p>

            </div>

        </div>
      </section>

      <section className='bg-gray-700 grid-cols-1 grid sm:grid-cols-2  sm:gap-12 '>
               <Image
                alt="..."
                src='/g.jpg'
                width={1000}
                height={500}
                className="h-full w-full object-cover"
              />
            
             <div className="p-12">
                <h2 className="text-2xl font-bold  mb-10 text-white">Bringing Your Ideas And Innovatios To Life</h2>
                <p className="text-sm text-gray-400 mb-8 leading-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reprehenderit accusamus ipsa tempore debitis magnam, deleniti vel commodi quisquam quia aliquam aut incidunt natus, architecto harum eaque ab ducimus exercitationem!</p>
                <p className="text-sm text-gray-400  leading-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reprehenderit accusamus ipsa tempore debitis magnam, deleniti vel commodi quisquam quia aliquam aut incidunt natus, architecto harum eaque ab ducimus exercitationem!</p>
             </div>
              
      </section >
      <section className="py-16">
        <div className="px-12 sm:px-16">
            <h2 className="text-2xl font-bold  mb-10 text-gray-700">Bringing Your Ideas And Innovatios To Life</h2>
            <p className="text-sm text-gray-600 mb-10 leading-8 lg:w-3/4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reprehenderit accusamus ipsa tempore debitis magnam, deleniti vel commodi quisquam quia aliquam aut incidunt natus, architecto harum eaque ab ducimus exercitationem!</p>
        </div>
        <div className="grid h-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:h-72 gap-2">
              <div>
                 <Image
                   alt="..."
                   src='/f.jpg'
                   width={1000}
                   height={500}
                   className="h-full w-full object-cover"
              />
              </div>
              <div>
                 <Image
                   alt="..."
                   src='/b.jpg'
                   width={1000}
                   height={500}
                   className="h-full w-full object-cover"
              />
              </div>
              <div>
                 <Image
                   alt="..."
                   src='/d.jpg'
                   width={1000}
                   height={500}
                   className="h-full w-full object-cover"
              />
              </div>
              <div>
                 <Image
                   alt="..."
                   src='/c.jpg'
                   width={1000}
                   height={500}
                   className="h-full w-full object-cover"
              />
              </div>
        </div>
      </section>

    </main>
  )
}
