import React from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'

export default function Home() {
    return (
        <section className='grid grid-cols-3 p-8 gap-8'>
            <div className="grid gap-8">
                <div className="bg-gray-700 rounded-md"></div>
                <div className="bg-gray-50 rounded-md p-10">
                    <h4 className="text-base text-gray-6 font-bold">Latest Activity</h4>
                </div>
            </div>
        </section>
    )
}




