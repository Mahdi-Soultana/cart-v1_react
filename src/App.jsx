import Cart from "./components/Cart";
import CartProvider from "./hooks/CartProvider";

function App() {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}

export default App;
