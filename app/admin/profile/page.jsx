import React from 'react'

export default function Profilee() {
    return (
        <main className='grid md:grid-cols-3  w-full h-full p-10'>
            <section>
                <div className='md:flex items-center flex-col'>
                    <div className='hidden md:block w-32 h-32  rounded-full bg-gray-50'>
                    </div>
                    <span className='text-sm w-full hidden md:block  font-bold text-gray-500 mt-5 text-center'>Jomsey</span>
                    <button className='text-gray-50 py-2 px-12 text-sm bg-green-600 rounded-full mb-8 md:my-8'>Edit Profile</button>
                </div>
            </section>

            <section className="bg-gray-50 p-8 rounded-md col-span-2">
                <h1 className='text-xl font-bold mb-8'>My Profile</h1>
                <div className='grid gap-5 '>
                    <div>
                        <h3 className='text-gray-700 font-semibold text-sm mb-2'>Username</h3>
                        <span className='text-sm w-full bg-gray-200  text-gray-500 p-3 rounded-sm block'>Jomsey</span>
                    </div>
                    <div>
                        <h3 className='text-gray-700 font-semibold text-sm mb-2'>First Name</h3>
                        <span className='text-sm w-full bg-gray-200 text-gray-500 p-3 rounded-sm block'>Muwanguzi</span>
                    </div>
                    <div>
                        <h3 className='text-gray-700 font-semibold text-sm mb-2'>Last Name</h3>
                        <span className='text-sm w-full bg-gray-200 text-gray-500 p-3 rounded-sm block'>Joseph</span>
                    </div>
                    <div>
                        <h3 className='text-gray-700 font-semibold text-sm mb-2'>Email</h3>
                        <span className='text-sm w-full bg-gray-200  text-gray-500 p-3 rounded-sm block'>jomseygmail.com</span>
                    </div>
                </div>
            </section>
        </main>
    )
}
