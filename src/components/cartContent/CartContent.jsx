import React from "react";
import { CartContextStyled } from "./CartContextStyled";
import CartItem from "../CartItem/CartItem";

//
import { useCartContext } from "../../hooks/CartContext";

function CartContent() {
  const { data } = useCartContext();
  return (
    <CartContextStyled className="item-container container">
      {!data.length ? (
        <span className="empty_cart_notice">No Product in the Cart !</span>
      ) : (
        data.map((product) => <CartItem key={product.id} {...product} />)
      )}
    </CartContextStyled>
  );
}

export default CartContent;
