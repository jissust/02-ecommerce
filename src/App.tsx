import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import useFilters from "./hooks/useFilters.tsx";

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <main>
      <Header />
      <section className="flex container mx-auto">
        <Aside />
        <Products products={filteredProducts} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
