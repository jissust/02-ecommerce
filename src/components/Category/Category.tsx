import { useParams } from "react-router-dom";
import { categories } from "../../mocks/categories.json";
import { useEffect, useState } from "react";
import { Filter } from "../../type/type";
import useFilters from "../../hooks/useFilters";
import Products from "../Products/Products";

type CategoryType = {
  id: number;
  title: string;
  name: string;
}

function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState<CategoryType| undefined>();
  const { setFilters } = useFilters();

  useEffect(() => {
    const updateCategory = categories.find((_) => _.id === Number(id));
    setCategory(updateCategory);
  }, []);

  useEffect(() => {
    if (category !== undefined) {
      setFilters((prevState: Filter) => ({
        ...prevState,
        category: category.title,
      }));
    }
  }, [category]);

  return (
    <section className="container mx-auto py-[90px] px-[30px]">
      <h1 className="text-center w-full">{category !== undefined && category.title}</h1>
      <Products />
    </section>
  );
}

export default Category;
