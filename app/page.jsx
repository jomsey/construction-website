import Image from "next/image"
import { Facebook, Twitter, Linkedin } from 'feather-icons-react/build/IconComponents'
import { GiTrowel, GiPencilRuler, GiPaintRoller, GiCheckMark, GiMoneyStack, GiWeightLiftingUp, GiShakingHands, GiBinoculars, GiSparkles, GiThink, GiBrickWall } from 'react-icons/gi'
import Button from "@/components/landing-button/btn"

export const metadata = {
    title: 'Build Africa | We Build For Generations',
    description: 'Step into the tranformative world of Build Africa that shapes not just structures but the future.From residential marvels to commercial hubs, each structure is  a testament to our commitment to excellence.',
    authors: 'Muwanguzi Joseph',

}

export default function Home() {
    return (
        <main>
            <section className="w-full overflow-hidden relative h-96 hero">
                <Image
                    src='/cranes.jpg'
                    width={1920}
                    height={1280}
                    className="object-cover w-full h-full"
                    alt="..."

                />
                <div className="w-full h-full overlay absolute left-0 top-0  flex  flex-col justify-end">
                    <div className="flex-col flex px-8 sm:px-14 lg:px-24 pb-12 gap-8 md:w-1/2">
                        <h1 className="text-white font-bold text-5xl w-11/12 md:text-6xl  ">We Are <span className="text-green-500">Construction</span>  Experts</h1>
                        <p className="text-gray-200 leading-8 font-medium">We take pride in building the future by offering a comprehensive range of services that cater to diverse construction needs</p>
                        <Button />
                    </div>
                </div>

            </section>

            <section className="w-full bg-gray-700  px-8 py-14 sm:p-14 flex gap-10 justify-between flex-col lg:px-24 overflow-hidden">
                <p className="text-gray-400  md:w-1/2 leading-6 text-sm font-medium" data-aos="fade-up">Build Africa's commitment to excellence is evident in the breadth and depth of our offerings, designed to ensure that every project is approached with precision and expertise. From residential constructions that redefine modern living spaces to commercial developments that set new industry benchmarks, our services encompass the full spectrum of the construction landscape.</p>
                <div className="text-white flex gap-10 " data-aos="fade-up">
                    <Facebook className="text-green-500 cursor-pointer" />
                    <Twitter className="text-green-500 cursor-pointer" />
                    <Linkedin className="text-green-500 cursor-pointer" />
                </div>
            </section>

            <section className="lg:grid grid-cols-2  lg:gap-8 lg:px-24 overflow-hidden">
                <div className="px-8 sm:px-14 pb-14 md:px-0" >
                    <h2 className="mt-14 ">We Are Leaders In Construction</h2>
                    <p className="text-gray-600  lg:w-3/4 leading-6 text-sm font-medium" data-aos="fade-up">Our portfolio extends beyond traditional building methods; we specialize in cutting-edge techniques, sustainable practices, and innovative solutions. Whether it's constructing state-of-the-art structures, managing complex renovations, or providing expert consultation, our team of skilled professionals is dedicated to delivering results that stand the test of time. With a focus on quality craftsmanship, attention to detail, and a client-centric approach, we are not just constructing buildings; we are shaping the future, one project at a time. Embrace a new era in construction with Build Africa, where our services go beyond construction – they pave the way for a better, more sustainable tomorrow.</p>

                    <div className="mt-12 flex flex-col gap-6 justify-evenly">
                        <div className="flex gap-6 items-center" data-aos="fade-up" >
                            <GiCheckMark className="text-green-500 text-lg font-bold" />
                            <span className="font-bold text-sm text-gray-700">Architectural Design: Conceptualizing Your Vision</span>
                        </div>
                        <div className="flex gap-6 items-center" data-aos="fade-up" >
                            <GiCheckMark className="text-green-500 text-lg font-bold" />
                            <span className="font-bold text-sm text-gray-700">Construction Expertise: Building with Precision and Passion</span>
                        </div>
                        <div className="flex gap-6 items-center" data-aos="fade-up">
                            <GiCheckMark className="text-green-500 text-lg font-bold" />
                            <span className="font-bold text-sm text-gray-700">Comprehensive Solutions: From Blueprint to Reality</span>
                        </div>
                        <div className="flex gap-6 items-center" data-aos="fade-up">
                            <GiCheckMark className="text-green-500 text-lg font-bold" />
                            <span className="font-bold text-sm text-gray-700">Home Designs that Reflect Your Lifestyle</span>
                        </div>
                    </div>

                </div>

                <div className="relative " data-aos="fade-left">
                    <Image
                        alt="..."
                        src='/a.jpg'
                        width={1000}
                        height={500}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-44  bg-white p-4">
                        <div className="flex  items-center flex-col">
                            <span className="text-green-500 font-bold text-xl">46+</span>
                            <small className="text-gray-700 font-bold text-center">Client Success Stories</small>
                        </div>
                        <div className="flex  items-center flex-col mt-2">
                            <span className="text-green-500 font-bold text-xl">94%</span>
                            <small className="text-gray-700 font-bold text-center">Eco-Friendly Construction</small>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-700 px-8 sm:px-16 py-14 lg:grid grid-cols-2 lg:px-24">
                <div>
                    <h2 data-aos="fade-up">Innovative Construction Solutions</h2>
                    <p className="text-gray-400 text-sm font-medium lg:w-3/4 leading-6" data-aos="fade-up">The pride of Build Africa lies in delivering innovative solutions tailored to meet the unique demands of every project. Our commitment to pushing the boundaries of construction excellence is reflected in our approach to problem-solving and project execution. Whether faced with complex architectural challenges, tight timelines, or specific client requirements, our team thrives on creativity and adaptability.</p>
                    <div className="mt-8 w-60  grid grid-cols-2 gap-8" >
                        <div className="flex   flex-col" data-aos="fade-up">
                            <span className="text-green-500 font-bold text-3xl">46+</span>
                            <small className="text-gray-200 font-medium">Lorem, ipsum.</small>
                        </div>
                        <div className="flex   flex-col" data-aos="fade-up">
                            <span className="text-green-500 font-bold text-3xl">12+</span>
                            <small className="text-gray-200 font-medium">Latest Projects</small>
                        </div>
                        <div className="flex   flex-col" data-aos="fade-up">
                            <span className="text-green-500 font-bold text-3xl">58+</span>
                            <small className="text-gray-200 font-medium">Team Of Builders</small>
                        </div>
                        <div className="flex   flex-col" data-aos="fade-up">
                            <span className="text-green-500 font-bold text-3xl">60+</span>
                            <small className="text-gray-200 font-medium">Lorem, ipsum.</small>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 mt-12 lg:mt-0 overflow-hidden rounded-md">
                    <div className="flex gap-6 border-b pb-6 h-auto sm:h-24 flex-col sm:flex-row" data-aos="fade-left">
                        <div className="w-24 h-24 sm:h-full text-green-500 flex items-center justify-center" >
                            <GiBinoculars className="text-6xl" />
                        </div>
                        <div>
                            <h3 className="text-gray-700 font-semibold text-sm mb-3">Construction ManageMent</h3>
                            <p className="text-sm font-medium text-gray-500">Our management services ensure seamless coordination, timely execution, and adherence to quality standards.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 border-b pb-6 h-auto sm:h-24 flex-col sm:flex-row mt-4" data-aos="fade-left">
                        <div className="w-24 h-24 sm:h-full text-green-500 flex items-center justify-center" >
                            <GiShakingHands className="text-6xl" />

                        </div>
                        <div>
                            <h3 className="text-gray-700 font-semibold text-sm mb-3">General Contracting</h3>
                            <p className="text-sm font-medium text-gray-500">With a commitment to excellence, we transform blueprints into tangible, structurally sound realities</p>
                        </div>
                    </div>
                    <div className="flex gap-6 border-b pb-6 h-auto sm:h-24 flex-col sm:flex-row mt-4" data-aos="fade-left">
                        <div className="w-24 h-24 sm:h-full text-green-500 flex items-center justify-center" >
                            <GiWeightLiftingUp className="text-6xl" />

                        </div>
                        <div>
                            <h3 className="text-gray-700 font-semibold text-sm mb-3">Project Planning and Consultation</h3>
                            <p className="text-sm font-medium text-gray-500">We collaborate with clients to define project goals, timelines, and expectations for project success.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 border-b pb-6 h-auto sm:h-24 flex-col sm:flex-row mt-4" data-aos="fade-left">
                        <div className=" w-24 h-24 sm:h-full text-green-500 flex items-center justify-center" >
                            <GiMoneyStack className="text-6xl" />
                        </div>
                        <div>
                            <h3 className="text-gray-700 font-semibold text-sm mb-3">Cost Estimation and Budgeting</h3>
                            <p className="text-sm font-medium text-gray-500">We provide accurate and detailed cost assessments, to make informed  financial decisions.</p>
                        </div>
                    </div>

                </div>

            </section>


            <section className="px-8 py-14 sm:p-14 lg:px-24">
                <div className="flex flex-col items-center">
                    <h2 className=" w-max " id="services" data-aos="fade-up">Our Services</h2>
                    <p className="text-sm text-gray-600  leading-8 w-full sm:w-3/4 text-center font-medium" data-aos="fade-up">Our services revolve around a client-centric approach, where we not only understand your immediate needs but also anticipate future trends and advancements. By integrating cutting-edge technologies, sustainable practices, and industry best practices, we ensure that each project benefits from our innovative mindset. </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mt-16 " data-aos="fade-up">
                    <div className=" p-6 shadow-md border" data-aos="fade-up">
                        <div className=" w-24 h-20  text-green-500 flex items-center justify-center" >
                            <GiTrowel className="text-6xl text-" />
                        </div>
                        <div>
                            <h4 className="text-gray-600 font-bold my-3 text-xl">Construction</h4>
                            <p className="text-sm text-gray-600">We are setting new standards for quality and ingenuity in the construction industry.</p>
                        </div>
                    </div>
                    <div className="p-6 shadow-md border" data-aos="fade-up">
                        <div className=" w-20 h-20  text-green-500 flex items-center justify-center" >
                            <GiBrickWall className="text-6xl text-" />
                        </div>
                        <div>
                            <h4 className="text-gray-600 font-bold my-3 text-xl">Special Project</h4>
                            <p className="text-sm text-gray-600">Elevate your vision with our specialized project services.From conceptualization to execution.</p>
                        </div>
                    </div>
                    <div className="p-6 shadow-md border" data-aos="fade-up">
                        <div className=" w-20 h-20  text-green-500 flex items-center justify-center" >
                            <GiThink className="text-6xl text-" />
                        </div>
                        <div>
                            <h4 className="text-gray-600 font-bold my-3 text-xl">Consulting</h4>
                            <p className="text-sm text-gray-600">Our experienced personels offer strategic insights and guidance to optimize your construction.</p>
                        </div>
                    </div>
                    <div className="p-6 shadow-md border" data-aos="fade-up">
                        <div className=" w-20 h-20  text-green-500 flex items-center justify-center" >
                            <GiSparkles className="text-6xl text-" />

                        </div>
                        <div>
                            <h4 className="text-gray-600 font-bold my-3 text-xl">Renovation</h4>
                            <p className="text-sm text-gray-600">Transform and revitalize spaces with our renovation expertise.We bring a frseh perspective to enhance functionality.</p>
                        </div>
                    </div>
                    <div className="p-6 shadow-md border" data-aos="fade-up">
                        <div className=" w-20 h-20  text-green-500 flex items-center justify-center" >
                            <GiPencilRuler className="text-6xl text-" />
                        </div>
                        <div>
                            <h4 className="text-gray-600 font-bold my-3 text-xl">Architecture</h4>
                            <p className="text-sm text-gray-600">Crafting visionary designs that blend creativity with functionality bringing life to your concepts, ensuring harmonious balance between form and balance</p>
                        </div>
                    </div>
                    <div className="p-6 shadow-md border" data-aos="fade-up">
                        <div className=" w-20 h-20  text-green-500 flex items-center justify-center" >
                            <GiPaintRoller className="text-6xl text-" />
                        </div>
                        <div>
                            <h4 className="text-gray-600 font-bold my-3 text-xl">Interior Design</h4>
                            <p className="text-sm text-gray-600">We blend auethetics with practicality to create environments that resonate with your vision</p>
                        </div>
                    </div>

                </div>

            </section>

            <section className="blue-bee py-24 w-full flex  items-center ">
                <div className=" w-full sm:w-auto sm:p-12 p-8 h-auto grid md:grid-cols-2   relative gap-8">
                    <div className="absolute w-full h-full left-0 top-0 opacity-90 bg-gray-700">
                    </div>
                    <div className="w-72 z-10 md:pr-2 md:border-r relative">
                        <h3 className="text-green-500 font-bold mb-3 text-xl" data-aos="fade-right">Civil Engineering</h3>
                        <p className="text-sm text-gray-400 font-medium leading-8" data-aos="fade-up">Our civil engineering services form the backbone of robust infrastructure projects. From site development to structural analysis, our engineers bring technical expertise to ensure the integrity and longevity of the constructed elements. We take pride in engineering solutions that withstand the test of time.</p>

                    </div>
                    <div className="w-72 z-10  md:pr-2 relative">
                        <h3 className="text-green-500 font-bold mb-3 text-xl" data-aos="fade-left">Sustainability at the Core</h3>
                        <p className="text-sm text-gray-400  font-medium leading-8" data-aos="fade-up">Sustainability isn't just a trend; it's a fundamental aspect of our ethos. Build Africa is dedicated to integrating eco-friendly practices into our designs and construction methodologies. From energy-efficient structures to green building technologies, we are committed to building a sustainable future.</p>

                    </div>

                </div>
            </section>

            <section className='bg-gray-700 grid-cols-1 grid sm:grid-cols-2  sm:gap-12 overflow-hidden '>
                <Image
                    alt="..."
                    src='/am.jpg'
                    width={1280}
                    height={853}
                    className="h-full w-full object-cover"
                    data-aos="fade-right"

                />

                <div className="sm:p-12 p-8" >
                    <h2 data-aos="fade-left">Craftsmanship Beyond Compare</h2>
                    <p className="text-sm font-medium text-gray-400 mb-8 leading-8 " data-aos="fade-up">Discover craftsmanship that goes beyond industry standards. Our construction excellence is marked by attention to detail, quality materials, and a dedication to delivering structures that withstand the test of time. Explore how we elevate construction to an art form with precision and passion.</p>
                    <p className="text-sm font-medium text-gray-400  leading-8" data-aos="fade-up">We are not just constructing buildings; we are building tomorrow's landmarks. From residential marvels to commercial hubs, each structure is a testament to our commitment to excellence and forward-thinking design.</p>
                </div>

            </section >
            <section className="pt-16">
                <div className="px-8 sm:px-16 lg:px-24">
                    <h2 data-aos="fade-up">Your Vision, Our Mission</h2>
                    <p className="text-sm font-medium text-gray-600 mb-10 leading-8 lg:w-3/4" data-aos="fade-up">Our vision is at the heart of our mission. Whether you're embarking on a new project or revitalizing an existing space, we are here to bring your aspirations to life. Explore how our client-centric approach and collaborative spirit make your dreams the focal point of every structure we create.</p>
                </div>
                <div className="grid h-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:h-72  overflow-hidden" >
                    <div data-aos="fade-up">
                        <Image
                            alt="..."
                            src='/f.jpg'
                            width={1000}
                            height={500}
                            className="h-full w-full object-cover"
                        />
                    </div >
                    <div data-aos="fade-up">
                        <Image
                            alt="..."
                            src='/b.jpg'
                            width={1000}
                            height={500}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div data-aos="fade-up">
                        <Image
                            alt="..."
                            src='/d.jpg'
                            width={1000}
                            height={500}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div data-aos="fade-up">
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
