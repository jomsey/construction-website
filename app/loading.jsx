import Loader from 'feather-icons-react/build/IconComponents/Loader'
import React from 'react'

export default function Loading() {
  return (
    <div className='fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 flex-col'>
      <Loader className='text-amber-400 animate-spin'/>
      <h5 className='text-white mt-5 font-bold sm'>a moment please ... </h5>
    </div>
  )
}
