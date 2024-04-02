import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-28 mx-auto rounded-xl bg-gray-100 shadow-lg p-10 mt-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl">
        <div className="relative mt-1">
          <input
            type="text"
            className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Search..."
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-2 flex">
          <div className="h-2 bg-green-500 flex-1"></div>
          <div className="h-2 bg-green-500 flex-1"></div>
          <div className="h-2 bg-green-500 flex-1"></div>
          <div className="h-2 bg-green-500 flex-1"></div>
          <div className="h-2 bg-green-500 flex-1"></div>
          <div className="h-2 bg-green-500 flex-1"></div>
        </div>
      </div>
    </div>
  );
}
