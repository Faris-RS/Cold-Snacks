import React, { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Loader from "./components/Loading/Loader";
import Search from "./components/Search/Search";
import searchStore from "./store/SearchStore";
import AppStore from "./store/AppStore";
import BrowsePage from "./pages/BrowsePage";

export default function App() {
  const { isLoading, setIsLoading } = AppStore();
  const { isSearchShown, setIsSearchShown } = searchStore();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      {isLoading && <Loader />}
      {isSearchShown && <Search />}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/profile" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}
