import { useParams } from "react-router-dom";
import { categories } from "../../mocks/categories.json";
import { useContext, useEffect, useState } from "react";
import Products from "../Products/Products";
import { FiltersContext } from "../../context/filters";
import { Filter } from "../../type/type";

function Category() {
  const { id } = useParams();
  const [category, setCategory] = useState();
  const { filters, setFilters } = useContext(FiltersContext);

  useEffect(() => {
    const updateCategory = categories.filter((_) => _.id === Number(id));
    setCategory(updateCategory);
  }, []);

  useEffect(() => {
    if (category !== undefined) {
      setFilters((prevState: Filter) => ({
        ...prevState,
        category: category[0].title,
      }));
    }
  }, [category]);

  return (
    <section className="container mx-auto py-[90px] px-[30px]">
      <h1 className="text-center w-full">{category !== undefined && category[0].title}</h1>
      <Products />
    </section>
  );
}

export default Category;
