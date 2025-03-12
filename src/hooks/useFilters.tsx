import { useContext } from "react";
import { FiltersContext } from "../context/filters.tsx";

function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.maxPrice == 0 || product.price <= filters.maxPrice) &&
        (filters.category == "all" || product.category.name == filters.category)
      );
    });
  };
  return { filters, filterProducts, setFilters };
}

export default useFilters;
