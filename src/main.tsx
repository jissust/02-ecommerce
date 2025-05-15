import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FilterProvider } from "./context/filters.tsx";
import { ProductsProvider } from "./context/products.tsx";
import { CartProvider } from "./context/cart.tsx";

createRoot(document.getElementById("root")!).render(
  <ProductsProvider>
    <CartProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
    </CartProvider>
  </ProductsProvider>
);
