import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart";
import { Link } from "react-router-dom";

function CartButton() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <Link to="/checkout" className="px-5">
      {cart.length}
    </Link>
  );
}
export default CartButton;
