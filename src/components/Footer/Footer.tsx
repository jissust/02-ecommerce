function Footer() {
  return (
    <footer className="w-full bg-gray-500 pt-[100px] px-[30px]">
      <div className=" grid grid-cols-1 sm:grid-cols-2 container m-auto pb-[100px] border-b">
        <div>
          <h1>Logo</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2">
          <div>
            <h3>Lista</h3>
            <ul>
              <li>Acceso 1</li>
              <li>Acceso 2</li>
              <li>Acceso 3</li>
            </ul>
          </div>
          <div>
            <h3>Newsletter</h3>
            <form action="">
              <div>
                <input
                  className="h-[40px] rounded-[5px] bg-white mb-3 w-full px-[10px]"
                  type="text"
                  name="name"
                />
              </div>
              <div>
                <input
                  className="h-[40px] rounded-[5px] bg-white mb-3 w-full px-[10px]"
                  type="text"
                  name="email"
                />
              </div>
              <button className="bg-black text-white rounded-md w-full text-center py-[15px]">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 pb-[100px] pt-[50px] max-w-[1300px] m-auto">
        <div>Templune 2022 | Todos los derechos reservados</div>
        <div className="flex justify-start sm:justify-end">
          <ul className="flex gap-5">
            <li>instagram</li>
            <li>Youtube</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
