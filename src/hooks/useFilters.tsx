import { useContext } from "react";
import { FiltersContext } from "../context/filters.tsx";
import { Product } from "../type/type.tsx";

function useFilters() {
  const context = useContext(FiltersContext);

  if (context === undefined) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  const {filters, setFilters } = context;
  
  const filterProducts = (products: Array<Product>) => {
    return products.filter((product: Product) => {
      return (
        (filters.maxPrice == 0 || product.price <= filters.maxPrice) &&
        (filters.category == "all" || product.categories[0].name == filters.category)
      );
    });
  };
  return { filters, filterProducts, setFilters };
}

export default useFilters;
