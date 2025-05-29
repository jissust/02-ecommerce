import { ChangeEvent } from "react";
import { Filter } from "../../type/type";
import useFilters from "../../hooks/useFilters";
import useGetCategories from "../../api/useGetCategories.tsx";

function Filters() {
  const { filters, setFilters } = useFilters();
  const { categories, loading } = useGetCategories();

  const handleChangeMaxPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState: Filter) => ({
      ...prevState,
      maxPrice: Number(event?.target.value),
    }));
  };

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState: Filter) => ({
      ...prevState,
      category: event?.target.value,
    }));
  };

  return (
    <div className="filters">
      <ul>
        <li className="pb-5">
          <div className="">
            <label className="mb-2">Precio máximo:</label>
            <input
              type="text"
              className="bg-white h-[40px] rounded-[5px] px-[10px] mb-2 w-full"
              id="maxPrice"
              name="maxPrice"
              onChange={handleChangeMaxPrice}
              value={filters.maxPrice}
            />
          </div>
          ${filters.maxPrice}
        </li>
        <li className="pb-5">
          <label>Categoría:</label>
          <div>
            <select
              id="category"
              name="category"
              onChange={handleChangeCategory}
              className="w-full bg-white h-[40px] rounded-[5px] px-[10px] my-2"
            >
              <option value="all">Todos</option>
              
              {!loading && categories !== null && categories.map((category) => {
                return (
                  <option key={category.id} value={category.title}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
