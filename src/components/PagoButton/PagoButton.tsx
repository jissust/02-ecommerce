import { useState } from "react";
import MercaPagoButton from "../MercadoPagoButton/MercadoPagoButton";

function PagoButton({ products }) {
  const [preferenceId, setPreferenceId] = useState("");
  const createPreference = () => {
    fetch("http://localhost:3000/create_preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ products: products }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPreferenceId(data.id);
      });
  };
  return (
    <>
      <button
        className="bg-black text-white px-[25px] py-[20px] rounded-xl cursor-pointer"
        onClick={createPreference}
      >
        Comprar ahora
      </button>

      {preferenceId && <MercaPagoButton preferenceIdProduct={preferenceId} />}
    </>
  );
}

export default PagoButton;
