import React from 'react'
import Image from 'next/image'
import {FaArrowLeft,FaArrowRight, FaHeart, FaMessage} from 'react-icons/fa6'


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
        
        <div className="flex gap-6 items-center"><FaMessage className="text-gray-400 text-xl hover:text-green-500 duration-200 ease-linear"/> 
        <FaHeart className="text-gray-400 text-xl "/></div>
       </div>
       <div className="flex gap-6 w-max">
        <button className="p-2 border text-sm h-max flex gap-4 justify-center items-center hover:text-green-600 duration-200 ease-linear"> <FaArrowLeft className="text-green-500"/> Previous Post</button>
        <button className="p-2 border  text-sm h-max  flex gap-4 justify-center items-center hover:text-green-600 duration-200 ease-linear">Next Post  <FaArrowRight className="text-green-500"/></button>
       </div>
     </section>

      <section className="flex flex-col gap-8 mt-8 border-t"> 
        <h3 className="text-xl font-semibold mt-8">Leave a comment</h3>
        <form action="" className="flex flex-col gap-6 w-1/2">
          <textarea   className="w-full h-28 border rounded placeholder:text-sm p-3 "   placeholder="Comment"></textarea>
           <div className="flex gap-6 w-full">
             <input type="text" className="rounded placeholder:text-sm p-3 border"    placeholder="Your Name"/>
             <input type="text" className="rounded placeholder:text-sm p-3 border"   placeholder="Your Email" />
           </div>
           <button type="submit" className="border w-max border-green-500 px-10 py-3 text-green-500">Submit</button>
        </form>
      </section>
     </main>
         <aside>
          <section className="bg-gray-200 p-6 rounded">
            <h4 className="text-gray-800 font-bold">Categories</h4>
            <ul className="flex flex-col gap-2">
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small>Survey</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small>Technology</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small>General</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small>Management</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small>Civil Engineering</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small>Quality Assurance</small></li>
               <li className="text-gray-700 text-sm  border-gray-300 pb-2  border-b"><small>Finance</small></li>
            </ul>
          </section>
         </aside>
    </section>
    </>
  )
}
