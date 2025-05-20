import { Product } from "../../type/type";
import useFilters from "../../hooks/useFilters.tsx";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/products.tsx";
import Card from "../Card/Card.tsx";
import SkeletonCard from "../Card/Skeleton/SkeletonCard.tsx";

function Products() {
  const { products } = useContext(ProductsContext);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, [products]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <section className="py-5 w-full">
        {loading
        ? ( <div> 
            <div className="m-3 skeleton-card"><SkeletonCard count={4} /></div>
            <div className="m-3 skeleton-card"><SkeletonCard count={4} /></div>
            <div className="m-3 skeleton-card"><SkeletonCard count={4} /></div>
          </div> ) : 
        (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.slice(0, visibleCount).map((product: Product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
        )}
        
        {!loading && filteredProducts.length === 0 && (
          <h3 className="col-span-4 w-full text-center">
            No hay productos cargados para esta categoria.
          </h3>
        )}
      {!loading && visibleCount < filteredProducts.length && (
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
