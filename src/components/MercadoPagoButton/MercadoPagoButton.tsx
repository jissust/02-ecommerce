import { useEffect, useState } from "react";

function MercaPagoButton({preferenceIdProduct}) {
  const [preferenceId] = useState(preferenceIdProduct);

  useEffect(() => {
    if (preferenceId) {
      const mp = new window.MercadoPago("APP_USR-42075aba-8016-40a8-b14a-89c0a4846501", {
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
