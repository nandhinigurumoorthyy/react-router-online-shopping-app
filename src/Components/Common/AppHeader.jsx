import React from "react";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

const AppHeader = () => {
  return (
    <div className="flex shadow-lg px-12 py-9 bg-zinc-300 container mx-auto fixed justify-between">
      <div className="flex text-3xl gap-2">
        <TiShoppingCart />

        <h1 className="italic text-mono font-semibold">Router Shopping App</h1>
      </div>
      <ol className="list-none flex gap-24">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "underline shadow-lg text-2xl text-zinc-700"
                : "text-xl";
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => {
              return isActive
                ? "text-zinc-700 underline shadow-lg text-2xl"
                : "text-xl";
            }}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => {
              return isActive
                ? "text-zinc-700 underline shadow-lg text-2xl"
                : "text-xl";
            }}
          >
            Cart
          </NavLink>
        </li>
      </ol>
    </div>
  );
};

export default AppHeader;
