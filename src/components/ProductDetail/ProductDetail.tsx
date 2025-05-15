import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products";
import Carousel from "../Carousel/Carousel";
import MercaPagoButton from "../MercadoPagoButton/MercadoPagoButton";

function ProductDetatil() {
  const [preferenceId, setPreferenceId] = useState("");
  const [cart, setCart] = useState([]);
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p.id === Number(id));

  const createPreference = () => {
    fetch("http://localhost:3000/create_preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({products: cart}),
    })
      .then((res) => res.json())
      .then((data) => {
        setPreferenceId(data.id);
      });
  };

  const addCart = () => {
    setCart((prevCart) => [...prevCart, product]);
  }

  useEffect(() => {
    console.log("valor cart:")
    console.log(cart)
  }, [cart]);

  return (
    <div className="container mx-auto py-[90px]">
      <section className="py-5">Migas</section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <Carousel images={product.images} />
          </div>
          <div>
            <small>{product.category.name}</small>
            <h1>{product.title}</h1>
            <h2 className="mb-[20px]">$ {product.price}</h2>
            <p className="mb-[20px]">{product.description}</p>
            <div className="mb-[20px]">Variantes: talle, color.</div>
            <button
              className="bg-black text-white px-[25px] py-[20px] rounded-xl cursor-pointer"
              onClick={createPreference}
            >
              Comprar
            </button>
            <button onClick={addCart}>addCart</button>
            {preferenceId && (
              <MercaPagoButton preferenceIdProduct={preferenceId} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetatil;
