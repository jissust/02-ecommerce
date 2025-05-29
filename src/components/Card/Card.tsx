import { Link } from "react-router-dom";
import { Product } from "../../type/type";

interface PagoButtonProps {
  product: Product;
}

function Card({ product }: PagoButtonProps) {
  return (
    <div className="m-3">
      <Link
        key={product.id}
        className="shadow-md"
        to={`/product/${product.id}`}
      >
        <img src={`${import.meta.env.VITE_PUBLIC_BACKEND_URL}${product.images[0].url}`} alt={product.title} />
        <div className="p-5 bg-white">
          <small className="text-gray-500">{product.categories[0].name}</small>
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
