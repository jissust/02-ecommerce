import { useEffect, useState } from "react";

function MercaPagoButton({preferenceIdProduct}) {
  const [preferenceId] = useState(preferenceIdProduct);

  useEffect(() => {
    if (preferenceId) {
      const publicKey = import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY;

      const mp = new window.MercadoPago(
        publicKey, {
        locale: "es-AR",
      });

      mp.checkout({
        preference: {
          id: preferenceId,
        },
        render: {
          container: "#wallet_container",
          label: "Pagar",
        },
      });
    }
  }, [preferenceId]);

  return <div id="wallet_container"></div>;
}

export default MercaPagoButton;
