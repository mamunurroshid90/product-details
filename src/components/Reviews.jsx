import React from "react";

const Reviews = () => {
  return (
    <div>
      <div className="  my-10 w-3/4 bg-white">
        <div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl capitalize font-semibold">
                Questions(0)
              </h2>
              <p className="text-[#666666] text-sm">
                Have question about this product? Get specific details about
                this product from expert
              </p>
            </div>
            <button className=" bg-white px-5 py-2 rounded font-medium text-[#3749BB] border border-[#3749BB] hover:bg-[#3749BB] hover:text-white">
              ask question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
