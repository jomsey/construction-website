import Link from "next/link"
import Image from "next/image"

export default function PostCard(){
    return(
        <Link href="/blog/sample">
            <div className="w-full flex flex-col gap-2 overflow-hidden ">
                <Image src='/cranes.jpg' width={400} height={200} className="object-cover w-full h-40 bg-gray-400" alt="..." priority={false}/>
                <small className="text-gray-400"> 12 January 2026</small>
                <h4 className="font-bold text-gray-700 m-0">Love between obstacles</h4>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident reiciendis eligendi alias ea doloremque repellendus molestiae nulla cum, voluptates porro!</p>
            </div>
        </Link>
    )
}