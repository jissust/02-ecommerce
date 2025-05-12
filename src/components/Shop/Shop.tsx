import Aside from "../Aside/Aside.tsx";
import Products from "../Products/Products.tsx";
import Search from "../Search/Search.tsx";

function Shop() {
  return (
    <section className="flex container mx-auto py-[90px] grid grid-cols-1 xl:grid-cols-[20%_80%]">
      <div><Aside /></div>
      <div className="px-5">
        <Search />
        <Products />
      </div>
    </section>
  );
}

export default Shop;
