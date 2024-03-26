import React from "react";
import { FaSquarePlus } from "react-icons/fa6";

const ReletedProducts = () => {
  return (
    <section className=" mx-4">
      <div className=" bg-white p-4 rounded shadow">
        <h2 className=" text-center text-[#3749BB] font-medium capitalize text-xl pb-3">
          related products
        </h2>
        <div className="flex gap-5 border-t pt-4 mb-5">
          <div className="w-[120px] h-[70px] bg-red-300">
            <img className="w-full" src="" alt="" />
          </div>
          <div className=" min-w-[120px]">
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
          <div className="w-[120px] h-[70px] bg-red-300">
            <img className="w-full" src="" alt="" />
          </div>
          <div className=" min-w-[150px]">
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
          <div className="w-[120px] h-[70px] bg-red-300">
            <img className="w-full" src="" alt="" />
          </div>
          <div className=" min-w-[150px]">
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
      <div className=" text-center capitalize text-lg font-bold text-[#3749BB] w-full bg-white mt-5 py-4 rounded">
        <a href="#">recently viewed</a>
      </div>
    </section>
  );
};

export default ReletedProducts;
