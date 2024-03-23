import React from "react";
import { FaSquarePlus } from "react-icons/fa6";

const ReletedProducts = () => {
  return (
    <div>
      <div className=" bg-white p-5 mt-8">
        <h2 className=" text-center text-[#3749BB] font-medium capitalize text-xl pb-3">
          related products
        </h2>
        <div className="flex gap-5 border-t pt-4 mb-5">
          <div className="w-[100px] h-[100px] bg-red-300">
            <img className="w-full" src="" alt="" />
          </div>
          <div className=" w-[150px]">
            <p className=" font-medium text-sm">
              AMD Athlon 3000G Processor with Radeon Graphics
            </p>
            <span className=" text-[#F04A23] my-2 inline-block">5664ট</span>

            <div className="flex items-center gap-3 text-[#878888] ">
              <span className=" text-xl">
                <FaSquarePlus />
              </span>
              <p className="text-[14px] capitalize">add to compare</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 border-t pt-4 mb-5">
          <div className="w-[100px] h-[100px] bg-red-300">
            <img className="w-full" src="" alt="" />
          </div>
          <div className=" w-[150px]">
            <p className=" font-medium text-sm">
              AMD Athlon 3000G Processor with Radeon Graphics
            </p>
            <span className=" text-[#F04A23] my-2 inline-block">5664ট</span>

            <div className="flex items-center gap-3 text-[#878888] ">
              <span className=" text-xl">
                <FaSquarePlus />
              </span>
              <p className="text-[14px] capitalize">add to compare</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 border-t pt-4 mb-5">
          <div className="w-[100px] h-[100px] bg-red-300">
            <img className="w-full" src="" alt="" />
          </div>
          <div className=" w-[150px]">
            <p className=" font-medium text-sm">
              AMD Athlon 3000G Processor with Radeon Graphics
            </p>
            <span className=" text-[#F04A23] my-2 inline-block">5664ট</span>

            <div className="flex items-center gap-3 text-[#878888] ">
              <span className=" text-xl">
                <FaSquarePlus />
              </span>
              <p className="text-[14px] capitalize">add to compare</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReletedProducts;
