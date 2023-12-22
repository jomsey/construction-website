import React from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'

export default function Home() {
    return (
        <section className='grid grid-cols-3 p-8 gap-8'>
            <div className='bg-white p-4 rounded'>
                <h2 className='text-gray-600 text-base font-bold'>Messages</h2>
                <div className="relative h-10 rounded-full overflow-hidden my-4">
                    <form action="" method="get" className="relative w-full h-full ">
                        <input type="text" name="" id="" placeholder="search" className="w-full bg-gray-200 outline-none h-full px-5 text-sm text-gray-500" />
                        <GiMagnifyingGlass className="absolute  top-1/2  -translate-y-1/2 right-4 text-gray-400" />
                    </form>
                </div>

                <div className='flex flex-col gap-3'>
                    <Message />
                    <Message />
                    <Message badgeColor='bg-red-400' />
                    <Message />
                    <Message />
                    <Message />
                </div>
                <button className='border w-full rounded-2xl text-center mt-5 py-2 font-semibold text-sm text-green-500 border-green-500'>View More</button>
            </div>

            <div className='bg-white p-4 rounded'>
                <h2 className='text-gray-600 text-base font-bold'>MailingList</h2>
                <div className="relative h-10 rounded-full overflow-hidden my-4">
                    <form action="" method="get" className="relative w-full h-full ">
                        <input type="text" name="" id="" placeholder="search" className="w-full bg-gray-200 outline-none h-full px-5 text-sm text-gray-500" />
                        <GiMagnifyingGlass className="absolute  top-1/2  -translate-y-1/2 right-4 text-gray-400" />
                    </form>
                </div>

                <div className='flex flex-col gap-3'>
                    <MailingListItem />
                    <MailingListItem />
                    <MailingListItem />
                    <MailingListItem />
                    <MailingListItem />
                    <MailingListItem />
                    <MailingListItem />
                    <MailingListItem />
                </div>
                <button className='border w-full rounded-2xl text-center mt-5 py-2 font-semibold text-sm text-green-500 border-green-500'>View More</button>
            </div>
        </section>
    )
}


function Message({ badgeColor }) {
    return (
        <div className='bg-white shadow-lg rounded-lg p-4 relative overflow-hidden cursor-pointer'>
            <div className='flex items-center gap-4 relative'>
                <small className='text-gray-400 absolute top-0 right-3'>Dec 12</small>
                <span className={`rounded-full p-3 w-8 h-8 ${badgeColor || 'bg-blue-500'}  text-white flex items-center justify-center font-bold text-2xl`}>P</span>
                <div>
                    <span className="text-gay-700 text-sm font-semibold">John Doe</span>
                    <small className='text-sm text-gray-600 block'>Lorem ipsum dolor sit amet  ... </small>
                </div>
            </div>

        </div>
    )
}


function MailingListItem() {
    return (
        <div className='bg-white shadow-lg rounded-lg p-4  overflow-hidden cursor-pointer'>
            <span className='text-sm text-gray-600 '>muwanguzijoseph75@gmail.com</span>
        </div>
    )
}