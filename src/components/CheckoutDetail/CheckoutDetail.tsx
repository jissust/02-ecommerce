import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { RemoveIcon } from "../Icons/Icons";

function CheckoutDetail() {
  const { cart, setCart } = useContext(CartContext);

  const resumen = cart.map((item) => ({
    title: item.title,
    total: item.quantity * item.price,
  }));

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const updateQuantity = (indexToUpdate, newQuantity) => {
    const updatedCart = cart.map((item, index) =>
      index === indexToUpdate
        ? { ...item, quantity: Number(newQuantity) }
        : item
    );
    setCart(updatedCart);
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Tu Carrito</h2>
      <div className="grid grid-cols-4 gap-4 border-b font-semibold pb-2 text-[12px] sm:text-[16px]">
        <span>Producto</span>
        <span>Cantidad</span>
        <span>Precio</span>
        <span>#</span>
      </div>
      {cart.map((item, index) => (
        <div key={index} className="grid grid-cols-4 gap-4 py-2 border-b">
          <span className="text-[12px] sm:text-[16px]">{item.title}</span>
          <span>
            <input
              type="number"
              min="1"
              className="border px-2 py-1 rounded w-16 bg-white text-center"
              value={item.quantity}
              onChange={(e) => updateQuantity(index, e.target.value)}
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
