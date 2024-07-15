"use client"
import { FaGoogle} from 'react-icons/fa'
import {signIn } from 'next-auth/react';

export default function GoogleSignInButton({providerId}){
    return(
        <button onClick={()=>signIn(providerId)} className=' py-2 sm:py-4 px-8 text-white flex gap-5 bg-red-500 hover:bg-red-600 ease-in duration-300 justify-evenly font-semibold items-center rounded-sm'><span>Sign-in with Google</span> <FaGoogle className='text-xl' /></button>

    )
}