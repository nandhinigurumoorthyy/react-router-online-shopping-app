import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductItem = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, [productId]);

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
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-xl p-8 flex flex-col md:flex-row gap-12">
        
        {/* Product Image */}
        <div className="flex justify-center  items-center w-full md:w-1/2">
          <img src={product.image} alt={product.title} className="object-contain h-80" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center gap-6 w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg md:text-2xl text-gray-600">{product.category}</p>
          <p className="text-md md:text-lg text-gray-700">{product.description}</p>
          <p className="text-2xl font-semibold text-cyan-700">Price: ${product.price}</p>
        </div>

      </div>
    </div>
  );
};

export default ProductItem;
