import React from "react";

export default function ProductCard({
  category,
  productName,
  productPrice,
  productImage,
}) {
  return (
    <div className="flex justify-center items-center hover:shadow-lg duration-200 ease-in-out border-4 hover:border-green-500">
      <div
        className="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer"
        style={{
          backgroundImage: `url(${productImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="flex justify-between items-center ml-4 pr-8">
          <div className="bg-blue-400 hover:bg-blue-600 duration-300 ease-in-out text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded truncate">
            {category || "Category"}
          </div>
          <div className="bg-blue-400 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full hover:bg-blue-600 duration-300 ease-in-out">
            +
          </div>
        </div>
        <div className="bg-green-400 bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8 truncate">
          <h3 className="text-xl font-bold pb-2">
            {productName || "Product Name"}
          </h3>
          <p className="truncate text-white text-sm">
            Price: {productPrice || "$0.00"}
          </p>
        </div>
      </div>
    </div>
  );
}
