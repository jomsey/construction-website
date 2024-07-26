import { getProviders} from 'next-auth/react';
import GoogleSignInButton from '@/components/sign-in-with-google/button';

export default async function Login() {
    const providers = await getProviders()

    return (
        <main className='bg-gray-700   flex justify-center items-center gap-10 flex-col relative border-b border-slate-400 pb-8'>
            <div className='flex justify-center items-center gap-10 flex-col sm:w-1/2 max-w-[550px] sm:p-16 p-8 pt-12'>
                <h1 className='text-center font-bold text-3xl text-green-500'>Sign-In</h1>
                <div className='w-full flex flex-col gap-8 shadow-sm shadow-slate-500 rounded p-8'>
                    <form action="" className='flex flex-col gap-8'>
                        <input type="text" placeholder="username" className='outline-none p-2 sm:p-4 text-sm text-green-400 border border-green-500 rounded bg-transparent' />
                        <input type="password" placeholder="password" className='outline-none p-2 sm:p-4 text-sm text-green-400  border border-green-500 rounded bg-transparent' />
                        <button type="submit" className='py-2 sm:py-4 px-8 bg-green-500 text-center text-gray-50 font-semibold rounded'>Sign-In</button>
                    </form>
                    <GoogleSignInButton providerId={providers.google.id}/>
                <p className='text-sm text-white font-semibold'>Can't remember password ? <span className='text-green-500 cursor-pointer hover:text-green-400 transition-colors ease-in duration-300'>Reset password.</span></p>
                </div>
            </div>
        </main>
    );
}
