import NavLink from "@/components/nav-link/nav-link";
import { FaAddressCard, FaHome, FaLock, FaQuestion } from "react-icons/fa";
import { GiMagnifyingGlass, GiCalendar, GiEnvelope, GiHouse, GiCarWheel, GiEarthAfricaEurope } from 'react-icons/gi'

export const metadata = {
    title: 'Admin Dashboard',
    themeColor: '#000'
}
export default function AdminLayOut({ children }) {
    return (
        <main className="grid md:grid-cols-12  w-full  bg-gray-100">
            <div className="fixed w-full h-full grid grid-cols-12 row-span-6 z-50 top-0 left-0">
                <aside className=" col-start-1 col-end-3 bg-gray-700 h-full border-r border-gray-500 overflow-hidden relative ">
                    <h1 className="text-center text-green-500 mt-8 font-bold">BUILD AFRICA</h1>
                    <div className="mt-10 p-8 border-t border-gray-500">
                        <ul className="grid grid-col gap-4">
                            <NavLink path='/admin'><GiHouse className="text-xl" /> Home</NavLink>
                            <NavLink path='/admin/messages'><GiEnvelope className="text-xl" /> Messages</NavLink>
                            <NavLink path='/admin/subscriptions'><FaHome className="text-xl" /> Subscriptions</NavLink>
                            <NavLink path='/admin/events'><GiCalendar className="text-xl" /> Events</NavLink>
                            <NavLink path='/admin/settings'><GiCarWheel className="text-xl" /> Settings</NavLink>
                            <NavLink path='/admin/about'><FaQuestion className="text-xl" /> About</NavLink>
                        </ul>
                    </div>
                    <footer className="absolute bottom-6 border-t border-gray-500 pt-4 px-4 w-full">
                        <div className="flex gap-8 cursor-pointer items-center text-sm text-green-500"><FaLock /> Logout</div>
                    </footer>
                </aside>
            </div>


            <main className="col-start-3 col-end-13 row-span-6 relative pb-12">
                <header className="col-start-3 col-end-13 bg-gray-700 flex gap-12 items-center justify-between px-10 py-2">
                    <div className="relative h-10 rounded overflow-hidden  md:w-96 ">
                        <form action="" method="get" className="relative w-full h-full ">
                            <input type="text" name="" id="" placeholder="search" className="w-full bg-gray-600 outline-none h-full px-5 text-sm text-gray-400" />
                            <GiMagnifyingGlass className="absolute  top-1/2  -translate-y-1/2 right-4 text-gray-400" />
                        </form>
                    </div>
                    <div className="flex gap-8 items-enter text-gray-100 text-xl">
                        <span className="cursor-pointer hover:text-green-400 ease-in duration-200 "><GiEarthAfricaEurope /></span>
                        <span className="cursor-pointer hover:text-green-400 ease-in duration-200"><GiEnvelope /></span>
                        <span className="cursor-pointer hover:text-green-400 ease-in duration-200"><FaAddressCard /></span>
                        <span className="cursor-pointer hover:text-green-400 ease-in duration-200"><GiHouse /></span>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <span className="w-10 h-10 border overflow-hidden rounded-full"></span>
                        <div className="flex flex-col gap-1 text-sm font-bold text-white">
                            <small>John</small>
                            <small>Sknow</small>
                        </div>
                    </div>
                </header>
                <main>
                    {children}
                </main>
                <footer className="bg-gray-700 absolute bottom-0 left-0 right-0 py-4">
                    <small className='text-white text-center block  font-bold '>&copy; {new Date().getFullYear()} Build Africa</small>
                </footer>
            </main>
        </main>);
}