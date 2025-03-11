import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Cart = ({ cart, handleChange, handleRemoveClick }) => {
  const [price, setPrice] = useState(0);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const handlePrice = () => {
    let amt = 0;
    cart.map((element) => (amt += element.amount * element.price));
    setPrice((amt - amt * 0.1).toFixed(2));
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center font-mono text-4xl font-semibold">
        Loading....
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col md:pt-44 pt-36 lg:pt-36 gap-7 min-h-screen px-6 md:px-16 lg:px-24">
        {cart.map((item) => (
          <div
            className="flex flex-col md:flex-row gap-6 md:gap-4 items-center justify-between border-b border-zinc-400 pb-4"
            key={item.id}
          >
            {/* Image */}
            <img src={item.image} className="w-32 h-28 object-contain" alt={item.title} />
  
            {/* Title */}
            <h1 className="text-lg md:text-xl font-medium text-center md:text-left flex-wrap flex max-w-xs">
              {item.title}
            </h1>
  
            {/* Quantity Control */}
            <div className="flex gap-4 items-center">
              <button
                className="text-3xl px-2"
                onClick={() => handleChange(item, 1)}
              >
                +
              </button>
              <p className="text-xl">{item.amount}</p>
              <button
                className="text-3xl px-2"
                onClick={() => handleChange(item, -1)}
              >
                -
              </button>
            </div>
  
            {/* Price */}
            <p className="text-2xl font-semibold">$ {item.price}</p>
  
            {/* Remove Button */}
            <button
              className="text-lg md:text-xl py-2 px-4 bg-cyan-700 hover:bg-cyan-900 text-white rounded-md "
              onClick={() => handleRemoveClick(item)}
            >
              Remove
            </button>
          </div>
        ))}
  
        {/* Total & Discount Section */}
        <div className="flex flex-col gap-3 pt-5 md:pt-9">
          <div className="flex justify-between text-2xl md:text-3xl font-semibold px-2">
            <span className="text-gray-700">Total</span>
            <span>${price}</span>
          </div>
          <div className="text-lg md:text-2xl text-gray-700 px-2 pb-10">
            A 10% discount has been applied to every bill....
          </div>
        </div>
      </div>
    </>
  );
  
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleRemoveClick: PropTypes.func.isRequired,
};

export default Cart;
