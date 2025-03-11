import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-cyan-900 w-full text-white px-6 md:px-20 py-6 fixed top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
  <TiShoppingCart className="text-3xl md:text-7xl lg:text-5xl" />
  <h1 className="italic font-semibold tracking-wide text-xl md:text-2xl lg:text-3xl">
    Online Shopping App
  </h1>
</div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>

        {/* Navigation Links (Desktop) */}
        <ol className="hidden md:flex gap-10 text-lg font-medium pl-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2" : "hover:opacity-80"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "border-b-2" : "hover:opacity-80"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "border-b-2" : "hover:opacity-80"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "border-b-2" : "hover:opacity-80"
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "border-b-2" : "hover:opacity-80"
              }
            >
              Contact
            </NavLink>
          </li>
        </ol>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <ol className="flex flex-col gap-6 mt-6 text-lg font-medium md:hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2" : "hover:opacity-80"
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "border-b-2" : "hover:opacity-80"
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "border-b-2" : "hover:opacity-80"
              }
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "border-b-2" : "hover:opacity-80"
              }
              onClick={() => setMenuOpen(false)}
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "border-b-2" : "hover:opacity-80"
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ol>
      )}
    </div>
  );
};

export default AppHeader;
