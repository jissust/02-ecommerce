import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products";
import { CartContext } from "../../context/cart";
import Carousel from "../Carousel/Carousel";
import PagoButton from "../PagoButton/PagoButton";

function ProductDetatil() {
  const { id } = useParams();
  const {cart, setCart} = useContext(CartContext)
  const { products } = useContext(ProductsContext);
  
  const product = products.find((p) => p.id === Number(id));

  const addCart = () => {
    const productWithQuantity = {...product, quantity:1};
    setCart((prevCart) => [...prevCart, productWithQuantity]);
  }

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
            <button onClick={addCart}>addCart</button>
            <PagoButton products={[product]} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetatil;
