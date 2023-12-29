import { FaGoogle, FaFacebook } from 'react-icons/fa'
// import Back from '@/components/back-to-home-page-button/b2Home';

export default function Login() {
    return (
        <main className='bg-gray-700   flex justify-center items-center gap-10 flex-col relative'>
            {/* <Back /> */}
            <div className='flex justify-center items-center gap-10 flex-col sm:w-1/2 md:p-16 p-8'>
                <h1 className='text-center font-bold text-2xl text-white'>Sign-In</h1>
                <div className='w-full flex flex-col gap-8'>
                    <form action="" className='flex flex-col gap-8'>
                        <input type="text" placeholder="username" className='outline-none p-2 sm:p-4 text-sm text-gray-500' />
                        <input type="password" placeholder="password" className='outline-none p-2 sm:p-4 text-sm text-gray-500' />
                        <button type="submit" className='border border-white py-2 sm:py-4 px-8 text-green-500 text-center font-semibold'>Sign-In</button>
                    </form>
                    <button className=' py-2 sm:py-4 px-8 text-white flex gap-5 bg-red-500 justify-evenly font-semibold items-center'><span>Sign-in with Google</span> <FaGoogle className='text-xl' /></button>
                    <button className=' py-2 sm:py-4 px-8 text-white flex gap-5 bg-blue-600 justify-evenly font-semibold items-center'><span>Sign-in with Faceebook</span> <FaFacebook className='text-xl' /></button>

                </div>
                <p className='text-sm text-white font-semibold'>Can't remember password ? <span className='text-green-500 cursor-pointer hover:text-green-400 transition-colors ease-in duration-300'>Reset password.</span></p>
            </div>

            <footer>
                <small className='text-white text-center font-bold my-5'>&copy;{new Date().getFullYear()} Build Africa</small>
            </footer>
        </main>
    );
}