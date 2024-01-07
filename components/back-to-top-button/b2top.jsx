import Link from 'next/link'
import ChevronsUp from 'feather-icons-react/build/IconComponents/ChevronsUp'
export default function Back2top() {
  return (
    <Link href='#top'>
      <button className='border border-green-500 p-2 fixed bottom-6 right-8 text-green-500 z-20' arial-label="back to top">
        <ChevronsUp />
      </button>
    </Link>
  )
}
