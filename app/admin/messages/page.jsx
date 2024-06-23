import MessagesList from "@/app/admin/components/messages-list/messages-list"
import MesagesProvider from "@/providers/messages-privider";


export default function Messages() {

    return (
        <MesagesProvider>
            <div className="relative w-full p-10">
                <div className=" grid  md:grid-cols-2 gap-10  relative mb-5">
                    <div className="col-span-2">
                        <h1 className='text-2xl font-bold text-gray-800'>Messages</h1>
                        <p className='text-sm text-gray-600 mt-4 w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, natus.</p>
                    </div>


                </div>

                {/* <div className=" border p-24 text-gray-400 flex items-center justify-center text-2xl font-bold">
                <h2>You Don't Have Any Messages Here</h2>
            </div> */}
                <MessagesList />
            </div>

        </MesagesProvider>
    )
}


