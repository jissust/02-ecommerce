import useProducts from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { Product } from "../../type/type";


function Breadcrumbs({ product }: Product) {

  return (
    <nav className="text-sm mb-4">
      <ol className="flex space-x-2">
        <li>
          <Link
            to={`/category/${product.categories[0].id}`}
            className="text-blue-600 hover:underline capitalize"
          >
            {product.categories[0].name}
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
