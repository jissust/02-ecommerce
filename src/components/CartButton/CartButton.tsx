import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart";
import { Link } from "react-router-dom";
import { CartIcon } from "../Icons/Icons";

function CartButton() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <Link to="/checkout" className="px-5 flex gap-2 relative">
      <CartIcon />
      <div
      className={`w-[20px] text-[12px] text-white text-center rounded-full border absolute top-[-10px] right-[6px] font-extrabold 
        ${cart.length === 0 ? "bg-gray-700":"bg-[#ff0000]"}`}
      >{cart.length}</div>
    </Link>
  );
}
export default CartButton;
