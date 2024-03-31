import React from "react";

export default function Loader() {
  return (
    <div className="w-screen h-screen absolute top-0 z-50 bg-blue-100 opacity-50">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-900 absolute top-1/2 right-1/2"></div>
    </div>
  );
}
