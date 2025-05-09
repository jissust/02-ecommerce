import Aside from "../Aside/Aside.tsx";
import Products from "../Products/Products.tsx";
import Search from "../Search/Search.tsx";

function Shop() {
  return (
    <section className="flex container mx-auto  py-[90px]">
      <div><Aside /></div>
      <div>
        <Search />
        <Products />
      </div>
    </section>
  );
}

export default Shop;
