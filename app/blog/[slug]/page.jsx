import React from 'react'
import Image from 'next/image'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa6'
export default function PostDetails() {
  return (
    <>
    
    <section className="grid grid-cols-4 gap-8 px-24 my-12">
     <main className="col-span-3 flex flex-col gap-8">
     <div className="bg-gray-500 overflow-hidden rounded"><Image
                    src='/cranes.jpg'
                    width={1920}
                    height={1280}
                    className="object-cover w-full h-full"
                    alt="..."
                    priority={false}

     /></div>
    <h1 className="text-3xl font-semibold">All the world i waiting for you</h1>
    <div className="flex flex-col gap-4">
    <p className="text-gray-600 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo tenetur quis? Exercitationem saepe accusamus laborum temporibus harum eius architecto iste eum, beatae soluta sunt qui nulla! Aliquid voluptate eveniet, distinctio beatae facilis, amet culpa possimus voluptatum, illo libero veniam.</p>
    <p className="text-gray-600 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo tenetur quis? Exercitationem saepe accusamus laborum temporibus harum eius architecto iste eum, beatae soluta sunt qui nulla! Aliquid voluptate eveniet, distinctio beatae facilis, amet culpa possimus voluptatum, illo libero veniam.</p>
    <p className="text-gray-600 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo tenetur quis? Exercitationem saepe accusamus laborum temporibus harum eius architecto iste eum, beatae soluta sunt qui nulla! Aliquid voluptate eveniet, distinctio beatae facilis, amet culpa possimus voluptatum, illo libero veniam.</p>
    <p className="text-gray-600 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo tenetur quis? Exercitationem saepe accusamus laborum temporibus harum eius architecto iste eum, beatae soluta sunt qui nulla! Aliquid voluptate eveniet, distinctio beatae facilis, amet culpa possimus voluptatum, illo libero veniam.</p>
    <p className="text-gray-600 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi illo tenetur quis? Exercitationem saepe accusamus laborum temporibus harum eius architecto iste eum, beatae soluta sunt qui nulla! Aliquid voluptate eveniet, distinctio beatae facilis, amet culpa possimus voluptatum, illo libero veniam.</p>
    </div>
     
     <section className="flex justify-between">
       <div className="flex gap-6 w-max">
        <span className="bg-gray-200 rounded text-gray-600 text-sm p-2 h-max">creative</span>
        <span className="bg-gray-200 rounded text-gray-600 text-sm p-2 h-max">design</span>
       </div>
       <div className="flex gap-6 w-max">
        <button className="p-2 border text-sm h-max flex gap-4 justify-center">Previous Post <FaArrowLeft className="text-green-500"/></button>
        <button className="p-2 border  text-sm h-max">Next Post</button>
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

    </section>
    </>
  )
}
