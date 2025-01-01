import Qoutes from "./Qoutes";
const Testimonials = () => {
  return (
    <section id="testimonials" className="max-w-4xl mx-auto flex items-center flex-col pt-16 p-4 ">
      <h1 className="text-5xl font-bold text-slate-950 dark:text-white">Testimonials</h1>
      <div className="mt-8">
        <Qoutes />
      </div>
    </section>
  );
};

export default Testimonials;
