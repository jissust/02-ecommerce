import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FilterProvider } from "./context/filters.tsx";
import { ProductsProvider } from "./context/products.tsx";

createRoot(document.getElementById("root")!).render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>
);
