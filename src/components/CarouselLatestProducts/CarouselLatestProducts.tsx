import Carousel from "../Carousel/Carousel";
import useGetLatestProducts from "../../api/useGetLatestProducts.tsx";
import SkeletonCard from "../Card/Skeleton/SkeletonCard.tsx";

function CarouselLatestProducts() {
  const { result, loading } = useGetLatestProducts();
  
  return (
    <section className="slider-container py-[60px]">
      <h1 className="text-center pb-[30px]">Ultimos productos</h1>
      <div className="container mx-auto">
        {loading && (
          <div className="m-3 skeleton-card">
            <SkeletonCard count={4} />
          </div>
        )}
        {!loading && result !== null && (
          <Carousel
            images={result}
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
  );
}

export default CarouselLatestProducts;
