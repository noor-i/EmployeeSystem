import { faBars, faDatabase, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function dropMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between bg-gradient-to-r from-blue-900 to-sky-600 text-white px-5 shadow-xl shadow-gray-400 rounded">
        <div className="flex justify-center items-center gap-[1.5vw] p-3">
          <FontAwesomeIcon icon={faDatabase} className="text-3xl" />
          <h1 className="font-bold text-2xl">EMS</h1>
        </div>
        <nav className="hidden md:flex items-center gap-[4vw] pr-5">
          <Link
            to="/"
            className="px-4 py-3 h-full flex items-center hover:bg-blue-500 rounded transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/EmployeeRoster"
            className="px-4 py-3 h-full flex items-center hover:bg-blue-500 rounded transition-colors duration-200"
          >
            Employee Roster
          </Link>
          <Link
            to="LookUpSystem"
            className="px-4 py-3 h-full flex items-center hover:bg-blue-500 rounded transition-colors duration-200"
          >
            Lookup System
          </Link>
        </nav>
        <button
          onClick={dropMenu}
          className="md:hidden flex justify-center items-center hover:bg-blue-500 px-4 cursor-pointer rounded"
        >
          <FontAwesomeIcon
            className="text-2xl"
            icon={menuOpen ? faXmark : faBars}
          />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-gradient-to-r from-blue-900 to-sky-600 text-white rounded-b shadow-xl shadow-gray-400">
          <Link
            className="px-5 py-3 hover:bg-blue-500 transition-colors duration-200 border-t border-blue-700"
            to="/"
            onClick={dropMenu}
          >
            Home
          </Link>
          <Link
            className="px-5 py-3 hover:bg-blue-500 transition-colors duration-200 border-t border-blue-700"
            to="/EmployeeRoster"
            onClick={dropMenu}
          >
            Employee Roster
          </Link>
          <Link
            className="px-5 py-3 hover:bg-blue-500 transition-colors duration-200 border-t border-blue-700"
            to="/LookUpSystem"
            onClick={dropMenu}
          >
            Lookup System
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
