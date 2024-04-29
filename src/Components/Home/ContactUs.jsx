import { toast } from "react-toastify"


function ContactUs() {

    const handleContact = e => {
        e.preventDefault()
        toast.success("Message sent!")
        e.target.reset()
    }

  return (
    <>
        <form className="flex flex-col gap-5 w-4/5" onSubmit={handleContact}>
            <div className="flex gap-2 flex-col w-full">
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder="Your Name" className="bg-base-200 w-full outline-none border-2 rounded-lg border-base-300 focus:border-green-600 px-3 py-2 placeholder:text-sm" />
            </div>

            <div className="flex gap-2 flex-col w-full">
                <label htmlFor="name">Your Email</label>
                <input type="email" placeholder="Your Email" className="bg-base-200 w-full outline-none border-2 rounded-lg border-base-300 focus:border-green-600 px-3 py-2 placeholder:text-sm" />
            </div>

            <div className="flex gap-2 flex-col w-full">
                <label htmlFor="name">Message</label>
                <textarea type="text" placeholder="Message" className="bg-base-200 resize-none h-[20vh] w-full outline-none border-2 rounded-lg border-base-300 focus:border-green-600 px-3 py-2 placeholder:text-sm" />
            </div>

            <input type="submit" value="Submit" className="btn btn-ghost border-green-600 bg-base-100 hover:bg-green-600 hover:shadow-inner text-base-content hover:text-white transition-all ease-in text-sm md:text-xl" />
        </form>
    </>
  )
}

export default ContactUs