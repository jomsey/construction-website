import Selector from '@/components/selector/selector'
import React from 'react'
import { FaSearch } from 'react-icons/fa'


export default function Subscriptions() {
    return (
        <div className='p-16'>
            <div className=" grid grid-cols-4 gap-10  relative mb-5">
                <div className="col-span-2">
                    <h1 className='text-2xl font-bold text-gray-800'>Subscribers</h1>
                    <p className='text-sm text-gray-600 mt-4 w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, natus.</p>
                </div>
                <div className="relative h-10 rounded-3xl overflow-hidden  md:w-96 place-self-end">
                    <form action="" method="get" className="relative w-full h-full ">
                        <input type="text" name="" id="" placeholder="search messages" className="w-full bg-gray-200 outline-none h-full px-5 text-sm text-gray-700 placeholder:text-gray-500" />
                        <FaSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500" />
                    </form>
                </div>

            </div>
        </div>
    )
}
