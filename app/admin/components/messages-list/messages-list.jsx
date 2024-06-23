"use client"
import React from 'react'
import MessageCard from '../message/message'
import messages from "@/app/admin/lib/messages.json"
import { FaListCheck, FaList } from "react-icons/fa6"
import DropDown from "@/app/admin/components/filters/sort-items-drop-down";
import { FaTrash, FaSearch } from 'react-icons/fa'
import Pagination from '../pagination/Pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { GiTrashCan } from 'react-icons/gi'




export default function MessagesList() {
    const [messagesSelected, setMessagesSelected] = React.useState(false)
    const [deletingMessages, setDeletingMessages] = React.useState(false)
    const searchParams = useSearchParams()
    const [currentPage, setCurrentPage] = React.useState(parseInt(searchParams.get('page')) || 1)
    const pageSize = 9
    const totalpages = Math.ceil(messages.length / pageSize)
    const pathName = usePathname()
    const params = new URLSearchParams(searchParams)
    const { replace } = useRouter()

    //get current page from url
    currentPage > 1 ? params.set('page', currentPage) : params.delete('page')

    const sortMessagesByList = [
        { id: 1, title: 'Newest' },
        { id: 2, title: 'Names' },
        { id: 3, title: 'Emails' }
    ]

    const handleSelectedMessagesDelete = () => {
        //disable message selection
        setMessagesSelected(false)
        //delete the selected messages
        setDeletingMessages(true)

    }

    const handleMessageSearch = (searchTerm) => {
        searchTerm ? params.set("query", searchTerm) : params.delete("query")
        //update the url
        replace(`${pathName}?${params.toString()}`)

    }


    return (
        <div className='border-t '>

            <div className='border-b py-8 mb-6 grid md:grid-cols-3'>
                <div className="relative h-10 rounded-3xl overflow-hidden col-span-2 ">
                    <div className="relative w-full h-full ">
                        <input type="text" name="" id="" placeholder="search messages" className="w-full bg-gray-200 outline-none h-full px-5 text-sm text-gray-700 placeholder:text-gray-500"
                            onChange={(e) => handleMessageSearch(e.target.value)}
                            defaultValue={searchParams.get('query')?.toString()}
                        />
                        <FaSearch className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
                <div className='flex gap-4 items-center select-none mt-6 md:mt-0 md:place-self-end'>
                    <FaListCheck className="text-xl cursor-pointer text-green-600" onClick={() => messagesSelected ? setMessagesSelected(false) : setMessagesSelected(true)} />
                    {messagesSelected && !deletingMessages && <GiTrashCan className="text-2xl cursor-pointer text-green-600" onClick={handleSelectedMessagesDelete} />}
                    <div className="w-40 relative">
                        <DropDown sortByList={sortMessagesByList} />
                    </div>
                </div>
            </div>

            <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-8 my-5 `}>
                {messages.slice(0, 9).map(m => (
                    <MessageCard
                        message={m.message}
                        selectTriggered={messagesSelected}
                        dateCreated={m.date}
                        sentBy={m.email}
                        key={m.email}
                        messageDeleting={deletingMessages}
                    />))
                }
            </div>

            {totalpages > 1 &&
                <Pagination
                    totalPages={totalpages}
                    maxPages={5}
                    currentPage={currentPage}
                    onNextClick={() => {
                        setCurrentPage(p => p + 1)
                        replace(`${pathName}?${params.toString()}`)

                    }}
                    onPreviousClick={() => { setCurrentPage(p => p - 1) }}
                />}
        </div>
    )
}
