import React from "react";
import { FooterStyled } from "./FooterStyled";

import { useCartContext } from "../../hooks/CartContext";
function Footer() {
  const { totalPrice } = useCartContext();
  return (
    <FooterStyled className="container footer">
      <h3>Total :</h3>
      <h2>{totalPrice + " $" || "0.00 $"}</h2>
    </FooterStyled>
  );
}

export default Footer;
