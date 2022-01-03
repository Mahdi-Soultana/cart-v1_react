import React from "react";
import styled from "styled-components";
import { GlobaleStyles } from "../GlobaleStyled";
import CartContent from "./cartContent/CartContent";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";

function Cart() {
  return (
    <>
      <CartStyled>
        <Nav />
        <CartContent />
        <Footer />
      </CartStyled>
      <GlobaleStyles />
    </>
  );
}

export default Cart;

const CartStyled = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 70vh;
  height: 100%;
`;
