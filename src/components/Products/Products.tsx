import { Product } from "../../type/type";
import useFilters from "../../hooks/useFilters.tsx";
import { useContext } from "react";
import { ProductsContext } from "../../context/products.tsx";
import { Link } from "react-router-dom";

function Products() {
  const { products, setProducts } = useContext(ProductsContext);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <section className="py-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.slice(0, 20).map((product: Product) => {
          return (
            <Link
              key={product.id}
              className="shadow-md bg-white"
              to={`/product/${product.id}`}
            >
              <img src={product.images[0]} alt={product.title} />
              <div className="p-5">
                <small className="text-gray-500">{product.category.name}</small>
                <h3 className="font-bold">{product.title}</h3>
                <div>${product.price}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
