'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function NavLink({ path, children }) {
    const pathName = usePathname()
    const adminNavLinkClasses = `${pathName === path && 'text-green-500'} flex gap-8 text-gray-400  cursor-pointer hover:text-green-400 ease-in duration-200  text-sm  items-center font-medium`
    const siteNavLinkClasses = `${pathName === path ? 'text-green-500' : 'text-gray-300 md:text-gray-700'} font-semibold hover:text-green-500 transition-colors ease-in duration-300`
    return (
        <li >
            <Link href={path} className={pathName.startsWith('/admin') ? adminNavLinkClasses : siteNavLinkClasses} >
                {children}
            </Link>
        </li>
    );
}