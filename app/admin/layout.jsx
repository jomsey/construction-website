import {
    FaAddressBook, FaBell,
    FaCalendarDay, FaEnvelope,
    FaEnvelopeOpen, FaHome, FaLine,
    FaLock, FaQuestionCircle, FaSearch
} from "react-icons/fa";
import NavLink from '@/components/nav-link/nav-link'

export const metadata = {
    title: 'Admin Dashboard',
    themeColor: '#000'
}
export default function AdminLayOut({ children }) {
    return (
        <main className="grid grid-cols-12 grid-rows-6 w-full h-screen bg-gray-100">
            <aside className="col-start-1 col-end-3 row-span-6 bg-gray-700 relative border-r border-gray-500 ">
                <h1 className="text-center text-green-500 mt-8 font-bold">BUILD AFRICA</h1>
                <div className="mt-10 p-8 border-t border-gray-500">
                    <ul className="grid grid-col gap-4">
                        <NavLink path='/admin'><FaHome className="text-xl" /> Home</NavLink>
                        <NavLink path='/admin/messages'><FaEnvelope className="text-xl" /> Messages</NavLink>
                        <li className="flex gap-8 text-gray-50  cursor-pointer hover:text-green-400 ease-in duration-200  text-sm  items-center"><FaHome className="text-xl" /> Subscriptions</li>
                        <li className="flex gap-8 text-gray-50  cursor-pointer hover:text-green-400 ease-in duration-200  text-sm  items-center"><FaLine className="text-xl" /> Site stistics</li>
                        <li className="flex gap-8 text-gray-50  cursor-pointer hover:text-green-400 ease-in duration-200  text-sm  items-center"><FaCalendarDay className="text-xl" /> Events</li>
                        <li className="flex gap-8 text-gray-50  cursor-pointer hover:text-green-400 ease-in duration-200  text-sm  items-center"><FaHome className="text-xl" /> Settings</li>
                        <li className="flex gap-8 text-gray-50  cursor-pointer hover:text-green-400 ease-in duration-200  text-sm  items-center"><FaQuestionCircle className="text-xl" /> About</li>
                    </ul>
                </div>
                <footer className="absolute bottom-6 border-t border-gray-500 pt-4 px-4 w-full">
                    <div className="flex gap-8 cursor-pointer items-center text-sm text-green-500"><FaLock /> Logout</div>
                </footer>
            </aside>


            <main className="col-start-3 col-end-13 row-span-6 relative pb-9">
                <header className="col-start-3 col-end-13 bg-gray-700 flex gap-12 items-center justify-between px-10 py-2">
                    <div className="relative h-10 rounded overflow-hidden  md:w-96 ">
                        <form action="" method="get" className="relative w-full h-full ">
                            <input type="text" name="" id="" placeholder="search" className="w-full bg-gray-600 outline-none h-full px-5 text-sm text-gray-400" />
                            <FaSearch className="absolute top-2 right-4 text-gray-400" />
                        </form>
                    </div>
                    <div className="flex gap-8 items-enter text-gray-100 text-xl">
                        <span className="cursor-pointer hover:text-green-400 ease-in duration-200"><FaBell /></span>
                        <span className="cursor-pointer hover:text-green-400 ease-in duration-200"><FaEnvelopeOpen /></span>
                        <span className="cursor-pointer hover:text-green-400 ease-in duration-200"><FaAddressBook /></span>
                        <span className="cursor-pointer hover:text-green-400 ease-in duration-200"><FaHome /></span>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <span className="w-12 h-12 border overflow-hidden rounded-full"></span>
                        <div className="flex flex-col gap-1 text-sm font-bold text-white">
                            <small>John</small>
                            <small>Sknow</small>
                        </div>
                    </div>
                </header>
                <main className="p-4">
                    {children}
                </main>
                <footer className="bg-gray-700 absolute bottom-0 left-0 right-0 py-4">
                    <small className='text-white text-center block  font-bold '>&copy; {new Date().getFullYear()} Build Africa</small>
                </footer>
            </main>
        </main>);
}