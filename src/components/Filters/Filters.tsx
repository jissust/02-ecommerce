import useFilters from "../../hooks/useFilters";

function Filters() {
  const { filters, setFilters } = useFilters();

  const handleChangeMaxPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      maxPrice: event?.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event?.target.value,
    }));
  };

  return (
    <div className="filters">
      <ul>
        <li className="pb-5">
          <div>Precio:</div>
          <div className="flex gap-4">
            <div>Precio máximo:</div>
            <input
              type="text"
              className="border"
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
          <select id="category" name="category" onChange={handleChangeCategory}>
            <option value="all">Todos</option>
            <option value="Clothes">Clothes</option>
            <option value="Electronics">Electronics</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
