export default function NotFound() {
    return (
        <main className='bg-gray-700 flex flex-col gap-10 justify-center items-center p-24'>
            <h1 className="text-green-500 font-extrabold text-3xl">CAN'T FIND THE MESSAGE !</h1>
            <p className="text-gray-200  leading-8 text-center font-semibold border-b pb-4 ">Looks like the message you are looking for <span className="text-green-500">doesn't exist</span>  or is already deleted</p>
        </main>);
}