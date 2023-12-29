'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function NavLink({ path, children }) {
    const pathName = usePathname()

    return (
        <li >
            <Link href={path} className={`${pathName === path ? 'text-green-500' : 'text-gray-300 md:text-gray-700'} font-semibold hover:text-green-500 transition-colors ease-in duration-300`} >
                {children}
            </Link>
        </li>
    );
}