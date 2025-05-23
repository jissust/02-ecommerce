import { useEffect, useState } from "react";
import { RemoveIcon } from "../Icons/Icons";
import SkeletonCheckoutDetail from "./Skeleton/SkeletonCheckoutDetail.tsx";
import { ProductCart } from "../../type/type.ts";
import useCart from "../../hooks/useCart.tsx";

function CheckoutDetail() {
  const { cart, setCart } = useCart();
  const [loading, setLoading] = useState(true);

  const removeFromCart = (indexToRemove: number) => {
    const updatedCart = cart.filter(
      (_: ProductCart, index: number) => index !== indexToRemove
    );
    setCart(updatedCart);
  };

  const updateQuantity = (indexToUpdate: number, newQuantity: number) => {
    const updatedCart = cart.map((item: ProductCart, index: number) =>
      index === indexToUpdate
        ? { ...item, quantity: Number(newQuantity) }
        : item
    );
    setCart(updatedCart);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, [cart]);

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Tu Carrito</h2>
      <div className="grid grid-cols-4 gap-4 border-b font-semibold pb-2 text-[12px] sm:text-[16px]">
        <span>Producto</span>
        <span>Cantidad</span>
        <span>Precio</span>
        <span>#</span>
      </div>
      {loading && <SkeletonCheckoutDetail />}
      {!loading &&
        cart.map((item: ProductCart, index: number) => (
          <div key={index} className="grid grid-cols-4 gap-4 py-2 border-b">
            <span className="text-[12px] sm:text-[16px]">{item.title}</span>
            <span>
              <input
                type="number"
                min="1"
                className="border px-2 py-1 rounded w-16 bg-white text-center"
                value={item.quantity}
                onChange={(e) => updateQuantity(index, Number(e.target.value))}
              />
            </span>
            <span>${item.price}</span>
            <span>
              <button onClick={() => removeFromCart(index)}>
                <RemoveIcon color="#000000" />
              </button>
            </span>
          </div>
        ))}
      {cart.length === 0 && (
        <div className="w-full text-center p-5">No hay productos.</div>
      )}
    </>
  );
}
export default CheckoutDetail;
