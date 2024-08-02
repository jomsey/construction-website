import React from 'react'
import Image from 'next/image'
import {FaArrowLeft,FaArrowRight, FaHeart, FaMessage} from 'react-icons/fa6'
import CommentsPanel from '@/components/comments-pannel/comments-panel'
import PostCommentForm from '@/components/post-comment-form/form'


export default function PostDetails() {
  return (
    <>
    
      <div className="bg-gray-300  mt-6 py-8 px-24">
        <h1 className="text-gray-600 font-light text-xl">Blog</h1>
      </div>
    <section className="grid grid-cols-4 gap-8 px-24 my-12">
     <main className="col-span-3 flex flex-col gap-8">
     <div className="bg-gray-500 overflow-hidden rounded">
      <Image
                    src='/cranes.jpg'
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
        <FaHeart className="text-gray-400 text-xl "/></div>
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
     </main>
         <aside className="flex flex-col gap-8">
          <section className="bg-gray-200 p-6 rounded">
            <h4 className="text-gray-800 font-bold">Categories</h4>
            <ul className="flex flex-col gap-2">
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small className="text-sm">Survey</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small className="text-sm">Technology</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small className="text-sm">General</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small className="text-sm">Management</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small className="text-sm">Civil Engineering</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small className="text-sm">Quality Assurance</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small className="text-sm">Finance</small></li>
            </ul>
          </section>
          <section className="bg-gray-200 p-6 rounded">
            <h4 className="text-gray-800 font-bold">Top sories</h4>
            <ul className="flex flex-col gap-2">
               <li className="text-gray-700 text-sm pb-2">
                <div className="flex gap-4 items-center">
                  <span className="text-2xl font-extrabold text-gray-700">1</span>
                  <small className="text-sm text">The rise of the fallen</small>
                </div>
               </li>

               <li className="text-gray-700 text-sm pb-2">
                <div className="flex gap-4 items-center">
                  <span className="text-2xl font-extrabold text-gray-700">2</span>
                  <small className="text-sm text">The  start of the beginning</small>
                </div>
               </li>
               <li className="text-gray-700 text-sm pb-2">
                <div className="flex gap-4 items-center">
                  <span className="text-2xl font-extrabold text-gray-700">3</span>
                  <small className="text-sm text">Believing they can</small>
                </div>
               </li>
              
               <li className="text-gray-700 text-sm pb-2">
                <div className="flex gap-4 items-center">
                  <span className="text-2xl font-extrabold text-gray-700">4</span>
                  <small className="text-sm text">The new construction era</small>
                </div>
               </li>
               
               <li className="text-gray-700 text-sm pb-2">
                <div className="flex gap-4 items-center">
                  <span className="text-2xl font-extrabold text-gray-700">5 .</span>
                  <small className="text-sm text">Simply not me</small>
                </div>
               </li>
              
            </ul>
          </section>
         </aside>
    </section>
    </>
  )
}
