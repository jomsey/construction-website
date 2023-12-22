'use client'
import React from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

export default function () {
    const list = [
        { id: 1, title: 'Newest' },
        { id: 2, title: 'Names' },
        { id: 3, title: 'Emails' },
        { id: 4, title: 'Oldest' },
    ]
    const [selected, setSelected] = React.useState(list[0].title)
    const [dropDownVisible, setDropDownVisible] = React.useState(false)


    return (
        <>
            <div className='bg-white p-2 px-4 rounded-3xl h-10 cursor-pointer' onClick={() => dropDownVisible ? setDropDownVisible(false) : setDropDownVisible(true)}>
                <small className='font-semibold flex justify-between items-center text-gray-600 '>{selected} {dropDownVisible ? <FaCaretUp className='text-xl' /> : <FaCaretDown className=' text-xl' />} </small>
            </div>
            <div className={`border z-20 bg-white absolute w-48 rounded-md right-0 ease-in duration-200 mt-2 ${dropDownVisible ? 'visible' : 'invisible'}`}>
                <ul>
                    {list.map((l) => (
                        <li className={` hover:bg-gray-200 cursor-pointer px-4 ease-in duration-200 ${selected === l.title && 'bg-gray-200'}`} onClick={() => setSelected(l.title)} key={l.id}><small className=' text-gray-500'>{l.title}</small></li>
                    ))}
                </ul>
            </div>
        </>
    )
}
