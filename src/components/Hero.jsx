import rocketdab from "../assets/rocketdab.png";

const Hero = () => {
  return (
    <main id="hero" className="mx-auto max-w-4xl mt-20 h-[75vh] scroll-m-40">
      <div className="mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row">
        <div className="flex flex-col items-center justify-center sm:w-5/6">
          <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl dark:text-white text-center sm:text-left">
            We Boldly Go
            <span className="text-[#4338C9] dark:text-indigo-300"> Where No Rocket</span> Has Gone
            Before...
          </h1>
          <p className="mt-8 text-2xl text-gray-600 dark:text-[#8B9AAC] text-center sm:text-left">
            We&apos;re building rockets for the next century today. From the
            moon to Mars, Jupiter and beyond...
            <span className="mt-8 text-2xl block">Think Acme Rockets.</span>
          </p>
        </div>
        <img className="w-1/2" src={rocketdab} alt="rocket ride " />
      </div>
    </main>
  );
};

export default Hero;
