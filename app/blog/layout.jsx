import React from 'react'

function BlogLayout({children}) {
  return (
    <>
    
      <div className="bg-gray-300  mt-6 py-8 px-8 sm:px-24">
        <h1 className="text-gray-600 font-light text-xl">Blog</h1>
      </div>
    <section className="grid grid-cols-4 gap-8 px-12 md:px-24 my-12">
     <main className="col-span-4 md:col-span-3">
     {children}
     </main>
         <aside className="flex flex-col gap-8  overflow-hidden overflow-y-scroll md:w-full h-full z-10 md:px-0  pt-24 md:pt-0 md:overflow-auto w-0 fixed bg-white top-0 left-0 md:relative">
          <section className="md:bg-gray-200 p-6 rounded">
            <h4 className="text-gray-800 font-bold">Categories</h4>
            <ul className="flex flex-col gap-2">
               <li className="text-gray-700 border-gray-300 pb-2  border-b"><small className="text-sm">Survey</small></li>
               <li className="text-gray-700 border-gray-300 pb-2  border-b"><small className="text-sm">Technology</small></li>
               <li className="text-gray-700 border-gray-300 pb-2  border-b"><small className="text-sm">General</small></li>
               <li className="text-gray-700 border-gray-300 pb-2  border-b"><small className="text-sm">Management</small></li>
               <li className="text-gray-700 border-gray-300 pb-2  border-b"><small className="text-sm">Civil Engineering</small></li>
               <li className="text-gray-700 border-gray-300 pb-2  border-b"><small className="text-sm">Quality Assurance</small></li>
               <li className="text-gray-700 border-gray-300 pb-2  border-b"><small className="text-sm">Finance</small></li>
            </ul>
          </section>
          <div>
            <form>
                <input className="border rounded placeholder:text-sm placeholder:text-gray-500 w-full text-gray-500 focus p-2" type="search" placeholder="search posts"/>
            </form>
          </div>
          <section className="md:bg-gray-200 p-6 rounded">
            <h4 className="text-gray-800 font-bold">Top stories</h4>
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

export default BlogLayout