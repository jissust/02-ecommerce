import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Product, ProductCart } from "../../type/type";
import { CartIcon } from "../Icons/Icons";
import Carousel from "../Carousel/Carousel";
/* import Breadcrumbs from "../Breadcrumbs/Breadcrumbs"; */
import SkeletonProductDetailCarousel from "./Skeleton/SkeletonProductDetailCarousel";
import SkeletonProductDetailInfo from "./Skeleton/SkeletonProductDetailInfo";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { toast } from "react-toastify";

function ProductDetatil() {
  const { id } = useParams();
  const { setCart } = useCart();
  const { products } = useProducts();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const product = products.find((p: Product) => p.id === Number(id)) as Product;

  const addCart = () => {
    const productWithQuantity: ProductCart = { ...product, quantity: 1 };
    setCart((prevCart) => [...prevCart, productWithQuantity]);
    
    toast.success('Producto agregado!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false
    })

    navigate("/checkout");
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, [product]);

  return (
    <div className="container mx-auto pb-[50px] px-[30px] py-[90px]">
      {/*{!loading && <Breadcrumbs product={product} />} */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            {loading && <SkeletonProductDetailCarousel />}
            {!loading && <Carousel images={product.images} />}
          </div>
          {loading && <SkeletonProductDetailInfo />}
          {!loading && (
            <div>
              <h1>{product.title}</h1>
              <div className="flex gap-4 mb-[20px]">
                <h2>$ {product.price}</h2>
                <div className="flex gap-1">
                  {product.categories.map((p, i) => {
                    return (
                      <Link
                        to={`/category/${p.id}`}
                        className="text-white bg-black p-2 rounded-lg cursor-pointer text-[12px] flex items-center justify-items-center
"
                        key={i}
                      >
                        {p.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <p className="mb-[20px]">{product.description}</p>
              <div className="mb-[20px]">Variantes: talle, color.</div>
              <button
                onClick={addCart}
                className="flex gap-3 bg-black text-white px-[25px] py-[20px] rounded-xl cursor-pointer"
              >
                Agregar al carro <CartIcon />
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

export default ProductDetatil;
