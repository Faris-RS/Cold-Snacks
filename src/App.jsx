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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchShown, setIsSearchShown] = useState(true)

  useEffect(() => {
    setIsLoading(false);
    // setIsSearchShown(false)
  }, []);
  
  return (
    <div className="bg-blue-50 min-h-screen">
      {isLoading && <Loader />}
      {isSearchShown && <Search />}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/browse" element={<Homepage />} />
          <Route path="/profile" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}
