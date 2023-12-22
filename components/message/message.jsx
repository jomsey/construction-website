'use client'
import { MessageContext } from '@/providers/messages-privider'
import Loader from 'feather-icons-react/build/IconComponents/Loader'
import React from 'react'

export default function MessageCard({ badgeColor }) {
    const { setMessageDetailsVisible } = React.useContext(MessageContext)

    return (
        <div className='bg-white shadow-md rounded-lg p-4 relative overflow-hidden cursor-pointer' onClick={() => setMessageDetailsVisible(true)}>
            <div className='flex items-end gap-5 border-b pb-2 relative'>
                <small className='text-gray-400 absolute top-0 right-3'>Dec 12</small>
                <span className={`rounded-full p-3 w-8 h-8 ${badgeColor || 'bg-blue-500'} text-white flex items-center justify-center font-bold text-2xl`}>P</span>
                <span className="text-gay-700 text-sm font-semibold">John Doe</span>
            </div>
            <div>
                <p className='text-sm text-gray-600 my-4'>Lorem ipsum dolor sit amet consectetur ad ... </p>
            </div>
        </div>
    )
}

function MessageDeleteOverlay() {
    return (
        <div className='absolute left-0 top-0 w-full h-full flex  flex-col gap-2 justify-center items-center bg-gray-800 opacity-90'>
            <Loader className='text-green-500 animate-spin relative z-50' />
            <small className='text-white'>deleting message</small>
        </div>
    )
}
