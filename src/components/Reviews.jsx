import React from "react";
import { MdFeed } from "react-icons/md";

const Reviews = () => {
  const handleReviewButton = () => {
    let reviewContainer = document.getElementById("reviewContainer");
    reviewContainer.classList.toggle("hidden");
    let submitButton = document.getElementById("submitButton");
    submitButton.classList.add = "hidden";
  };
  return (
    <section className=" mx-4 my-5">
      <div className="p-4 bg-white rounded shadow">
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-lg capitalize font-semibold">reviews(0)</h2>
            <p className="text-[#666666] text-sm my-2">
              Get specific details about this product from customers who own it
            </p>
          </div>
          <button
            onClick={handleReviewButton}
            className=" bg-white w-fit px-5 py-2 rounded font-semibold text-[#3749BB] border-2 border-[#3749BB] capitalize hover:bg-[#3749BB] hover:text-white"
          >
            write a review
          </button>
        </div>
        <div className=" flex flex-col justify-center items-center h-[250px] border-t mt-8">
          <span className=" text-[#4054d6] text-5xl p-6 bg-[#F5F6FC] rounded-full mb-4">
            <MdFeed />
          </span>
          <p className="text-center text-sm text-[#666]">
            This product has no reviews yet. Be the first one to write a review.
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <div
            id="reviewContainer"
            className="hidden max-w-[400px] h-[100px] p-5 rounded bg-[#F2F4F8]"
          >
            <input
              type="text"
              id="inputField"
              placeholder="Enter your questions"
              className=" w-full py-1 px-2 bg-inherit text-sm border border-gray-200 rounded"
            />
            <button
              onClick={handleReviewButton}
              className=" border-none mt-3 py-1 px-3 bg-blue-500 text-sm font-semibold text-white rounded"
              id="submitButton"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
