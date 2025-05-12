import { useContext, useState  } from "react";
import { SearchIcon } from "../Icons/Icons";
import productsData from "../../mocks/products.json";
import { ProductsContext } from "../../context/products.tsx";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const {products, setProducts} = useContext(ProductsContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value)
    handleClick()
  }

  const handleClick = () =>{
    const filtered = productsData.products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProducts(filtered)
  }

  return (
    <div className="relative w-full">
      <button className="absolute right-0 h-full flex items-center px-[20px] border z-10 hover:cursor-pointer" onClick={handleClick}>
        <SearchIcon 
        color={"#FFFFFF"}/>
      </button>
      <input
        type="text"
        className="h-[60px] border rounded-xs w-full focus:outline-0 px-[20px] relative z-5"
        placeholder="Buscar..."
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
