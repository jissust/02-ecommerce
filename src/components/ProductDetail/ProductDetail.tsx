import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/products";
import { CartContext } from "../../context/cart";
import Carousel from "../Carousel/Carousel";
import PagoButton from "../PagoButton/PagoButton";
import { CartIcon } from "../Icons/Icons";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function ProductDetatil() {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);
  
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  const addCart = () => {
    const productWithQuantity = { ...product, quantity: 1 };
    setCart((prevCart) => [...prevCart, productWithQuantity]);
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto pb-[50px] px-[30px] py-[90px]">
      <Breadcrumbs idProduct={id} />
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
              onClick={addCart}
              className="flex gap-3 bg-black text-white px-[25px] py-[20px] rounded-xl cursor-pointer"
            >
              Agregar al carro <CartIcon />
            </button>
            {/*<PagoButton products={[product]} />*/}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetatil;
