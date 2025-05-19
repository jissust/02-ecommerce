import { Product } from "../../type/type";
import useFilters from "../../hooks/useFilters.tsx";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/products.tsx";
import { Link } from "react-router-dom";

function Products() {
  const { products } = useContext(ProductsContext);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <section className="py-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.slice(0, visibleCount).map((product: Product) => {
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

        {filteredProducts.length === 0 && (
          <h3 className="col-span-4 w-full text-center">
            No hay productos cargados para esta categoria.
          </h3>
        )}

      </div>
      {visibleCount < filteredProducts.length && (
        <div className="text-center mt-10 w-full">
          <button
            onClick={handleLoadMore}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition cursor-pointer"
          >
            Ver más
          </button>
        </div>
      )}
    </section>
  );
}

export default Products;
