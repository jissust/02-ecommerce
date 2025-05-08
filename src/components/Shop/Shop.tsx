import Aside from "../Aside/Aside.tsx";
import Products from "../Products/Products.tsx";

function Shop() {
  return (
    <section className="flex container mx-auto">
      <Aside />
      <Products />
    </section>
  );
}

export default Shop;
