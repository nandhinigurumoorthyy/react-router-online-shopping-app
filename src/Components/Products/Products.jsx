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
      <div className="flex h-screen items-center justify-center font-mono text-4xl font-semibold">
        Loading....
      </div>
    );
  }

  return (
    <div className="h-full container mx-auto pt-40 px-16 overflow-auto justify-center items-center flex">
      <div className="flex flex-wrap gap-11 mb-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-60 h-auto mb-5 hover:bg-zinc-200 p-5"
          >
            <figure className="flex items-center justify-center">
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
                className="items-center justify-center flex p-2 hover:px-3 rounded-md bg-slate-300 hover:font-semibold"
              >
                View
              </button>
              <button
                className="items-center justify-center rounded-md flex p-2 hover:px-3 bg-slate-300 hover:font-semibold"
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
