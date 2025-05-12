import Carousel from "../Carousel/Carousel";
import "./Home.css"

function Home () {
    const images = [
        "https://as01.epimg.net/masdeporte/imagenes/2023/04/30/reportajes/1682876077_304314_1682886639_noticiareportajes_grande.jpg",
        "https://as01.epimg.net/masdeporte/imagenes/2023/04/30/reportajes/1682876077_304314_1682886639_noticiareportajes_grande.jpg",
        "https://as01.epimg.net/masdeporte/imagenes/2023/04/30/reportajes/1682876077_304314_1682886639_noticiareportajes_grande.jpg"
    ]

    const categories = [
        "Categoria 1",
        "Categoria 2",
        "Categoria 3",
        "Categoria 4",
        "Categoria 5",
        "Categoria 6",
        "Categoria 7",
        "Categoria 8",
    ]
    return (
        <section>
        <section id="home-carousel" className="slider-container">
            <Carousel images={images} autoplay={true} dots={false}/>
        </section>
        <section className="slider-container py-[60px]">
            <h1 className="text-center pb-[30px]">Categorías</h1>
            <Carousel images={categories} autoplay={true} type="text" slidesToShow={6} speed={3000} dots={false} />
        </section>
        </section>

    )
}

export default Home;