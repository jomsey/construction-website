import React from 'react'

export default function SubscribeForm() {
    const [message,setMessage] = React.useState(null);
    const [formSubmitting,setFormSubmitting] = React.useState(false)

    const handleSubscribeFormSubmit = async(event)=>{
        event.preventDefault()
        setFormSubmitting(true)
        const formData =  new FormData(event.currentTarget)
        setMessage(null) //clear available message

        const response = await fetch('/api/subscribe', {
            method: "POST",
            body: JSON.stringify({
                email: formData.get("email"),
            })     
        })
        if(response.status === 201)setMessage({_message:"Submitted successfully",success:true});
        if(response.status === 400)setMessage({_message:"Submission failed , check fields for valid data",success:false})
        if(response.status === 500){setMessage({_message:"Oops , something is wrong",success:false})}
        if(response.status === 403)setMessage({_message:"User with submitted email exists",success:false})


        setFormSubmitting(false)
    }
  return (
    <> 
       {message && message._message && <small className={`text-xs mb-4 ${!message.success?"text-red-500":"text-green-500"} font-medium`}>{message._message}</small>}
       <form className="flex flex-col sm:flex-row h-max relative w-full" onSubmit={handleSubscribeFormSubmit}>
           <input className="p-3 text-sm focus:border-0 text-gray-600 sm:w-full focus:border-green-500" placeholder="Email" type="email"  name="email"/>
          <button className="bg-green-500 text-white p-3 text-sm font-bold sm:w-1/2 "  type="submit">{formSubmitting?"Submitting":"Subscribe"}</button>
        </form>
    </>
  )
}
