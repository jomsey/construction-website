'use client'
import { usePathname } from 'next/navigation';
export default function NavLink({path,children}){
    const pathName =  usePathname()
    return(
        <li className={`${pathName===path?'text-green-500':'text-gray-300 md:text-gray-700'} font-semibold hover:text-green-500 transition-colors ease-in duration-300`}>{children}</li>
    );
}