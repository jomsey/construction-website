'use client'
import { useSession } from "next-auth/react"

export default function User() {
    const { data } = useSession()
    return (
        <div className=" flex gap-2 items-center">
            {data?.user.image && <span className="w-10 h-10 border overflow-hidden rounded-full"><img src={data.user.image} alt="" /></span>}
            <div className="flex flex-col gap-1 text-base font-medium text-white">
                <small>{data?.user.name}</small>
            </div>
        </div>
    )
}