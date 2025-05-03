import { createContext, useState, ReactNode } from "react";

interface FilterProviderProps {
  children: ReactNode;
}
export const FiltersContext = createContext();

export function FilterProvider({ children }:FilterProviderProps) {
  const [filters, setFilters] = useState({
    category: "all",
    maxPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
