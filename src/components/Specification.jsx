import React from "react";
const Specification = ({
  basicInformation,
  memorySpecifications,
  GraphicsSpecifications,
  warrantyInformation,
}) => {
  // console.log(basicInformation[0].name);

  return (
    <section className=" bg-[#F2F4F8] mx-4">
      <div className="">
        <div class=" w-full ">
          <div className=" text-sm gap-3 flex flex-wrap my-5">
            <button className=" bg-white sm:flex-auto md:flex-auto px-4 py-2 rounded capitalize hover:bg-[#ef4a23] hover:text-white">
              Specification
            </button>
            <button className=" bg-white sm:flex-auto md:flex-auto px-4 py-2 rounded capitalize hover:bg-[#ef4a23] hover:text-white">
              description
            </button>
            <button className=" bg-white sm:flex-auto md:flex-auto px-4 py-2 rounded capitalize hover:bg-[#ef4a23] hover:text-white">
              Questions
            </button>
            <button className=" bg-white sm:flex-auto md:flex-auto px-4 py-2 rounded capitalize hover:bg-[#ef4a23] hover:text-white">
              reviews
            </button>
          </div>
          <div className="p-4 bg-white shadow-md rounded">
            <h2 class="text-lg font-semibold border-b pb-4">Specification</h2>
            <div class="mt-4">
              <div class="bg-[#F5F6FC] p-3 rounded">
                <p class="text-sm font-semibold text-[#3749BB]">
                  Basic Information
                </p>
              </div>
              <div class="mt-2">
                <div class="lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                  <span className="text-sm block  w-[250px] text-[#666666] capitalize">
                    {basicInformation[0].name}
                  </span>
                  <span className=" text-sm block font-bold">
                    {basicInformation[0].value}
                  </span>
                </div>
                <div class="lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                  <span className="text-sm block w-[250px] text-[#666666] capitalize">
                    {basicInformation[1].name}
                  </span>
                  <span className=" text-sm font-bold">
                    {basicInformation[1].value}
                  </span>
                </div>
                <div class="lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                  <span className="text-sm block w-[250px] text-[#666666] capitalize">
                    {basicInformation[2].name}
                  </span>
                  <span className=" text-sm font-bold">
                    {basicInformation[2].value}
                  </span>
                </div>
                <div class="lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                  <span className="text-sm block w-[250px] text-[#666666] capitalize">
                    {basicInformation[3].name}
                  </span>
                  <span className=" text-sm font-bold">
                    {basicInformation[3].value}
                  </span>
                </div>
                <div class="lg:flex gap-2 py-2 hover:bg-[#f2f4f8]">
                  <span className="text-sm block w-[250px] text-[#666666] capitalize">
                    {basicInformation[4].name}
                  </span>
                  <span className=" text-sm font-bold">
                    {basicInformation[4].value}
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="bg-[#F5F6FC] p-3 rounded">
                <p class="text-sm font-semibold text-[#3749BB]">
                  Memory Specifications
                </p>
              </div>
              <div class="mt-2">
                <div class="lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                  <span className="text-sm block w-[250px] text-[#666666] capitalize">
                    {memorySpecifications[0].name}
                  </span>
                  <span className=" text-sm font-bold">
                    {memorySpecifications[0].value}
                  </span>
                </div>
                <div class="lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                  <span className="text-sm block w-[250px] text-[#666666] capitalize">
                    {memorySpecifications[1].name}
                  </span>
                  <span className=" text-sm font-bold">
                    {memorySpecifications[1].value}
                  </span>
                </div>
                <div class="lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                  <span className="text-sm block w-[250px] text-[#666666] capitalize">
                    {memorySpecifications[2].name}
                  </span>
                  <span className=" text-sm font-bold">
                    {memorySpecifications[2].value}
                  </span>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <div class="bg-[#F5F6FC] p-3 rounded">
                <p class="text-sm font-semibold text-[#3749BB]">
                  Graphics Specifications
                </p>
              </div>
              <div class="mt-2">
                <div className="lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                  <span className="text-sm block w-[250px] text-[#666666] capitalize">
                    {GraphicsSpecifications[0].name}
                  </span>
                  <span className=" text-sm font-bold">
                    {GraphicsSpecifications[0].value}
                  </span>
                </div>
                <div class=" lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                  <span className="text-sm block w-[250px] text-[#666666] capitalize">
                    {GraphicsSpecifications[1].name}
                  </span>
                  <span className=" text-sm font-bold">
                    {GraphicsSpecifications[1].value}
                  </span>
                </div>
                <div class=" lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                  <span className="text-sm block w-[250px] text-[#666666] capitalize">
                    {GraphicsSpecifications[2].name}
                  </span>
                  <span className=" text-sm font-bold">
                    {GraphicsSpecifications[2].value}
                  </span>
                </div>
              </div>
              <div>
                <div class="bg-[#F5F6FC] p-3 rounded">
                  <p class="text-sm font-semibold text-[#3749BB]">
                    Warranty Information
                  </p>
                </div>
                <div class="mt-2">
                  <div class=" lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                    <span className="text-sm block w-[250px] text-[#666666] capitalize">
                      {warrantyInformation[0].name}
                    </span>
                    <span className=" text-sm font-bold">
                      {warrantyInformation[0].value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specification;
