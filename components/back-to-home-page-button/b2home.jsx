'use client'
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Back() {
    const router = useRouter()
    return (
        <button onClick={() => router.push('/')} className="hover:text-green-400 border text-white font-semibold w-60 p-4 text-sm absolute top-5 right-5 flex gap-5 items-center "><FaHome className="text-white text-xl relative" /><span>Back To Main Sitee</span></button>
    );
}