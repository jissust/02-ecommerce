import Carousel from "../Carousel/Carousel";
import useGetFeaturedProducts from "../../api/useGetFeaturedProducts.tsx";

function CarouselFeatured() {
  const { result, loading } = useGetFeaturedProducts();
    
  return (
    <section id="home-carousel" className="slider-container">
      {loading && <div>Loading...</div>}
      {result !== null && (
        <Carousel
          type="home"
          images={result}
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
      )}
    </section>
  );
}

export default CarouselFeatured;
