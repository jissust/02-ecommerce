import { createContext, useState, ReactNode, useEffect } from "react";
import { Product } from "../type/type";
import useGetProducts from "../api/useGetProducts";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextType {
  products: Product[];
  productsOriginal: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setProductsOriginal: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const { result } = useGetProducts();
  const [products, setProducts] = useState<Product[]>([]);
  const [productsOriginal, setProductsOriginal] = useState<Product[]>([]);

  useEffect(() => {
    if (result) {
      setProducts(result);
      setProductsOriginal(result)
    }
  }, [result]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        productsOriginal,
        setProductsOriginal
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
