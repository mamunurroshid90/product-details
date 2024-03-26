import React from "react";

const ProductInfo = ({
  brandName,
  price,
  images,
  inventory,
  productCode,
  brand,
  description,
}) => {
  //   console.log(images);
  return (
    <section className=" bg-white">
      <div className="max-w-container py-6 mx-4 md:flex">
        <div className="md:w-5/12 p-2">
          <img
            className="w-full mx-auto"
            src={images[0]?.url}
            alt="Product Image 1"
          />
        </div>
        <div className=" md:w-7/12">
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
            <div className=" lg:w-[300px]">
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
          <div className=" mt-5 gap-3 flex md:flex">
            <button className=" bg-[#4054d6] w-full flex-auto hover:bg-[#2a378f] delay-100 transition-all text-sm text-white capitalize font-semibold px-3 py-2 rounded">
              Buy now
            </button>
            <button className=" bg-[#4054d6] w-full flex-auto  hover:bg-[#2a378f] delay-100 transition-all text-sm text-white capitalize font-semibold px-3 rounded py-2">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
