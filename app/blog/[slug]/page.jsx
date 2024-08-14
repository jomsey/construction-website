import React from 'react'
import Image from 'next/image'
import {FaArrowLeft,FaArrowRight, FaHeart} from 'react-icons/fa6'
import CommentsPanel from '@/components/comments-pannel/comments-panel'
import PostCommentForm from '@/components/post-comment-form/form'


export default function PostDetails() {
  return (
  
     <section className="w-full flex flex-col gap-8">
     <div className="bg-gray-500 overflow-hidden rounded">
      <Image src='/cranes.jpg'
            width={1920}
            height={1280}
            className="object-cover w-full h-full"
            alt="..."
            priority={false}

     /></div>
     <div className="flex gap-6 w-max">
        <small className="bg-gray-200 rounded text-gray-600 text-sm p-2 h-max">creative</small>
        <small className="bg-gray-200 rounded text-gray-600 text-sm p-2 h-max">design</small>
        
       </div>
    <h1 className="text-3xl font-semibold">All the world is waiting for you</h1>
    <div className="flex flex-col gap-4">
    <p className="text-gray-600 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo tenetur quis? Exercitationem saepe accusamus laborum temporibus harum eius architecto iste eum, beatae soluta sunt qui nulla! Aliquid voluptate eveniet, distinctio beatae facilis, amet culpa possimus voluptatum, illo libero veniam.</p>
    <p className="text-gray-600 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo tenetur quis? Exercitationem saepe accusamus laborum temporibus harum eius architecto iste eum, beatae soluta sunt qui nulla! Aliquid voluptate eveniet, distinctio beatae facilis, amet culpa possimus voluptatum, illo libero veniam.</p>
    <p className="text-gray-600 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo tenetur quis? Exercitationem saepe accusamus laborum temporibus harum eius architecto iste eum, beatae soluta sunt qui nulla! Aliquid voluptate eveniet, distinctio beatae facilis, amet culpa possimus voluptatum, illo libero veniam.</p>
    <p className="text-gray-600 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo tenetur quis? Exercitationem saepe accusamus laborum temporibus harum eius architecto iste eum, beatae soluta sunt qui nulla! Aliquid voluptate eveniet, distinctio beatae facilis, amet culpa possimus voluptatum, illo libero veniam.</p>
    <p className="text-gray-600 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo tenetur quis? Exercitationem saepe accusamus laborum temporibus harum eius architecto iste eum, beatae soluta sunt qui nulla! Aliquid voluptate eveniet, distinctio beatae facilis, amet culpa possimus voluptatum, illo libero veniam.</p>
    </div>
     
     <section className="flex justify-between">
       <div className="flex gap-6 w-max">
        
        <div className="flex gap-6 items-center">
        <CommentsPanel/> 
        <FaHeart className="text-gray-400 text-xl " role="button"/></div>
       </div>
       <div className="flex gap-6 w-max">
        <button className="p-2 border text-sm h-max flex gap-4 justify-center items-center hover:text-green-600 duration-200 ease-linear"> <FaArrowLeft className="text-green-500"/> Previous Post</button>
        <button className="p-2 border  text-sm h-max  flex gap-4 justify-center items-center hover:text-green-600 duration-200 ease-linear">Next Post  <FaArrowRight className="text-green-500"/></button>
       </div>
     </section>

      <section className="flex flex-col gap-8 mt-8 border-t"> 
        <h3 className="text-xl font-semibold mt-8">Leave a comment</h3>
        <PostCommentForm/>
      </section>
     </section>
        
    

  )
}
