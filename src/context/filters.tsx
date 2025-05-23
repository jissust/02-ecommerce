import { createContext, useState, ReactNode } from "react";
import { Filter } from '../type/type'

interface FilterProviderProps {
  children: ReactNode;
}

interface FiltersContextType {
  filters: Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>
}

export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

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
