import userIcon from "../../assets/user/user-icon.jpg";
import { useState } from "react";

function Header() {
  const [toogleHidden, setToogleHidden] = useState(true);
  const [hideMenu, setHideMenu] = useState(true);

  const toogleBlock = () => {
    setToogleHidden((prevState) => !prevState);
  }

  const showHideMenu = () => {
    setHideMenu((prevState) => !prevState);
    console.log(hideMenu)
  }

  return (
    <nav className="w-full sm:h-[80px] bg-sky-500 text-white">
      <div className="container block sm:flex mx-auto h-full p-5 sm:p-0">
        <div className="relative grow grid items-center justify-center sm:justify-start">
          Logo
          <button className="absolute top-0 right-0 px-5 block sm:hidden" onClick={showHideMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="20"
            >
              <path
                fill="white"
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </button>
        </div>
        <div className={`grow items-center py-5 sm:py-0 ${hideMenu ? "hidden": ""}  sm:grid `}>
          <div className="relative w-full">
            <button className="absolute right-0 h-full flex items-center px-[20px] border z-10 hover:cursor-pointer">
              <svg
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
            <input
              type="text"
              className="h-[60px] border rounded-xs w-full focus:outline-0 px-[20px] relative z-5"
              placeholder="Search..."
            />
          </div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="10"
              >
                <path
                  d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  fill="white"
                />
              </svg>
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
