import React from "react";
import Navbar from "./components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeRoster from "./pages/EmployeeRoster";
import LookUpSystem from "./pages/LookUpSystem";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EmployeeRoster" element={<EmployeeRoster />} />
        <Route path="/LookUpSystem" element={<LookUpSystem />} />
      </Routes>
    </>
  );
};

export default App;
