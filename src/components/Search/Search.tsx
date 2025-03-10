import { SearchIcon } from "../Icons/Icons";

function Search() {
  return (
    <div className="relative w-full">
      <button className="absolute right-0 h-full flex items-center px-[20px] border z-10 hover:cursor-pointer">
        <SearchIcon 
        color={"#FFFFFF"}/>
      </button>
      <input
        type="text"
        className="h-[60px] border rounded-xs w-full focus:outline-0 px-[20px] relative z-5"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
