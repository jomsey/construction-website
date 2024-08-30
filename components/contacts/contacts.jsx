"use client"
import { Facebook, Twitter, Linkedin, Phone } from 'feather-icons-react/build/IconComponents'
import React from "react"
import SubscribeForm from '../subscription-form/form';
import ContactForm from '../contact-form/form';


export default function Contact() {
    
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
                                <small className="text-gray-200 mt-1 block">buildafrica</small>
                            </div>
                        </div><div className="flex gap-2" data-aos="fade-right">
                            <div className=" border border-white w-11 h-11 flex justify-center items-center text-white">
                                <Twitter />
                            </div>
                            <div >
                                <small className="text-green-500 font-bold block">Twitter</small>
                                <small className="text-gray-200 mt-1 block">buildafrica</small>
                            </div>
                        </div><div className="flex gap-2" data-aos="fade-right">
                            <div className=" border border-white w-11 h-11 flex justify-center items-center text-white">
                                <Linkedin />
                            </div>
                            <div >
                                <small className="text-green-500 font-bold block">LinkedIn</small>
                                <small className="text-gray-200 mt-1 block">buildafrica</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold md:mt-0 my-10 text-white " data-aos="fade-left">Get In Touch !!</h3>
                    <p className="text-sm text-gray-400 font-medium leading-8" data-aos="fade-up">Feel free to reach out to us for any inquiries or to discuss your project further.We look forard to collaborate with you </p>
                    <ContactForm/>
                </div>
            </section>

            <section className="w-full px-8 sm:px-16 py-6 bg-gray-700 sm:flex gap-12 border-t border-b border-gray-500 lg:px-24">
                <div className="sm:w-1/2">
                    <h4 className="text-green-500 font-extrabold text-xl">Subscribe To Our News Letter</h4>
                    <p className="text-sm mt-4 text-gray-400 font-medium  leading-8">Stay updated wit our latest projects, industry insights and exclusive offers by subscribing to our newsleter.</p>
                </div>
                <div className="mt-4  sm:w-1/2 sm:top-8">
                   <SubscribeForm/>
                </div>
            </section>
        </>
    );
}