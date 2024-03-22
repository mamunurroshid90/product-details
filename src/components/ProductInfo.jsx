import React from "react";

const ProductInfo = ({
  brandName,
  price,
  images,
  inventory,
  productCode,
  brand,
  features,
}) => {
  return (
    <div className=" py-6  flex">
      <div className=" w-1/2">
        <img className=" w-[450px] mx-auto" src={images[0]?.url} alt="" />
      </div>
      <div>
        <h1 className=" text-[#3749CA] text-2xl font-medium capitalize">
          {brandName}
        </h1>
        <div className=" py-4 flex gap-3 capitalize">
          <button className=" bg-[#F5F6FC] rounded-full text-[#666666] py-2 px-3 text-sm">
            Price: <span className=" text-[#000000]">{price.current}</span>
          </button>
          <button className=" bg-[#F5F6FC] rounded-full text-[#666666] py-2 px-3 text-sm">
            Status:{" "}
            <span className=" text-[#000000]">{`${
              inventory?.inStock ? "In-Stock" : "Stock-out"
            }`}</span>
          </button>
          <button className=" bg-[#F5F6FC] rounded-full text-[#666666] py-2 px-3 text-sm">
            Product Code: <span className=" text-[#000000]">{productCode}</span>
          </button>
          <button className=" bg-[#F5F6FC] rounded-full text-[#666666] py-2 px-3 text-sm">
            Brand: <span className=" text-[#000000]">{brand.name}</span>
          </button>
        </div>
        <div>
          <h3 className=" text-xl mb-3">{features.header}</h3>
          <div className="flex flex-col gap-2 capitalize">
            <p>Model: {features.model}</p>
            <p>Base Clock Speed: {features.baseClockSpeed}</p>
            <p>Cache: {features.cache}</p>
            <p>CPU Cores: {features.cpuCores}</p>
          </div>
          {/* <Link to="">view more info</Link> */}

          <a
            href="#"
            className=" text-[#E5330B] mt-3 capitalize underline inline-block "
          >
            view more info
          </a>
        </div>
        <div className=" pt-8 flex gap-3">
          <button className=" bg-[#4054d6] hover:bg-[#2a378f] delay-100 transition-all text-white capitalize font-semibold px-12 rounded py-2">
            Buy now
          </button>
          <button className=" bg-[#4054d6] hover:bg-[#2a378f] delay-100 transition-all  text-white capitalize font-semibold px-12 rounded py-2">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;