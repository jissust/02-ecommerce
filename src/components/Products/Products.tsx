import { Product } from "../../type/type";

interface ProductsProps {
  products: Product[];
}

function Products({ products }:ProductsProps) {
  return (
    <section className="p-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.slice(0, 20).map((product: Product) => {
          return (
            <a href="#" key={product.id} className="shadow-md">
              <img src={product.images[0]} alt={product.title} />
              <div className="p-5">
              <small>{product.category.name}</small>
              <h1 className="font-bold">{product.title}</h1>
              <div>${product.price}</div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
