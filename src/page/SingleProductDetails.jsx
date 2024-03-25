import React from "react";
import singleProductInfoData from "../data/Data.json";
import ProductInfo from "../components/ProductInfo";
import Specification from "../components/Specification";

import ProductDescription from "../components/ProductDescription";
import ReletedProducts from "../components/ReletedProducts";
import Questions from "../components/Questions";
import Reviews from "../components/Reviews";

const SingleProductDetails = () => {
  const {
    name,
    description,
    images,
    brand,
    price,
    inventory,
    reviews,
    listOfObjects,
    basicInformation,
    memorySpecifications,
    GraphicsSpecifications,
    warrantyInformation,
  } = singleProductInfoData[0];

  // console.log(basicInformation);
  return (
    <div>
      <div className="max-w-container px-3 mx-auto">
        <ProductInfo
          brandName={name}
          brand={brand}
          price={price}
          images={images}
          inventory={inventory}
          description={description}
        />
        <div className="">
          <div className="">
            <Specification
              basicInformation={basicInformation}
              memorySpecifications={memorySpecifications}
              GraphicsSpecifications={GraphicsSpecifications}
              warrantyInformation={warrantyInformation}
            />
            <ProductDescription listOfObjects={listOfObjects} />
            <Questions />
            <Reviews />
          </div>
          <div className="h-fit">
            <ReletedProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
