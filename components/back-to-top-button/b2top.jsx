import Link from 'next/link'
import ChevronsUp from 'feather-icons-react/build/IconComponents/ChevronsUp'
export default function Back2top() {
  return (
    <Link href='#top'>
       <button className='border border-amber-400 p-2 fixed bottom-6 right-8 text-amber-400 z-20'>
         <ChevronsUp/>
       </button>
    </Link>
  )
}
