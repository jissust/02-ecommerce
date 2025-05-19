import { useContext } from "react";
import { CartContext } from "../../context/cart";
import PagoButton from "../PagoButton/PagoButton";
import CheckoutDetail from "../CheckoutDetail/CheckoutDetail";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);

  const resumen = cart.map((item) => ({
    title: item.title,
    total: item.quantity * item.price,
  }));

  const totalFinal = resumen.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div className="container mx-auto pb-[50px] px-[30px] py-[90px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-3">
          <CheckoutDetail />
        </div>

        <div className="col-span-3 md:col-span-1 border p-4 rounded-lg shadow-md">
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
          <div className="grid grid-cols-2 gap-2 mt-4 border-t pt-2 font-bold mb-5">
            <span>Total Final</span>
            <span>${totalFinal}</span>
          </div>
          {cart.length > 0 && <PagoButton products={cart} />}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
