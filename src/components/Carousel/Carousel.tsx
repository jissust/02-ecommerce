import { Link } from "react-router-dom";
import Slider from "react-slick";
import Card from "../Card/Card";
import { Product } from "../../type/type";

function Carousel({
  images,
  autoplay,
  type,
  slidesToShow,
  speed,
  dots,
  responsive,
}: {
  images: (Product | string)[];
  autoplay?: boolean;
  type?: string;
  slidesToShow?: number;
  speed?: number;
  dots?: boolean;
  responsive?: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
    };
  }[];
}) {
  const settings = {
    dots: dots ?? true,
    infinite: true,
    slidesToShow: slidesToShow ?? 1,
    slidesToScroll: 1,
    autoplay: autoplay ?? false,
    speed: speed ?? 2000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    responsive: responsive ?? [],
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          {typeof img === "string" ? (
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-auto md:h-[100dvh] object-cover"
            />
          ) : type === "text" ? (
            <Link to={`/category/${img.id}`}>
              <div className="w-[200px] h-[200px]">
                <h2>{img.title}</h2>
              </div>
            </Link>
          ) : type === "card" ? (
            <Card product={img} />
          ) : type === "home" ? (
            <Link to={`/product/${img.id}`} className="cursor-pointer">
              <img
                src={`${import.meta.env.VITE_PUBLIC_BACKEND_URL}${
                  img.images[0].url
                }`}
                alt={`slide-${index}`}
                className="w-full h-auto md:h-[100dvh] object-cover"
              />
            </Link>
          ) : (
            <img
              src={`${import.meta.env.VITE_PUBLIC_BACKEND_URL}${img.url}`}
              alt={`slide-${index}`}
              className="w-full h-auto md:h-[100dvh] object-cover"
            />
          )}
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
