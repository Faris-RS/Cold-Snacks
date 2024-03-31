import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import searchStore from "../../store/SearchStore";

export default function Search() {
  const { setIsSearchShown } = searchStore();

  const handleCloseSearch = () => {
    setIsSearchShown(false);
  };

  return (
    <div className="w-screen h-screen bg-blue-100 absolute z-40 opacity-95 px-5 py-5">
      <button
        onClick={handleCloseSearch}
        className="absolute top-0 right-0 m-4 py-5 px-8 text-lg border-2 text-green-500 hover:text-white border-green-500 hover:bg-green-500 duration-300 ease-in-out rounded-xl"
      >
        X
      </button>
      <SearchBar />
      <div className="mt-10 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 overflow-y-auto h-[75%]">
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
    </div>
  );
}
