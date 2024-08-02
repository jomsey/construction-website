"use client"
import React from 'react'
import NoComments from './no-comments'
import Comment from './comment'
import PostCommentForm from '../post-comment-form/form'
import { FaMessage,FaX } from 'react-icons/fa6'


export default function CommentsPanel() {
  const [panelVisible,setPanel] = React.useState(false)

  return (
    <>
    <FaMessage className="text-gray-400 text-xl hover:text-green-500 duration-200 ease-linear" onClick={()=>setPanel(true)}/> 
    <section className={`w-full ${panelVisible?"h-full sm:h-96 p-10":"h-0 p-0 invisible"} bg-white fixed bottom-0 left-0 z-50 p-10 overflow-hidden  duration-200 ease-linear`}>
    <FaX className="absolute top-4 right-4 text-gray-500 text-xl cursor-pointer hover:text-green-500" onClick={()=>setPanel(false)}/>
    {/* <NoComments/> */}
    <section className=" flex flex-col sm:flex-row gap-6">
    <div className="flex flex-col gap-6  md:w-1/2 p-6 h-full rounded overflow-scroll bg-gray-100">
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
    <PostCommentForm/>
    </section>
  </section></>
  )
}
