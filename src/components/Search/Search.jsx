import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

export default function Search() {
  return (
    <div className="w-screen h-screen bg-blue-100 absolute z-40 opacity-95 px-5 py-5">
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
