'use client'
import { usePathname } from 'next/navigation';
export default function NavLink({path,children}){
    const pathName =  usePathname()
    return(
        <li className={`${pathName===path?'text-amber-400':'text-gray-300'} md:${pathName===path?'text-amber-400':'text-gray-700'} font-semibold hover:text-amber-400 transition-colors ease-in duration-300`}>{children}</li>
    );
}