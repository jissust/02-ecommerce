import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/products";
import Carousel from "../Carousel/Carousel";


function ProductDetatil () {
    const {id} = useParams();
    const {products} = useContext(ProductsContext);
    const product = products.find(p => p.id === Number(id));

    return (
        <div className="container mx-auto py-[90px]">
            <section className="py-5">
                Migas
            </section>
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                        <Carousel images={product.images}/>
                    </div>
                    <div>
                        <h1>
                            {product.title}
                        </h1>
                        <p>
                            {product.description}
                        </p>
                        <div>
                            Variantes: talle, color.
                        </div>
                        <button>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetatil;