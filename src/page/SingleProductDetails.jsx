import React from "react";
import { FaSquarePlus } from "react-icons/fa6";
import singleProductInfoData from "../data/Data.json";
import ProductInfo from "../components/ProductInfo";

const SingleProductDetails = () => {
  const {
    price,
    brand,
    images,
    inventory,
    ratings,
    reviews,
    productCode,
    name,
    features,
  } = singleProductInfoData;
  return (
    <div>
      <div className="max-w-container  px-3 mx-auto">
        <ProductInfo
          brandName={name}
          brand={brand}
          price={price}
          images={images}
          inventory={inventory}
          productCode={productCode}
          features={features}
        />
        <div className="flex justify-between gap-5 bg-[#f2f4f8] mt-4">
          <div class="w-3/4 mx-auto my-10 ">
            <div className=" pb-4 flex gap-3">
              <button className=" bg-white px-4 py-2 rounded capitalize hover:bg-[#ef4a23] hover:text-white">
                Specification
              </button>
              <button className=" bg-white px-4 py-2 rounded capitalize hover:bg-[#ef4a23] hover:text-white">
                description
              </button>
            </div>
            <div className="p-6 bg-white shadow-md rounded">
              <h2 class="text-lg font-semibold border-b pb-4">Specification</h2>
              <div class="mt-4">
                <div class="bg-[#F5F6FC] p-3 rounded">
                  <p class="text-sm font-semibold text-[#3749BB]">
                    Basic Information
                  </p>
                </div>
                <div class="mt-2">
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Base Frequency</span>
                    <span>3.70 GHz</span>
                  </div>
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Cache</span>
                    <span>6 MB</span>
                  </div>
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Cores</span>
                    <span>2</span>
                  </div>
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Threads</span>
                    <span>4</span>
                  </div>
                  <div class="flex justify-between py-2 hover:bg-[#f2f4f8]">
                    <span>Default TDP</span>
                    <span>46W</span>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <div class="bg-[#F5F6FC] p-3 rounded">
                  <p class="text-sm font-semibold text-[#3749BB]">
                    Basic Information
                  </p>
                </div>
                <div class="mt-2">
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Base Frequency</span>
                    <span>3.70 GHz</span>
                  </div>
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Cache</span>
                    <span>6 MB</span>
                  </div>
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Cores</span>
                    <span>2</span>
                  </div>
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Threads</span>
                    <span>4</span>
                  </div>
                  <div class="flex justify-between py-2 hover:bg-[#f2f4f8]">
                    <span>Default TDP</span>
                    <span>46W</span>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <div class="bg-[#F5F6FC] p-3 rounded">
                  <p class="text-sm font-semibold text-[#3749BB]">
                    Basic Information
                  </p>
                </div>
                <div class="mt-2">
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Base Frequency</span>
                    <span>3.70 GHz</span>
                  </div>
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Cache</span>
                    <span>6 MB</span>
                  </div>
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Cores</span>
                    <span>2</span>
                  </div>
                  <div class="flex justify-between py-2 border-b hover:bg-[#f2f4f8]">
                    <span>Threads</span>
                    <span>4</span>
                  </div>
                  <div class="flex justify-between py-2 hover:bg-[#f2f4f8]">
                    <span>Default TDP</span>
                    <span>46W</span>
                  </div>
                </div>
              </div>
            </div>
            {/* description  */}
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <h2 class="text-2xl font-bold mb-2">Description</h2>
              <h3 class="text-xl font-semibold mb-2">
                Fantasy Silver Pro G7400 Crystal Lake Processor
              </h3>
              <p class="mb-4">
                The 12th Gen Fantasy Silver Pro G7400 Crystal Lake Processor is
                a CPU from Fantasy. The Fantasy Silver Pro G7400 12th gen
                Processor turns your desktop computer system or data server into
                a more efficient machine. This 12th generation 3.7 GHz processor
                features two Performance cores and 6MB of cache with support for
                up to four threads, providing the power to run and multitask a
                variety of applications. The Fantasy Silver Pro G7400 also
                includes support for PCI Express 5.0 and dual-channel DDR5
                memory in addition to having integrated Intel UHD 710 Graphics.
                An Intel Laminar RS1 thermal solution is included.
              </p>
              <h3 class="text-xl font-semibold mb-2">PCIe 4.0 & 5.0</h3>
              <p class="mb-4">
                The 12th Gen Fantasy Silver Pro G7400 Crystal Lake Processor
                supports up to four PCIe 4.0 and sixteen PCIe 5.0 lanes,
                delivering 20 lanes in total for exceptional data throughput
                with compatible devices.
              </p>
              <h3 class="text-xl font-semibold mb-2">
                Integrated Fantasy UHD Graphics
              </h3>
              <p class="mb-4">
                Fantasy Silver Pro G7400 12th gen Alder Lake Processor has the
                Integrated Fantasy UHD 710 Graphics. The integrated Fantasy UHD
                710 Graphics delivers rich 3D performance with high-quality
                visuals.
              </p>
              <h3 class="text-xl font-semibold mb-2">
                Fantasy Deep Learning Boost
              </h3>
              <p class="mb-4">
                Fantasy Silver Pro G7400 12th gen Alder Lake Processor has
                Fantasy Deep Learning Boost Accelerates AI inference to improve
                performance for deep learning workloads.
              </p>
              <h3 class="text-xl font-semibold mb-2">
                Gaussian & Neural Accelerator 3.0
              </h3>
              <p class="mb-4">
                The 12th Gen Fantasy Silver Pro G7400 Crystal Lake Processor
                comes with The Gaussian and Neural Accelerator 3.0 (GNA)
                technology to help with noise suppression while enhancing
                background blurring during video chats. The 12th Gen Fantasy
                Silver Pro G7400 Crystal Lake Processor offers a 3-year warranty
                (No Warranty for Fan or Cooler).
              </p>
              <h2 class="text-2xl font-bold mt-6 mb-2">
                What is the price of Fantasy Silver Pro G7400 Crystal Lake
                Processor in Dreamland?
              </h2>
              <p>
                The latest price of Fantasy Silver Pro G7400 Crystal Lake
                Processor in Dreamland is 6,999₹. You can buy the Fantasy Silver
                Pro G7400 Crystal Lake Processor at best price from our website
                or visit any of our showrooms.
              </p>
            </div>
            {/* reviews and Questions  */}
            <div className=" mt-5">
              <div className="flex gap-5">
                <button className=" bg-white px-4 py-2 rounded capitalize hover:bg-[#ef4a23] hover:text-white">
                  Questions
                </button>
                <button className=" bg-white px-4 py-2 rounded capitalize hover:bg-[#ef4a23] hover:text-white">
                  reviews
                </button>
              </div>
              {/* reviews part  */}
              <div>
                <div className="flex justify-between">
                  <div>
                    <h2>Questions(0)</h2>
                    <p>
                      Have question about this product? Get specific details
                      about this product from expert
                    </p>
                  </div>
                  <button className=" bg-white px-5 py-2 rounded font-medium text-[#3749BB] border border-[#3749BB] hover:bg-[#3749BB] hover:text-white">
                    ask question
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Related products  */}
          <div className=" bg-white p-5 mt-8 h-fit">
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
      </div>
    </div>
  );
};

export default SingleProductDetails;
