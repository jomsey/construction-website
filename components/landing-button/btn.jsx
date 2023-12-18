'use client'
import { useRouter } from "next/navigation";

export default function Button(){
    const router = useRouter()
    return(
        <button onClick={()=>router.push('/projects')} className="hover:text-green-400 border border-white text-green-500 font-semibold w-60 p-4">See More</button>
    );
}