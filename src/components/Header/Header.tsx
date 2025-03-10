import userIcon from "../../assets/user/user-icon.jpg";
import { useState } from "react";

function Header() {
  const [toogleHidden, setToogleHidden] = useState(true);
  const toogleBlock = () => {
    setToogleHidden((prevState) => !prevState);
  };
  return (
    <nav className="w-full h-[80px] bg-sky-500 text-white">
      <div className="container flex mx-auto h-full">
        <div className="grow-3 grid items-center">Logo</div>
        <div className="grow-7 grid items-center">
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
        <div className="grow-3 grid items-center justify-items-end">
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
              <li className="break-words border-b py-2">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
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
