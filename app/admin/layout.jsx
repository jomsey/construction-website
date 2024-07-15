import NavLink from "@/components/nav-link/nav-link";
import Link from "next/link";
import { FaAddressCard, FaHome, FaLock, FaQuestion } from "react-icons/fa";
import { GiCalendar, GiEnvelope, GiHouse } from 'react-icons/gi'
import User from "./components/account-user/user";
import { FaGears, FaNewspaper } from "react-icons/fa6";

export const metadata = {
    title: 'Admin Dashboard',
    themeColor: '#000'
}

export default function AdminLayOut({ children }) {

    return (
        <main className="grid md:grid-cols-12  w-full  bg-gray-100 relative ">
            <div className="">
                <aside className=" sm:col-start-1 sm:col-end-3 bg-gray-700  border-r border-gray-500 overflow-hidden fixed w-0 sm:w-2/12 h-full  row-span-6 z-50 top-0 left-0">
                    <h1 className="text-center text-green-500  py-4 font-bold">BUILD AFRICA</h1>
                    <div className=" p-8 border-t border-gray-500">
                        <ul className="grid grid-col gap-4">
                            <NavLink path='/admin'><GiHouse className="text-xl" /> Home</NavLink>
                            <NavLink path='/admin/messages'><GiEnvelope className="text-xl" /> Messages</NavLink>
                            <NavLink path='/admin/subscriptions'><FaHome className="text-xl" /> Subscriptions</NavLink>
                            <NavLink path='/admin/events'><GiCalendar className="text-xl" /> Events</NavLink>
                            <NavLink path='/admin/settings'><FaGears className="text-xl" /> Settings</NavLink>
                            <NavLink path='/admin/about'><FaQuestion className="text-xl" /> About</NavLink>
                            <NavLink path='/admin/profile'><FaAddressCard className="text-xl" />Account</NavLink>
                            <NavLink path='/admin/about'><FaNewspaper className="text-xl" /> Blog</NavLink>
                        </ul>
                    </div>
                    <footer className="absolute bottom-6 border-t border-gray-500 pt-4 px-4 w-full">
                        <Link href="api/auth/signout"><div className="flex gap-8 cursor-pointer items-center text-sm text-green-500"><FaLock /> Logout</div></Link>
                    </footer>
                </aside>
            </div>


            <main className="col-start-3  col-end-13 row-span-6 relative pb-12 h-full">
                <header className="  bg-gray-700 flex gap-12 items-center justify-end px-10 py-2">
                    <div className=" place-self-end">
                        <Link href="/" className=" text-gray-500 text-sm"><span className="cursor-pointer hover:text-green-400 ease-in duration-200 ">View Site</span></Link>
                    </div>
                    <User />
                </header>
                <main>
                    {children}
                </main>
                
            </main>
            <footer className="bg-gray-700 absolute bottom-0 left-0 right-0 py-4 ">
                    <small className='text-gray-400 text-center block  text-xs '>&copy; {new Date().getFullYear()} Build Africa</small>
                </footer>
        </main>);
}