import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Products = ({ cart, handleAddClick, handleRemoveClick }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const isInCart = (product) =>
    cart.some((cartItem) => cartItem.id === product.id);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center space-x-4 text-4xl font-semibold">
      <svg className="h-10 w-10 animate-spin text-cyan-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      <span>Loading...</span>
    </div>
    
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-60 h-auto mb-5 hover:bg-zinc-200 p-5"
          >
            <figure className="flex items-center justify-center pb-4">
              <img src={product.image} className="w-32 h-40" />
            </figure>
            <h1 className="text-xl flex flex-wrap font-semibold">
              {product.title}
            </h1>
            <p className="text-gray-800 text-lg">{product.category}</p>
            <p className="pb-4">
              <span className="text-lg">Price: </span>
              <span className="text-xl">$ {product.price}</span>
            </p>

            <div className="items-center justify-center flex flex-col gap-4">
              <button
                onClick={() => navigate(`/products/${product.id}`)}
                className="items-center justify-center flex p-2 rounded-md bg-cyan-700 hover:bg-cyan-900 text-white"
              >
                View
              </button>
              <button
                className="items-center justify-center rounded-md flex p-2  bg-cyan-700 hover:bg-cyan-900 text-white"
                onClick={() =>
                  isInCart(product)
                    ? handleRemoveClick(product)
                    : handleAddClick(product)
                }
              >
                {isInCart(product) ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  handleAddClick: PropTypes.func.isRequired,
  handleRemoveClick: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};

export default Products;
