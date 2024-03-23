import React from "react";
import singleProductInfoData from "../data/Data.json";
import ProductInfo from "../components/ProductInfo";
import Specification from "../components/Specification";

import ProductDescription from "../components/ProductDescription";
import ReletedProducts from "../components/ReletedProducts";
import Questions from "../components/Questions";
import Reviews from "../components/Reviews";

const SingleProductDetails = () => {
  const { name, description, images, brand, price, inventory, reviews } =
    singleProductInfoData[0];

  //   console.log(name);
  return (
    <div>
      <div className="max-w-container  px-3 mx-auto">
        <ProductInfo
          brandName={name}
          brand={brand}
          price={price}
          images={images}
          inventory={inventory}
          description={description}
        />
        <div className="flex justify-between gap-5">
          <div className=" w-3/4">
            <Specification />
          </div>
          <div className="h-fit">
            <ReletedProducts />
          </div>
        </div>
        <ProductDescription />
        <Questions />
        <Reviews />
      </div>
    </div>
  );
};

export default SingleProductDetails;
