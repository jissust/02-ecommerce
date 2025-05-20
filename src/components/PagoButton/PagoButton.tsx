import { useContext, useEffect, useState } from "react";
import MercaPagoButton from "../MercadoPagoButton/MercadoPagoButton";
import { CartContext } from "../../context/cart";

function PagoButton({ products }) {
  const { cart } = useContext(CartContext)
  const [preferenceId, setPreferenceId] = useState("");
  const [loading, setLoading] = useState(false) 

  const createPreference = () => {
    setLoading(true)
    fetch("http://localhost:3000/create_preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ products: products }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPreferenceId(data.id);
        setLoading(false)
      });
  };

  useEffect(() => {
    setPreferenceId("")
  }, [cart]);

  return (
    <>
      <button
        className={`w-full bg-black text-white px-[25px] py-[20px] rounded-xl cursor-pointer ${ loading || preferenceId ? 'opacity-50 pointer-events-none':'' }`}
        onClick={createPreference}
      >
        Comprar ahora
      </button>

      {preferenceId && <MercaPagoButton preferenceIdProduct={preferenceId} />}
    </>
  );
}

export default PagoButton;
