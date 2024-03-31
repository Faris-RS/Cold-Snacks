import React from "react";

export default function ProductCard() {
  return (
    <div class="flex justify-center items-center">
      <div class="flex flex-col justify-between w-72 sm:w-96 h-96 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer">
        <div class="flex justify-between items-center ml-4 pr-8">
          <div class="bg-green-500 hover:bg-green-600 duration-300 ease-in-out text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
            Category
          </div>
          <div class="bg-blue-400 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full hover:bg-blue-600 duration-300 ease-in-out">
            +
          </div>
        </div>
        <div class="bg-blue-400 bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
          <h3 class="text-xl font-bold pb-2">Happy Nowruz 1400</h3>
          <p class="truncate text-white text-sm">
            Nowruz is the Persian New Year, which begins on the Spring equinox,
            marking the first day of Farvardin, the first month of the Iranian
            solar calendar.
          </p>
        </div>
      </div>
    </div>
  );
}
