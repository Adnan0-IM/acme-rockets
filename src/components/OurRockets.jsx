import Data from "./Data";
const OurRockets = () => {
  return (
    <section
      id="our-rockets"
      className="mx-auto flex max-w-4xl flex-col items-center justify-center p-4 scroll-m-36"
    >
      <h1 className="text-5xl font-bold text-slate-950 dark:text-white">
        Our Rockets
      </h1>
      <div className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">

        <Data />
      </div> 
    </section>
  );
};

export default OurRockets;
