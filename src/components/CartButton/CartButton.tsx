import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart";
import { Link } from "react-router-dom";
import { CartIcon } from "../Icons/Icons";

function CartButton() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <Link to="/checkout" className="px-5 flex gap-2">
      <CartIcon />
      <div>{cart.length}</div>
    </Link>
  );
}
export default CartButton;
