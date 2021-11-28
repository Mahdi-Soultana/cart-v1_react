import React from "react";
import { NavStyled } from "./NavStyled";
import { useCartContext } from "../../hooks/CartContext";
function Nav() {
  const { totalAmount } = useCartContext();
  return (
    <NavStyled>
      <div className="nav-center container">
        <h1>ReactCart</h1>
        <h3>
          <span>{totalAmount || "0"}</span>Cart
        </h3>
      </div>
    </NavStyled>
  );
}

export default Nav;
