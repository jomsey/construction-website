import LatestActivities from "./components/latest-activities/latest-activity"
import {GiSuitcase,GiPaper,GiPieChart} from "react-icons/gi"
import {FaPersonCirclePlus,FaCaretRight} from "react-icons/fa6"


export default function Home() {
    return (
        <section className='grid grid-cols-3 p-8 gap-4'>
            <div className="bg-white p-8 rounded col-span-3">
                <h1 className="text-3xl font-bold mb-4 text-gray-700">Dashboard</h1>
                <p className="text-gray-400 text-sm lg:w-3/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quam nemo voluptate facere necessitatibus non iste vitae illum quasi deleniti!</p>
            </div>
            <div className="grid grid-cols-3 col-span-3 gap-4">
               <NavigationBlock title="site visitors"/>
               <NavigationBlock title="manage blog"/>
               <NavigationBlock title="news"/>

            </div>

            <div className="grid gap-4 grid-cols-3 col-span-3  mt-8">
                <div className="bg-gray-700 rounded-md bg-light col-span-2 p-8"> analytics here</div>
                <LatestActivities/>
            </div>
        </section>
    )
}


function NavigationBlock({title}){
   return(
     <div className="rounded bg-white grid grid-cols-3  items-center border ">
            <div className=" bg-green-500 text-gray-100  flex justify-center items-center h-full">
            <GiPieChart className="text-4xl"/>
            </div>
            <div className="col-span-2 flex flex-col gap-4 p-2">
                 <h3 className="text-sm font-semibold text-gray-500 text uppercase">{title}</h3>
                 <small className="text-green-500 font-bold">345</small>
          </div>
                
    </div>);
}
