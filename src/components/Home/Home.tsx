import Carousel from "../Carousel/Carousel";
import "./Home.css";

function Home() {
  const images = [
    "https://as01.epimg.net/masdeporte/imagenes/2023/04/30/reportajes/1682876077_304314_1682886639_noticiareportajes_grande.jpg",
    "https://as01.epimg.net/masdeporte/imagenes/2023/04/30/reportajes/1682876077_304314_1682886639_noticiareportajes_grande.jpg",
    "https://as01.epimg.net/masdeporte/imagenes/2023/04/30/reportajes/1682876077_304314_1682886639_noticiareportajes_grande.jpg",
  ];

  const categories = [
    "Categoria 1",
    "Categoria 2",
    "Categoria 3",
    "Categoria 4",
    "Categoria 5",
    "Categoria 6",
    "Categoria 7",
    "Categoria 8",
  ];
  return (
    <section>
      <section id="home-carousel" className="slider-container">
        <Carousel
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
    </section>
  );
}

export default Home;
