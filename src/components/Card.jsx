const Card = ({ title, price, image, complement }) => {
  return (

    <div className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
      
      <img src={image} alt="rocket man" className="mb-6 w-1/2" />
      <h2 className="text-center text-3xl text-slate-900 dark:text-white">{title}</h2>
      <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">{price}</p>
      <p
              className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden"
            >
              {complement}
            </p>
    </div>
      
  );
};

export default Card;
