import "./Home.css";
import CarouselFeatured from "../CarouselFeatured/CarouselFeatured.tsx";
import CarouselLatestProducts from "../CarouselLatestProducts/CarouselLatestProducts.tsx";

function Home() {
  
  return (
    <section>
      <CarouselFeatured />
      <CarouselLatestProducts />
    </section>
  );
}

export default Home;
