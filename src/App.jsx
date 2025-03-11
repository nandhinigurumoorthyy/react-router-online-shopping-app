import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import AppFooter from "./Components/Common/AppFooter";
import AppHeader from "./Components/Common/AppHeader";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About";
import Contact from "./Components/Home/Contact";
import Products from "./Components/Products/Products";
import ProductItem from "./Components/Products/ProductItem";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddClick = (item) => {
    //console.log(item);
    setCart([...cart, { ...item, amount: 1 }]);
    alert("Product added to the cart !!!");
  };

  const handleRemoveClick = (item) => {
    setCart((prevCart) => prevCart.filter((i) => item.id !== i.id));
    alert("Product removed from the cart !!!");
  };

  const handleChange = (item, d) => {
    const tempArr = cart.map((cartItem) => ({ ...cartItem }));

    const ind = tempArr.findIndex((data) => data.id === item.id);
    if (ind !== -1) {
      tempArr[ind].amount += d;

      if (tempArr[ind].amount < 1) {
        tempArr[ind].amount = 1;
      }
    }

    setCart(tempArr);
  };

  return (
    <>
      <div className="">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <Products
                handleAddClick={handleAddClick}
                handleRemoveClick={handleRemoveClick}
                cart={cart}
              />
            }
          />
          <Route path="/products/:productId" element={<ProductItem />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleChange={handleChange}
                handleRemoveClick={handleRemoveClick}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact />
            }
          />
        </Routes>
        <AppFooter /></div>
    </>
  );
}

export default App;
