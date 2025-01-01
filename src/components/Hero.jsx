import rocketdab from '../assets/rocketdab.png';

const Hero = () => {
  return (
    <main id="hero" className='max-w-4xl mx-auto pt-16 md:p-4 sm:p-4'>
      <div className='flex flex-col-reverse sm:flex-row justify-between items-center mt-28 gap-10 '>
      <div className=''>
        <h1 className='text-5xl text-slate-950 font-bold dark:text-white'>
          We Boldy Go  
          <span className='text-[#4338C9]'> Where No Rocket</span> Has Gone Before...
        </h1>
        <p className='text-xl text-gray-600 mt-8 dark:text-[#8B9AAC]'>
          We&apos;re building rockets for the next century today. From the moon
          to Mars, Jupiter and beyond...
          
           <span className='block mt-4'>Think Acme Rockets.</span>
        </p>
      </div>
      <img src={rocketdab} alt="rocket ride"/>
      </div>
    </main>
  );
};

export default Hero;
