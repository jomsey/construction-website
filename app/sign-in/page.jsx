import Github from  'feather-icons-react/build/IconComponents/Github'

export default function Login(){
    return(
        <main className='bg-gray-700 p-8 md:p-24  flex justify-center items-center gap-10 flex-col mt-1'>
          <div className='flex justify-center items-center gap-10 flex-col sm:w-1/2'>
             <h1 className='text-center font-bold text-2xl text-white'>Sign-In</h1>
             <div className='w-full flex flex-col gap-8'>
                    <form action="" className='flex flex-col gap-8'>
                    <input type="text" placeholder="username" className='outline-none p-4 text-sm text-gray-500' />
                    <input type="password" placeholder="password" className='outline-none p-4 text-sm text-gray-500' />
                    <button type="submit" className='border border-white py-4 px-8 text-green-500 text-center font-semibold'>Sign-In</button>
                    </form>
             <button className=' py-4 px-8 text-white flex gap-5 bg-red-500 justify-center font-semibold items-center'><span>Sign-in with Google</span> <Github/></button>
             </div>
             <p className='text-sm text-white font-semibold'>Can't remember password ? <span className='text-green-500 cursor-pointer hover:text-green-400 transition-colors ease-in duration-300'>Reset password.</span></p>
          </div>
    </main>
    );
}