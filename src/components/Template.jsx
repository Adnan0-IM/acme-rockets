import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const Template = ({ quote, author }) => {
  return (
    <div className="flex flex-col">
      <blockquote className="mt-6 rounded-3xl bg-[#0C9488] px-8 py-8 text-2xl text-white dark:bg-black dark:text-[#8B9AAC]">
        <span>
          <ImQuotesLeft className="text-xl text-[#4AAEA6] dark:text-[#8B9AAC]" />
        </span>
        <p className="px-6">{quote}</p>
        <span>
          <ImQuotesRight className="ml-auto text-xl text-[#4AAEA6] dark:text-[#8B9AAC]" />
        </span>
      </blockquote>
      <h3 className="p-2 text-end text-xl text-gray-500">{author}</h3>
    </div>
  );
};

export default Template;
