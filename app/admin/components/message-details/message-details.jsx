import { GiReturnArrow, GiTrashCan, GiDominoTiles } from 'react-icons/gi'


export default function MessageDetails() {

    return (
        <div className='absolute w-full h-full top-0 left-0 bg-gray-100 border p-10 md:p-24 '>
            <header className='flex justify-between mb-8 text-2xl items-center text-gray-700'>
                <span className='cursor-pointer'><GiReturnArrow /></span>
                <div className='flex gap-4 w-min'>
                    <GiTrashCan />
                    <GiDominoTiles />
                </div>
            </header>
            <div className='bg-white  rounded-sm p-4 relative overflow-hidden'>
                <div className='flex flex-col border-b pb-2'>
                    <small><span className='font-bold text-gray-700'>FROM: </span ><span className="text-green-700">John Doe</span></small>
                    <small><span className='font-bold text-gray-700'>EMAIL: </span ><span className="text-green-700">jons@gmail.com</span></small>
                    <small><span className='font-bold text-gray-700'>PHONE: </span ><span className="text-green-700">075857575</span></small>
                </div>
                <div>
                    <p className='text-sm text-gray-600 my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi iste est suscipit nesciunt aut, voluptas impedit, pariatur, et temporibus autem obcaecati illo deserunt eum quis. Perferendis hic voluptatem earum, adipisci rerum reprehenderit nesciunt? Ea est quia debitis. Iusto, reprehenderit perspiciatis.</p>
                </div>
            </div>
            <div className=" h-auto overflow-hidden  mt-8 rounded-sm">
                <form action="" method="get" className="w-full h-full ">
                    <textarea type="text" name="" id="" placeholder="reply" className="w-full bg-gray-200 outline-none p-5 text-sm text-gray-600 placeholder:text-gray-500" />
                    <button className='text-white bg-green-500 px-5 py-2 mt-2 w-min rounded-lg' type="submit">REPLY</button>
                </form>
            </div>
        </div>
    )
}
