import { useContext } from "react";
import { CartContext } from "../../context/cart";
import PagoButton from "../PagoButton/PagoButton";
import { RemoveIcon } from "../Icons/Icons";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);

  const resumen = cart.map((item) => ({
    title: item.title,
    total: item.quantity * item.price,
  }));

  const totalFinal = resumen.reduce((acc, curr) => acc + curr.total, 0);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <h2 className="text-xl font-semibold mb-4">Tu Carrito</h2>
          <div className="grid grid-cols-4 gap-4 border-b font-semibold pb-2">
            <span>Producto</span>
            <span>Cantidad</span>
            <span>Precio</span>
            <span>#</span>
          </div>
          {cart.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 py-2 border-b">
              <span>{item.title}</span>
              <span>{item.quantity}</span>
              <span>${item.price}</span>
              <span><button onClick={() => removeFromCart(index)}><RemoveIcon /></button></span>
            </div>
          ))}
          {cart.length === 0 && <div className="w-full text-center p-5">No hay productos.</div>}
        </div>

        <div className="col-span-1 border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Resumen</h2>
          <div className="grid grid-cols-2 gap-2 border-b font-semibold pb-2">
            <span>Producto</span>
            <span>Total</span>
          </div>
          {resumen.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-2 py-2">
              <span>{item.title}</span>
              <span>${item.total}</span>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-2 mt-4 border-t pt-2 font-bold">
            <span>Total Final</span>
            <span>${totalFinal}</span>
          </div>
          { cart.length > 0 && <PagoButton products={cart} /> }
        </div>
      </div>
    </div>
  );
}

export default Checkout;
