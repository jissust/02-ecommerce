import { useEffect, useState } from "react";
import PagoButton from "../PagoButton/PagoButton";
import SkeletonCheckoutSummary from "./Skeleton/SkeletonCheckoutSummary";
import useCart from "../../hooks/useCart";

function CheckoutSummary() {
  const { cart } = useCart();
  const [loading, setLoading] = useState(true);

  const resumen = cart.map((item) => ({
    title: item.title,
    total: item.quantity * item.price,
  }));

  const totalFinal = resumen.reduce((acc, curr) => acc + curr.total, 0);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, [cart]);

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Resumen</h2>

      <div className="grid grid-cols-2 gap-2 border-b font-semibold pb-2">
        <span>Producto</span>
        <span>Total</span>
      </div>
      {loading && <SkeletonCheckoutSummary />}

      {!loading &&
        resumen.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-2 py-2">
            <span>{item.title}</span>
            <span>${item.total}</span>
          </div>
        ))}
      {!loading && (
        <div className="grid grid-cols-2 gap-2 mt-4 border-t pt-2 font-bold mb-5">
          <span>Total Final</span>
          <span>${totalFinal}</span>
        </div>
      )}
      {!loading && cart.length > 0 && <PagoButton products={cart} />}
    </>
  );
}
export default CheckoutSummary;
