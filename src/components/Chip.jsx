import React from "react";

export default function Chip({ value, selected, onClick }) {
  return (
    <div
      className={`flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full border cursor-pointer duration-200 ease-in-out ${
        selected
          ? "bg-green-300 text-green-900 border-green-700 hover:bg-green-500"
          : "bg-white text-green-700 border-green-300 hover:bg-green-100 hover:border-green-500 hover:text-green-900"
      }`}
      onClick={onClick}
    >
      <div className="text-xs font-normal leading-none w-20 flex justify-between truncate">
        {value}
        {selected && <span className="text-green-900">X</span>}
      </div>
    </div>
  );
}
