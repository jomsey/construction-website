import { FaGoogle, FaFacebook } from 'react-icons/fa'

export default function Login() {
    return (
        <main className='bg-gray-700   flex justify-center items-center gap-10 flex-col relative border-b border-gray-500'>

            <div className='flex justify-center items-center gap-10 flex-col sm:w-1/2 sm:p-16 p-8 pt-12'>
                <h1 className='text-center font-bold text-2xl text-white'>Sign-In</h1>
                <div className='w-full flex flex-col gap-8 border'>
                    <form action="" className='flex flex-col gap-8'>
                        <input type="text" placeholder="username" className='outline-none p-2 sm:p-4 text-sm text-gray-500 rounded-sm' />
                        <input type="password" placeholder="password" className='outline-none p-2 sm:p-4 text-sm text-gray-500' />
                        <button type="submit" className='border border-white py-2 sm:py-4 px-8 text-green-500 text-center font-semibold rounded-sm'>Sign-In</button>
                    </form>
                    <button className=' py-2 sm:py-4 px-8 text-white flex gap-5 bg-red-500 hover:bg-red-600 ease-in duration-300 justify-evenly font-semibold items-center rounded-sm'><span>Sign-in with Google</span> <FaGoogle className='text-xl' /></button>
                    <button className=' py-2 sm:py-4 px-8 text-white flex gap-5 bg-blue-600  hover:bg-blue-700 ease-in duration-300 justify-evenly font-semibold items-center rounded-sm'><span>Sign-in with Faceebook</span> <FaFacebook className='text-xl' /></button>

                </div>
                <p className='text-sm text-white font-semibold'>Can't remember password ? <span className='text-green-500 cursor-pointer hover:text-green-400 transition-colors ease-in duration-300'>Reset password.</span></p>
            </div>
        </main>
    );
}