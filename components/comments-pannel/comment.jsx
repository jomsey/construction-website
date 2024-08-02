import { FaUser } from "react-icons/fa6"

export default function Comment(){
    return(
        <div className="border rounded p-6" >
          <header className="flex gap-6 ">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <FaUser className="text-gray-300 text-xl"/>
            </div>
            <div className="flex flex-col">
              <small className="text-sm font-bold text-gray-800">Tyler Williams</small>
              <small className="text-xs text-gray-400">6 days ago</small>
            </div>
          </header>
          <p className="text-sm text-gray-600 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae hic saepe blanditiis ratione nesciunt totam! Velit corrupti repudiandae eius? Quod?</p>
      </div>
    )
}