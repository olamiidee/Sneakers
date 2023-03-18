import React, { useState } from "react";
import cart from "./../images/icon-cart.svg";
import plus from "./../images/icon-plus.svg";
import minus from "./../images/icon-minus.svg";
import product_1 from "./../images/image-product-1.jpg";
import product_2 from "./../images/image-product-2.jpg";
import product_3 from "./../images/image-product-3.jpg";
import product_4 from "./../images/image-product-4.jpg";
import product_1_thumbnail from "./../images/image-product-1-thumbnail.jpg";
import product_2_thumbnail from "./../images/image-product-2-thumbnail.jpg";
import product_3_thumbnail from "./../images/image-product-3-thumbnail.jpg";
import product_4_thumbnail from "./../images/image-product-4-thumbnail.jpg";

function Main() {
  const [count, setCount] = useState(0);

  //increase counter
  const increase = () => {
    setCount((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const addToCart = () => {};

  return (
    <div className="pb-[100px] lg:pt-[150px] lg:w-[80%] lg:mx-auto">
      <div className="flex flex-col justify-center items-center w-full mx-auto lg:w-[85%] lg:space-x-24 lg:flex-row">
        {/* Images */}
        <div className="w-full mx-auto lg:w-[50%]">
          <img src={product_1} alt="" className="lg:rounded-3xl" />
          <div className="mt-8 lg:flex space-x-5 hidden">
            <div>
              <img
                src={product_1_thumbnail}
                alt=""
                className="rounded-xl hover:opacity-50 cursor-pointer"
              />
            </div>
            <div>
              <img
                src={product_2_thumbnail}
                alt=""
                className="rounded-xl hover:opacity-50 cursor-pointer"
              />
            </div>
            <div>
              <img
                src={product_3_thumbnail}
                alt=""
                className="rounded-xl hover:opacity-50 cursor-pointer"
              />
            </div>
            <div>
              <img
                src={product_4_thumbnail}
                alt=""
                className="rounded-xl hover:opacity-50 cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* Texts */}
        <div className="flex flex-col space-y-2 w-[92%] lg:w-[50%]">
          <div className="space-y-4 pt-8 lg:pt-0">
            <p className="text-[#ff7d1a] text-sm font-bold">SNEAKER COMPANY</p>
            <h1 className="font-bold text-4xl">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-gray-500 pt-4">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>
          {/* Prices */}
          <div className="flex justify-between items-center pb-5 lg:flex-col lg:items-start">
            <div className="flex items-center space-x-5 font-bold pt-4">
              <h3 className="text-3xl">$125.00</h3>
              <p className="text-[#ff7d1a] bg-[#ffede0] px-1.5 rounded-lg">
                50%
              </p>
            </div>
            <div>
              {" "}
              <p className="line-through text-gray-300 font-bold text-lg">
                $250.00
              </p>
            </div>
          </div>
          {/* Buttons*/}
          <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-8">
            <div className="flex items-center justify-center bg-[#F7F8FD] border space-x-40 px-[32px] py-[14px] rounded-md w-full lg:space-x-8 lg:w-fit">
              <img
                onClick={decrease}
                src={minus}
                alt="minus"
                className="hover:opacity-50 cursor-pointer"
              />
              <p className="">{count}</p>
              <img
                onClick={increase}
                src={plus}
                alt="plus"
                className="hover:opacity-50 cursor-pointer"
              />
            </div>
            <button
              onClick={addToCart}
              className="bg-[#ff7d1a] hover:opacity-50 text-white px-[62px] py-[14px] rounded-md w-full lg:w-fit"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
