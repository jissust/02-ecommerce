import userIcon from "../../assets/user/user-icon.jpg";
import { useState } from "react";
import Search from "../Search/Search";
import { BarsIcon, ChevronDownIcon } from "../Icons/Icons";

function Header() {
  const [toogleHidden, setToogleHidden] = useState(true);
  const [hideMenu, setHideMenu] = useState(true);

  const toogleBlock = () => {
    setToogleHidden((prevState) => !prevState);
  }

  const showHideMenu = () => {
    setHideMenu((prevState) => !prevState);
  }

  return (
    <nav className="w-full sm:h-[80px] bg-sky-500 text-white">
      <div className="container block sm:flex mx-auto h-full p-5 sm:p-0">
        <div className="relative grow grid items-center justify-center sm:justify-start">
          Logo
          <button className="absolute top-0 right-0 px-5 block sm:hidden" onClick={showHideMenu}>
            <BarsIcon 
            color={'#FFFFFF'}/>
          </button>
        </div>
        <div className={`grow items-center py-5 sm:py-0 ${hideMenu ? "hidden": ""}  sm:grid `}>
            <Search />          
        </div>
        <div className={`grow items-center justify-items-end ${hideMenu ? "hidden": ""} sm:grid`}>
          <div className="w-[50%] relative h-full flex items-center gap-5">
            <img
              src={userIcon}
              alt="login icon"
              className="w-[50px] h-[50px] bg-black rounded-full"
            />
            <button
              className="h-full flex items-center hover:cursor-pointer"
              onClick={toogleBlock}
            >
                <ChevronDownIcon 
                color={'#FFFFFF'}/>
            </button>

            <ul
              className={`bg-gray-100 w-full absolute translate-y-[120px] p-3 rounded-sm text-black max-w-[200px] ${
                toogleHidden ? "hidden" : ""
              }`}
            >
              <li className="flex gap-5">
                <img
                  src={userIcon}
                  alt="login icon"
                  className="w-[50px] h-[50px] bg-black rounded-full"
                />
                <div>
                  <div>Usuario</div>
                  <div>
                    <a href="">Perfil</a>
                  </div>
                </div>
              </li>
              <li className="break-words border-b py-2">
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </li>
              <li className="break-words border-b py-2">
                <a href="">Salir</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
