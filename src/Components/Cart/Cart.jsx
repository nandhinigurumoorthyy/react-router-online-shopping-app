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
      <div className="flex  flex-col pt-36 gap-7 h-screen pl-28">
        {cart.map((item) => (
          <div className="flex gap-10 items-center" key={item.id}>
            <img src={item.image} className="w-24 h-24" />
            <h1 className="text-2xl font-semibold flex-wrap flex w-72">
              {item.title}
            </h1>
            <div className="flex gap-8 items-center pl-7">
              <button
                className="text-5xl"
                onClick={() => handleChange(item, 1)}
              >
                +
              </button>
              <p className="text-3xl">{item.amount}</p>
              <button
                className="text-5xl"
                onClick={() => handleChange(item, -1)}
              >
                -
              </button>
            </div>
            <p className="text-3xl flex items-center pl-24">$ {item.price}</p>
            <button
              className="text-2xl py-1 px-2 hover:px-3 hover:font-semibold bg-slate-300"
              onClick={() => handleRemoveClick(item)}
            >
              Remove
            </button>
          </div>
        ))}
        <div className="text-3xl font-semibold flex gap-80 pl-8 pt-7">
          <div className="text-gray-700 text-3xl">Total</div>
          <div>$ {price}</div>
        </div>
        <div className="text-2xl text-gray-700 flex pl-8 pt-6">
          A 10% discount has been applied to every bill....
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
