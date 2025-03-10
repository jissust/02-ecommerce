function Aside(){
    return (
        <section className="w-[20%] bg-blue-100 h-[100vh] p-5">
            <ul>
                <li className="pb-5">
                    <div>
                    Precio:
                    </div>
                    <div className="flex gap-4">
                        <div>Precio máximo:</div>
                        <input type="text" className="border" /> 
                    </div>
                </li>
                <li className="pb-5">
                    <div>Categoría:</div>
                    <ul>
                        <li>
                            Categoría 1
                        </li>
                        <li>
                            Categoría 2
                        </li>
                        <li>
                            Categoría 3
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}

export default Aside 