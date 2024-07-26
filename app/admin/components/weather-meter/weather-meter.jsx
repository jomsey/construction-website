import {  FaLocationPin} from "react-icons/fa6";
import {GiSun} from "react-icons/gi"
export default function WeatherMeter(){
    return(
     <div className="bg-blue-500 border border-gray-300 relative bg-gradient-to-r rounded text-sm w-full h-full p-5 from-current">
       <small className="text-gray-200 font-bold">Sunny</small>
       <div className="grid grid-cols-4 items-center">
        <span  className="text-3xl font-bold text-gray-100">25</span>
        <div className="col-span-3 border-l pl-3">
           <small className=" font-medium text-sm text-white">Monday 21 September</small>
           <div className="flex gap-2 items-center mt-2">
             <FaLocationPin className="text-gray-50"/>
             <small className="text-gray-200 text-sm">Nairobi</small>
           </div>
        </div>
        <div className="absolute right-0 top-0 p-4 h-full text-4xl text-yellow-300">
          <GiSun/>
        </div>
       </div>
     </div>
    );
} 