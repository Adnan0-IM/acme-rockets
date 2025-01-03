const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="mx-auto flex max-w-4xl flex-col items-center justify-center p-4 scroll-m-20 "
    >
      <h1 className="text-5xl font-bold text-slate-950 dark:text-white">
        Contact Us
      </h1>

      <form
        action=""
        className="items-left mt-8 flex w-full flex-col text-3xl text-slate-950 dark:text-white"
      >
        <label htmlFor="subject">Subject:</label>
        <input
          className="my-4 h-14 rounded-xl border border-slate-900 px-4 dark:text-black"
          type="text"
          id="subject"
          placeholder="Your Subject"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          className="my-4 h-80 rounded-xl border border-slate-900 px-4 dark:text-black"
          id="message"
          placeholder="Your Message"
          required
        ></textarea>
        <button
          className="w-48 cursor-pointer rounded-xl border border-black bg-[#0E756D] p-3 text-3xl text-white hover:bg-[#4AAEA6] active:bg-[#4AAEA6]"
          type="button"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
