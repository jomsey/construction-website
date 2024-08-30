import React from 'react'

export default function ContactForm() {
    const [message,setMessage] = React.useState(null);
    const [formSubmitting,setFormSubmitting] = React.useState(false)

    const handleContactFormSubmit=async(event)=> {
        event.preventDefault()
        setMessage(null) //clear available message
        setFormSubmitting(true)
        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/contact', {
            method: "POST",
            body: JSON.stringify({
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                message: formData.get("message")
            })
        })
    
         if(response.status === 201)setMessage({message:"Message has been sent successfully",success:true});
         if(response.status === 400)setMessage({message:"Message couldn't be sent , check fields for valid data",success:false})
         if(response.status === 500){setMessage({message:"Oops , something is wrong",success:false})}
         setFormSubmitting(false)
    }
  return (
       <form onSubmit={handleContactFormSubmit} className="mt-8 flex flex-col gap-5" method="POST">
            {message && <small className={`text-xs ${!message.success?"text-red-500":"text-green-500"} font-medium`}>{message.message}</small>}
            <div className='flex flex-col gap-5 sm:flex-row'>
                  <input className="p-3 text-sm focus:outline-0 focus:border-green-500 text-gray-600 sm:w-full" placeholder="Name" name="name" type="text" data-aos="fade-up" />
                  <input className="p-3 text-sm focus:outline-0 focus:border-green-500 text-gray-600 sm:w-full" placeholder="Phone" name="phone" type="phone" data-aos="fade-up" />
            </div>
            <input className="p-3 text-sm focus:outline-0 focus:border-green-500 text-gray-600 sm:w-full" placeholder="Email" name="email" type="email" data-aos="fade-up" />
            <textarea className="p-3 text-sm focus:outline-0 focus:border-green-500 text-gray-600 sm:w-full" placeholder=" Message" name="message" data-aos="fade-up"></textarea>
            <button className="bg-green-500 text-white px-6 py-3 text-base font-semibold w-max" type="submit" >{formSubmitting?"Sending":"Send"}</button>
      </form>
  )
}
