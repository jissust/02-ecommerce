import { useContext } from "react";
import { CartContext } from "../context/cart";

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
export default useCart;
