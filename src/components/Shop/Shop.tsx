import Aside from "../Aside/Aside.tsx";
import Products from "../Products/Products.tsx";
import Search from "../Search/Search.tsx";

function Shop() {
  return (
    <section className="flex container mx-auto pb-[50px] grid grid-cols-1 xl:grid-cols-[20%_80%] py-[90px]">
      <div><Aside /></div>
      <div className="px-[30px]">
        <Search />
        <Products />
      </div>
    </section>
  );
}

export default Shop;
