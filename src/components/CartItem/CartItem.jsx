import React from "react";
import { CartItemStyled } from "./CartItemStyled";
import imgSrc from "../../img/4.jpg";
import { useCartContext } from "../../hooks/CartContext";
import { AnimatePresence } from "framer-motion";
function CartItem({ img, id, name, price, amount }) {
  const { increaseAmount, decreaseAmount, removeProduct } = useCartContext();
  return (
    <AnimatePresence>
      <CartItemStyled>
        <div className="img-container">
          <img src={img || imgSrc} alt={name || "Fruit"} />
        </div>
        <div className="item-desc item">
          <h4>{name || "title here"}</h4>
          <h5> {price + " $" || "203$"}</h5>
          <button onClick={() => removeProduct(id)}>Remove</button>
        </div>
        <div className="item-control item">
          <button onClick={() => increaseAmount(id)}>up</button>
          <span className="item-control-amount">{amount || "2"}</span>
          <button onClick={() => decreaseAmount(id)}>down</button>
        </div>
      </CartItemStyled>
    </AnimatePresence>
  );
}

export default CartItem;
