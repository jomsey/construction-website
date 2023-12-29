import React from 'react'
import MessageCard from '../message/message'
import emails from "@/app/admin/lib/messages.json"


export default function MessagesList() {

    return (
        <div className='border-t pt-8'>
            <div className={`grid grid-cols-2 sm:grid-cols-3 gap-5 mt-5 `}>
                {emails.map(m => (<MessageCard message={m.message} dateCreated={m.date} sentBy={m.email} key={m.email} />))}
            </div>
        </div>
    )
}


