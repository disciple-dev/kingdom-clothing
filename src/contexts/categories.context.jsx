import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../services/firebase";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments();
      console.log(categories);
      setCategories(categories);
    };
    getCategories();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
