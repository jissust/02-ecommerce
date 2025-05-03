import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { FilterProvider } from "./context/filters.tsx";

createRoot(document.getElementById("root")!).render(
  <FilterProvider>
    <App />
  </FilterProvider>
);
