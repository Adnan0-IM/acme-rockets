import Data from "./Data";
const OurRockets = () => {
  return (
    <section
      id="our-rockets"
      className="max-w-4xl mx-auto flex flex-col justify-center items-center pt-16 pb-28ssds p-4"
    >
      <h1 className="text-5xl font-bold text-slate-950 dark:text-white">Our Rockets</h1>
      <div className="flex w-2/3 justify-center items-center gap-8 md:gap-4 flex-col sm:flex-row mx-auto">
       
       <Data/>
      </div>
    </section>
  );
};

export default OurRockets;
