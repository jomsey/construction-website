'use client'
import React from 'react'
import MessageCard from '../message/message'
import { GiStack } from 'react-icons/gi'
import MessageDetails from '../message-details/message-details'
import { MessageContext } from '@/providers/messages-privider'



export default function MessagesList() {
    const { messageDetailVisible, messagesStacked, setMessagesStacked } = React.useContext(MessageContext)

    return (
        <div className='border-t pt-8'>
            <GiStack className='text-gray-500 relative left-3/4 text-2xl cursor-pointer' onClick={() => messagesStacked ? setMessagesStacked(false) : setMessagesStacked(true)} />
            <div className={`grid ${messagesStacked ? 'grid-cols-1' : 'grid-cols-2 sm:grid-cols-3'} ease-linear duration-150 gap-5 mt-5 `}>
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
                <MessageCard />
            </div>
            {messageDetailVisible && <MessageDetails />}
        </div>
    )
}
