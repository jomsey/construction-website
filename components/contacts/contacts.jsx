import { Facebook, Twitter, Linkedin, Phone } from 'feather-icons-react/build/IconComponents'


export default function Contact() {
    async function handleFormSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const response = await fetch('/api/contact', {
            method: "POST",
            body: {
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("emmail"),
                message: formData.get("message")
            }
        })

        // const data = await response.json()


    }
    return (
        <>
            <section className="bg-gray-700 px-8 sm:px-16 w-full py-12 md:grid grid-cols-2 gap-4 lg:gap-12 lg:px-24">
                <div className="overflow-hidden">
                    <h2 className="text-3xl font-extrabold  mb-10 text-white" data-aos="fade-right">Do You Have A Question?</h2>
                    <p className="text-sm text-gray-400 font-medium leading-8 sm:w-3/4" data-aos="fade-right">Ready to embark on a journey of architectural and construction excellence? Contact us to initiate a conversation about your project. Whether you have a clear vision or are seeking inspiration, our team is eager to collaborate and turn your ideas into tangible, awe-inspiring realities.</p>

                    <div className="pt-10 grid  gap-4 ">
                        <div className="flex gap-2" data-aos="fade-right">
                            <div className=" border border-white w-11 h-11 flex justify-center items-center text-white">
                                <Phone />
                            </div>
                            <div >
                                <small className="text-green-500 font-bold block">Phone</small>
                                <small className="text-gray-200 mt-1 block">+254-000-000-000</small>
                            </div>
                        </div>
                        <div className="flex gap-2" data-aos="fade-right">
                            <div className=" border border-white w-11 h-11 flex justify-center items-center text-white">
                                <Facebook />
                            </div>
                            <div >
                                <small className="text-green-500 font-bold block">Facebook</small>
                                <small className="text-gray-200 mt-1 block">simo</small>
                            </div>
                        </div><div className="flex gap-2" data-aos="fade-right">
                            <div className=" border border-white w-11 h-11 flex justify-center items-center text-white">
                                <Twitter />
                            </div>
                            <div >
                                <small className="text-green-500 font-bold block">Twitter</small>
                                <small className="text-gray-200 mt-1 block">simo</small>
                            </div>
                        </div><div className="flex gap-2" data-aos="fade-right">
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
                    <h3 className="text-2xl font-bold md:mt-0 my-10 text-white " data-aos="fade-left">Get In Touch !!</h3>
                    <p className="text-sm text-gray-400 font-medium leading-8" data-aos="fade-up">Feel free to reach outto us for any inquiries or to discuss your poject further.We look forard to collaborate with you </p>
                    <form onSubmit={handleFormSubmit} className="mt-8 flex flex-col gap-5" method="POST">
                        <div className='flex flex-col gap-5 sm:flex-row'>
                            <input className="p-3 text-sm focus:outline-0 text-gray-600 sm:w-full" placeholder="Name" name="name" type="text" data-aos="fade-up" />
                            <input className="p-3 text-sm focus:outline-0 text-gray-600 sm:w-full" placeholder="Phone" name="phone" type="phone" data-aos="fade-up" />
                        </div>
                        <input className="p-3 text-sm focus:outline-0 text-gray-600 sm:w-full" placeholder="Email" name="email" type="email" data-aos="fade-up" />
                        <textarea className="p-3 text-sm focus:outline-0 text-gray-600 sm:w-full" placeholder=" Message" name="email" data-aos="fade-up"></textarea>
                        <button className="bg-green-500 text-white px-6 py-3 text-base font-semibold w-max" type="submit" data-aos="fade-up">Send</button>
                    </form>
                </div>
            </section>

            <section className="w-full px-8 sm:px-16 py-6 bg-gray-700 sm:flex gap-12 border-t border-b border-gray-500 lg:px-24">
                <div className="sm:w-1/2">
                    <h4 className="text-green-500 font-extrabold text-xl">Subscribe To Our News Letter</h4>
                    <p className="text-sm mt-4 text-gray-400 font-medium  leading-8">Stay updated wit our latest projects, industry isights and exclusive offers by subscribing to our newsleter.</p>
                </div>
                <form className="mt-4 flex flex-col sm:flex-row h-max relative sm:w-1/2 sm:top-8">
                    <input className="p-3 text-sm focus:outline-0 text-gray-600 sm:w-full" placeholder="Email" type="email" />
                    <button className="bg-green-500 text-white p-3 text-sm font-bold sm:w-1/2" type="submit">Subscribe</button>
                </form>
            </section>
        </>
    );
}