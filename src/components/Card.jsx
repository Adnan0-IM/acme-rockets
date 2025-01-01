const Card = ({ title, price, image }) => {
  return (
    <div className="mt-16 border border-gray-700 dark:border-zinc-50 rounded-3xl px-8 py-6 flex flex-col justify-center items-center bg-white dark:bg-black shadow-lg shadow-slate-400 dark:shadow-none">
      <img src={image} alt="rocket man" width={100} height={100} />
      <h2 className="text-3xl mt-6 text-slate-950 dark:text-white">{title}</h2>
      <p className="text-gray-500 mt-4 text-3xl">{price}</p>
    </div>
  );
};

export default Card;
