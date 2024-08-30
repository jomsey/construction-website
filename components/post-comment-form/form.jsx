export default function PostCommentForm() {
  return (
    <form action="" className="flex flex-col gap-6 w-full md:w-1/2">
          <textarea   className="w-full h-28 border rounded placeholder:text-sm p-3 "   placeholder="Comment"></textarea>
           <div className="flex flex-col md:flex-row gap-6 w-full">
             <input type="text" className="rounded placeholder:text-sm p-3 border"    placeholder="Your Name"/>
             <input type="text" className="rounded placeholder:text-sm p-3 border"   placeholder="Your Email" />
           </div>
           <button type="submit" className="border w-max border-green-500 px-10 py-3 text-green-500">Submit</button>
        </form>
  )
}
