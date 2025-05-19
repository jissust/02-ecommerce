import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/products";

function Breadcrumbs({ idProduct }) {
  const { products } = useContext(ProductsContext);
  const product = products.find((p) => p.id === Number(idProduct));

  return (
    <nav className="text-sm mb-4">
      <ol className="flex space-x-2">
        <li>
          <Link
            to={`/category/${product.category.id}`}
            className="text-blue-600 hover:underline capitalize"
          >
            {product.category.name}
          </Link>
          <span className="mx-2">/</span>
        </li>
        <li>
            {product.title}
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
