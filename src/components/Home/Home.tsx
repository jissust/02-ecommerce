import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import SkeletonCard from "../Card/Skeleton/SkeletonCard.tsx";
import useProducts from "../../hooks/useProducts.tsx";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const { products } = useProducts()

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, [products]);

  return (
    <section>
      <section id="home-carousel" className="slider-container">
        <Carousel
          type="home"
          images={products.slice(-3)}
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
          {loading && (
            <div className="m-3 skeleton-card">
              <SkeletonCard count={4} />
            </div>
          )}
          {!loading && (
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
          )}
        </div>
      </section>
    </section>
  );
}

export default Home;
