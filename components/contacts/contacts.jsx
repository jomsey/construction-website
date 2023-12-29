import { Facebook, Twitter, Linkedin, Phone } from 'feather-icons-react/build/IconComponents'


export default function Contact() {
    return (
        <>
            <section className="bg-gray-700 px-12 sm:px-16 w-full py-12 md:flex gap-4 lg:gap-12 lg:px-24">
                <div>
                    <h2 className="text-3xl font-extrabold  mb-10 text-white">Do You Have A Question?</h2>
                    <p className="text-sm text-gray-400 font-medium leading-8 sm:w-3/4">Ready to embark on a journey of architectural and construction excellence? Contact us to initiate a conversation about your project. Whether you have a clear vision or are seeking inspiration, our team is eager to collaborate and turn your ideas into tangible, awe-inspiring realities.</p>

                    <div className="pt-10 grid  gap-4">
                        <div className="flex gap-2">
                            <div className=" border border-white w-11 h-11 flex justify-center items-center text-white">
                                <Phone />
                            </div>
                            <div >
                                <small className="text-green-500 font-bold block">Phone</small>
                                <small className="text-gray-200 mt-1 block">+254-000-000-000</small>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className=" border border-white w-11 h-11 flex justify-center items-center text-white">
                                <Facebook />
                            </div>
                            <div >
                                <small className="text-green-500 font-bold block">Facebook</small>
                                <small className="text-gray-200 mt-1 block">simo</small>
                            </div>
                        </div><div className="flex gap-2">
                            <div className=" border border-white w-11 h-11 flex justify-center items-center text-white">
                                <Twitter />
                            </div>
                            <div >
                                <small className="text-green-500 font-bold block">Twitter</small>
                                <small className="text-gray-200 mt-1 block">simo</small>
                            </div>
                        </div><div className="flex gap-2">
                            <div className=" border border-white w-11 h-11 flex justify-center items-center text-white">
                                <Linkedin />
                            </div>
                            <div >
                                <small className="text-green-500 font-bold block">LinkedIn</small>
                                <small className="text-gray-200 mt-1 block">simo</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold md:mt-0 my-10 text-white ">Get In Touch !!</h3>
                    <p className="text-sm text-gray-400 font-medium leading-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reprehenderit accusamus ipsa tempore debitis magnam, deleniti vel commodi quisquam quia aliquam aut incidunt natus, architecto harum eaq</p>
                    <form action="" className="mt-8 flex flex-col gap-5">

                        <div className='flex flex-col gap-5 sm:flex-row'>
                            <input className="p-3 text-sm focus:outline-0 text-gray-600 sm:w-full" placeholder="Name" type="text" />
                            <input className="p-3 text-sm focus:outline-0 text-gray-600 sm:w-full" placeholder="Phone" type="phone" />
                        </div>
                        <input className="p-3 text-sm focus:outline-0 text-gray-600 sm:w-full" placeholder="Email" type="email" />
                        <textarea className="p-3 text-sm focus:outline-0 text-gray-600 sm:w-full" placeholder=" Message"></textarea>
                        <button className="bg-green-500 text-white px-6 py-3 text-base font-semibold w-max" type="submit">Send</button>

                    </form>
                </div>
            </section>

            <section className="w-full px-12 sm:px-16 py-6 bg-gray-700 sm:flex gap-12 border-t border-b lg:px-24">
                <div className="sm:w-1/2">
                    <h4 className="text-green-500 font-extrabold text-xl">Subscribe To Our News Letter</h4>
                    <p className="text-sm mt-4 text-gray-400 font-medium  leading-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, reprehenderit accusamus ipsa tempore debitis magnam.</p>
                </div>
                <form className="mt-4 flex flex-col sm:flex-row h-max relative sm:w-1/2 sm:top-8">
                    <input className="p-3 text-sm focus:outline-0 text-gray-600 sm:w-full" placeholder="Email" type="email" />
                    <button className="bg-green-500 text-white p-3 text-sm font-bold sm:w-1/2" type="submit">Subscribe</button>
                </form>
            </section>
        </>
    );
}