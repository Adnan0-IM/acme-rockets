import Quotes from "./Quotes";
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="mx-auto flex max-w-4xl flex-col items-center p-4 scroll-m-20"
    >
      <h1 className="text-5xl font-bold text-slate-950 dark:text-white">
        Testimonials
      </h1>
      <div className="mt-8">
        <Quotes />
      </div>
    </section>
  );
};

export default Testimonials;
