import React from "react";
import { MdTextsms } from "react-icons/md";

const Questions = () => {
  return (
    <div className=" my-10 w-3/4 bg-white">
      <div className="flex justify-between">
        <div>
          <h2 className=" text-2xl capitalize font-semibold">question(0)</h2>
          <p className="text-[#666666] text-sm">
            Have question about this product? Get specific details about this
            product from expert.
          </p>
        </div>
        <button className=" bg-white border border-[#4054d6] hover:text-[#fff] hover:bg-[#2a378f] delay-100 transition-all text-[#4054d6] capitalize font-semibold px-8 rounded">
          ask question
        </button>
      </div>
      <div className=" flex flex-col justify-center items-center h-[250px] border-t mt-8">
        <span className=" text-[#4054d6] text-5xl p-6 bg-[#F5F6FC] rounded-full mb-4">
          <MdTextsms />
        </span>
        <p>
          There are no questions asked yet. Be the first one to ask a question.
        </p>
      </div>
    </div>
  );
};

export default Questions;
