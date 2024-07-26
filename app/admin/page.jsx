import LatestActivities from "./components/latest-activities/latest-activity"
import {GiPieChart} from "react-icons/gi"
import WeatherMeter from "./components/weather-meter/weather-meter";


export default function Home() {
    return (
        <section className='grid grid-cols-3 p-8 gap-4'>
            <div className="bg-white p-8 rounded col-span-3 grid grid-cols-3">
                <div className="col-span-2">
                <h1 className="text-3xl font-bold mb-4 text-gray-700">Dashboard</h1>
                <p className="text-gray-400 text-sm lg:w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quam nemo voluptate facere necessitatibus non iste vitae illum quasi deleniti!</p>
                </div>
                <WeatherMeter/>
            </div>
            <div className="grid grid-cols-3 col-span-3 gap-4">
               <div className="rounded bg-white grid grid-cols-3  items-center border ">
                    <div className={`bg-gradient-to-l from-gray-700 bg-sky-600 text-gray-100  flex justify-center items-center h-full`}>
                      <GiPieChart className="text-4xl "/>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4 p-2">
                        <h3 className="text-sm font-semibold text-gray-500 text uppercase">site visitors</h3>
                        <small className="text-green-500 font-bold text-sm">345</small>
                    </div>      
                </div>
                <div className="rounded bg-white grid grid-cols-3  items-center border ">
                    <div className={`bg-gradient-to-l from-gray-700 bg-green-500 text-gray-100  flex justify-center items-center h-full`}>
                      <GiPieChart className="text-4xl "/>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4 p-2">
                        <h3 className="text-sm font-semibold text-gray-500 text uppercase">site visitors</h3>
                        <small className="text-green-500 font-bold text-sm">345</small>
                    </div>      
                </div>
                  <div className="rounded bg-white grid grid-cols-3  items-center border ">
                    <div className={`bg-gradient-to-l from-gray-700 bg-red-500 text-gray-100  flex justify-center items-center h-full`}>
                      <GiPieChart className="text-4xl "/>
                    </div>
                    <div className="col-span-2 flex flex-col gap-4 p-2">
                        <h3 className="text-sm font-semibold text-gray-500 text uppercase">manage blog</h3>
                        <small className="text-green-500 font-bold text-sm">345</small>
                    </div>      
                </div>
            </div>

            <div className="grid gap-4 grid-cols-3 col-span-3  mt-8">
                <div className="bg-gray-700 rounded-md bg-light col-span-2"> 
                    <h3 className="text-gray-200 border-b p-4 border-gray-500 text-sm">Site Analytics</h3>
                </div>
                <LatestActivities/>
            </div>
        </section>
    )
}
