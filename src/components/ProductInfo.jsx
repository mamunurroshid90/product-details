import React from "react";

const ProductInfo = ({
  brandName,
  price,
  images,
  inventory,
  productCode,
  brand,
  description,
  //   features,
}) => {
  //   console.log(images);
  return (
    <div className=" py-6 px-4">
      <div className="md:w-1/2">
        <img
          className="w-full mx-auto"
          src={images[0]?.url}
          alt="Product Image 1"
        />
      </div>
      <div>
        <h1 className=" text-[#3749CA] text-[20px] font-medium capitalize">
          {brandName}
        </h1>
        <div className=" py-4 flex flex-wrap gap-3 capitalize">
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
            Brand: <span className=" text-[#000000]">{brand.name}</span>
          </button>
        </div>
        <div>
          <h3 className=" text-xl mb-3">{}</h3>
          <div className="">
            <h4 className=" text-lg capitalize">Key features</h4>
            <p className=" text-sm mt-2">{description}</p>
          </div>

          <a
            href="#"
            className=" text-[#E5330B] text-sm mt-3 capitalize underline inline-block "
          >
            view more info
          </a>
        </div>
        <div className=" pt-8 gap-3">
          <button className=" bg-[#4054d6] w-full hover:bg-[#2a378f] delay-100 transition-all text-white capitalize font-semibold px-12 rounded py-2">
            Buy now
          </button>
          <button className=" bg-[#4054d6] w-full mt-2 hover:bg-[#2a378f] delay-100 transition-all  text-white capitalize font-semibold px-12 rounded py-2">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
