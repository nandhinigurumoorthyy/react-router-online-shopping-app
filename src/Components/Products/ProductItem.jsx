import React, { useEffect, useState } from "react";
import Products from "./Products";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center font-mono text-4xl font-semibold">
        Loading....
      </div>
    );
  }

  return (
    <div className="h-full pt-40 mx-10 mb-10">
      <div className="flex gap-12">
        <div className="w-1/3">
          <figure>
            <img src={products.image} alt={products.title} />
          </figure>
        </div>
        <div className="flex flex-col gap-10 w-2/3">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">{products.title}</h1>
            <p className="text-gray-700 text-2xl">{products.category}</p>
          </div>
          <p className="text-xl flex flex-wrap">{products.description}</p>
          <p>
            <span className="text-xl">Price: </span>
            <span className="text-2xl">$ {products.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
