import Carousel from "../Carousel/Carousel";
import "./Home.css";
import {categories} from "../../mocks/categories.json";
import { useContext } from "react";
import { ProductsContext } from "../../context/products";

function Home() {
  const { products } = useContext(ProductsContext);

  const images = [
    {
      url: "/product/1",
      image: "https://as01.epimg.net/masdeporte/imagenes/2023/04/30/reportajes/1682876077_304314_1682886639_noticiareportajes_grande.jpg"
    },
    {
      url: "/product/2",
      image: "https://as01.epimg.net/masdeporte/imagenes/2023/04/30/reportajes/1682876077_304314_1682886639_noticiareportajes_grande.jpg"
    },
    {
      url: "/product/3",
      image: "https://as01.epimg.net/masdeporte/imagenes/2023/04/30/reportajes/1682876077_304314_1682886639_noticiareportajes_grande.jpg"
    },
  ];
  
  return (
    <section>
      <section id="home-carousel" className="slider-container">
        <Carousel
          type="home"
          images={images}
          autoplay={true}
          dots={false}
          responsive={[
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        />
      </section>
      {/*
      <section className="slider-container py-[60px]">
        <h1 className="text-center pb-[30px]">Categorías</h1>
        <div className="container mx-auto">
        <Carousel
          images={categories}
          autoplay={true}
          type="text"
          slidesToShow={4}
          speed={3000}
          dots={false}
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        />
        </div>
      </section>
*/}
      <section className="slider-container py-[60px]">
        <h1 className="text-center pb-[30px]">Ultimos productos</h1>
        <div className="container mx-auto">
        <Carousel
          images={products.slice(-6)}
          autoplay={true}
          type="card"
          slidesToShow={4}
          speed={3000}
          dots={false}
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        />
        </div>
      </section>

    </section>
  );
}

export default Home;
