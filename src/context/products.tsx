import { createContext, useState, ReactNode } from "react";
import { products as initialProducts } from "../mocks/products.json";
import { Product } from "../type/type";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState(initialProducts);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
