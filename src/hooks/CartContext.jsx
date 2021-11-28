import { createContext, useContext } from "react";
const CartContext = createContext({
  data: [],
  totalPrice: 0,
  totalAmount: 0,

  increaseAmount(id) {},
  decreaseAmount(id) {},
  removeProduct(id) {},
});
export default CartContext;

export const useCartContext = () => useContext(CartContext);
