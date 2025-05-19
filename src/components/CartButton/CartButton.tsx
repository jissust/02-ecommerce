import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart";
import { Link } from "react-router-dom";
import { CartIcon } from "../Icons/Icons";
import CheckoutDetail from "../CheckoutDetail/CheckoutDetail";

function CartButton() {
  const { cart, setCart } = useContext(CartContext);
  const [menuCart, setMenuCart] = useState(false);

  const OpenCloseMenuCart = () => {
    console.log(menuCart);
    setMenuCart(!menuCart);
  };

  return (
    <div
      className="px-5 flex gap-2 relative cursor-pointer"
      onClick={OpenCloseMenuCart}
    >
      <CartIcon color="#000000" />
      <div
        className={`w-[20px] text-[12px] text-white text-center rounded-full border absolute top-[-10px] right-[6px] font-extrabold 
        ${cart.length === 0 ? "bg-gray-700" : "bg-[#ff0000]"}`}
      >
        {cart.length}
      </div>
      <div
        className={`absolute top-[30px] right-0 bg-[#FFFFFF] rounded-md p-3 min-w-[300px] sm:min-w-[400px] ${
          menuCart ? "grid" : "hidden"
        }`}
      >
        <div>
          <CheckoutDetail />
        </div>
        <Link
          to="/checkout"
          className="bg-black text-white rounded-md w-full text-center py-[15px]"
        >
          Ir a pagar
        </Link>
      </div>
    </div>
  );
}
export default CartButton;
