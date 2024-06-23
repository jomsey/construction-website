"use client"
import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { useRouter } from 'next/navigation'
import { Circle } from 'feather-icons-react/build/IconComponents'
import Loader from 'feather-icons-react/build/IconComponents/Loader'


export default function MessageCard({ message, dateCreated, sentBy, selectTriggered = false, id = 1, messageDeleting = false }) {
    const [messageSelected, setMessageSelected] = React.useState(false)
    const { push } = useRouter()

    const handleMessageClick = (messageId) => {
        if (!selectTriggered) {
            //redirect to message detail page
            push(`messages/${messageId}`)
        }
        else {
            messageSelected ? setMessageSelected(false) : setMessageSelected(true)
            //update selected messages list
        }

    }

    return (
        <div className='bg-white shadow-md rounded-lg p-4 relative overflow-hidden cursor-pointer' onClick={() => handleMessageClick(id)}>
            {selectTriggered &&
                !messageDeleting &&
                <div className="absolute right-5 top-5  text-green-600 border w-max z-10 mb-8 " >
                    <Circle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    {messageSelected && <GiCheckMark className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm" />}
                </div>}
            <div className='flex items-end gap-5 border-b pb-2 relative select-none'>
                <small className='text-gray-400 absolute top-3 right-3'>{dateCreated}</small>
                <span className={`rounded-full p-3 w-8 h-8 bg-blue-400  text-white flex items-center justify-center font-bold text-2xl`}>{sentBy.toUpperCase()[0]}</span>
                <span className="text-gray-700 text-sm font-semibold">John Doe</span>
            </div>
            <div>
                <p className='text-sm text-gray-600 my-4'>{message.length <= 80 ? message : message.slice(0, 81).concat(' ...')}</p>
            </div>
            {messageSelected && messageDeleting && <MessageDeleteOverlay />}
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
