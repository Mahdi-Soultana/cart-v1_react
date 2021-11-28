import React, { useReducer, useEffect, Children } from "react";
import CartContext from "./CartContext";
import reducer from "./reducer";
import dataStatic from "../data";
function CartProvider({ children }) {
  let [{ data, totalPrice, totalAmount }, dispatch] = useReducer(reducer, {
    data: dataStatic,
    totalPrice: 0,
    totalAmount: 0,
  });

  function removeProduct(id) {
    dispatch({ type: "remove_Product", payload: id });
  }

  function increaseAmount(id) {
    dispatch({ type: "increase_Amount", payload: id });
  }
  function decreaseAmount(id) {
    dispatch({ type: "decrease_Amount", payload: id });
  }
  useEffect(() => {
    dispatch({ type: "check_Data" });
  }, [data]);

  ///
  // console.log(data);
  let value = {
    data,
    totalAmount,
    totalPrice,
    increaseAmount,
    decreaseAmount,
    removeProduct,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
