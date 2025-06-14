import { Link } from "react-router-dom";
import { Product } from "../../type/type";

interface PagoButtonProps {
  product: Product;
}

function Card({ product }: PagoButtonProps) {
  return (
    <div className="m-3 bg-white">
      <Link
        key={product.id}
        className="shadow-md h-full"
        to={`/product/${product.id}`}
      >
        {product.images[0] && product.images[0].url && (
        <img
          src={`${import.meta.env.VITE_PUBLIC_BACKEND_URL}${
            product.images[0].url
          }`}
          alt={product.title}
        />
        )}
        <div className="p-5 bg-white">
          <h3 className="font-bold">
            {product.title.length > 30
              ? `${product.title.slice(0, 30)}...`
              : product.title}
          </h3>
          <div>${product.price}</div>
        </div>
      </Link>
    </div>
  );
}
export default Card;
