import { Link } from "react-router-dom";

function Card({ product }) {
  return (
    <div className="m-3">
      <Link
        key={product.id}
        className="shadow-md"
        to={`/product/${product.id}`}
      >
        <img src={product.images[0]} alt={product.title} />
        <div className="p-5 bg-white">
          <small className="text-gray-500">{product.category.name}</small>
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
