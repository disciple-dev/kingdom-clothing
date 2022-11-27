import { createContext, useState } from "react";

import PRODUCTS_DATA from "../data/shop-data.json";

export const ProductsContext = createContext({
  setProducts: () => [],
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_DATA);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
