import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => navigate("/")}
          className="text-white text-xl font-bold"
        >
         GPA Caculator
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? "bg-white text-blue-600" : "text-white hover:text-gray-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? "bg-white text-blue-600" : "text-white hover:text-gray-300"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 bg-blue-500 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? "bg-white text-blue-600" : "text-white hover:text-gray-300"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md ${
                isActive ? "bg-white text-blue-600" : "text-white hover:text-gray-300"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
