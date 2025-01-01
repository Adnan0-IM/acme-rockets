const ContactUs = () => {
  return (
    <section id="contact-us" className="max-w-4xl mx-auto flex flex-col justify-center items-center pt-16 p-4">
        <h1 className="text-5xl font-bold text-slate-950 dark:text-white ">Contact Us</h1>
       
        <form action="" className="mt-8 flex flex-col text-3xl w-full items-left text-slate-950 dark:text-white ">
            <label htmlFor="subject" >Subject:</label>
            <input className="border rounded-xl border-slate-900 dark:text-black h-14 my-4 px-4" type="text" id='subject' placeholder="Your Subject" required/>
            <label htmlFor="message" >Message:</label>
            <textarea className="border rounded-xl border-slate-900 dark:text-black my-4 px-4 h-80 " id="message" placeholder="Your Message" required></textarea>
            <button className="bg-[#0E756D] text-white text-3xl p-3 w-1/5 rounded-xl border border-black cursor-pointer hover:bg-[#4AAEA6] active:bg-[#4AAEA6]" type="button">Submit</button>
        </form>
    </section>
  )
}

export default ContactUs