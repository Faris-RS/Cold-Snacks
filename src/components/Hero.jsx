import React from "react";

export default function Hero() {
  const handleBrowseClick = () => {
    const productListElement = document.getElementById("product-list");
    if (productListElement) {
      productListElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-blue-400">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Crave the brain freeze</span>
                </span>
              </h2>
              <p className="text-base text-indigo-100 md:text-lg">
                Browse through our frigid collection to cool the heat of
                desserts.
              </p>
            </div>
            <div>
              <button
                onClick={handleBrowseClick}
                className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md hover:text-blue-900 bg-blue-500 hover:bg-blue-300 focus:shadow-outline focus:outline-none"
              >
                Browse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
