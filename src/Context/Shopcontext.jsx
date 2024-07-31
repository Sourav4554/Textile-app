
import React, { createContext, useState } from "react";
import all_product from '../Components/Asscets/Assets/all_product';

export const Shopcontext = createContext("null");

const Shopcontextprovider = (props) => {
  const [cartItems, setCartitems] = useState({});

  const addTocart = (itemId) => {
    setCartitems((prev) => ({...prev,[itemId]: (prev[itemId] || 0) + 1, // Increment the quantity or set to 1 if it doesn't exist
    }));
  };
  const removeFromcart = (itemId) => {
    setCartitems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1; // Decrement the quantity if it's greater than 1
      } else {
        delete updatedCart[itemId]; // Remove the item from the cart if the quantity is 1 or less
      }
      return updatedCart;
    });
  };

  const contextValue = { all_product, cartItems, addTocart, removeFromcart };

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>      
  );
};

export default Shopcontextprovider;
