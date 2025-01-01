import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";


const Template = ({qoute, author}) => {
  return (
      <div className="flex flex-col">
              <blockquote className="bg-[#0C9488] dark:bg-black text-white dark:text-[#8B9AAC] px-8 py-8 rounded-3xl mt-6 text-2xl">
                <span>
                  <ImQuotesLeft className="text-xl text-[#4AAEA6] dark:text-[#8B9AAC]" />
                </span>
                <p className="px-6">{qoute}
                </p>
                <span>
                  <ImQuotesRight className="text-xl text-[#4AAEA6] dark:text-[#8B9AAC] ml-auto" />
                </span>
              </blockquote>
            <h3 className="text-gray-500 text-end p-2 text-xl">{author}</h3>
            </div>
  )
}

export default Template