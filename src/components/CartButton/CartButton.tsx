import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart";

function CartButton () {
    const {cart, setCart} = useContext(CartContext);

    return (
        <>
        {cart.length}
        </>
    )
}
export default CartButton;