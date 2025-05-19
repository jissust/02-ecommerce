import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Carousel({
  images,
  autoplay,
  type,
  slidesToShow,
  speed,
  dots,
  responsive,
}: {
  images: string[];
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
          {type === "text" ? (
            <Link to={`/category/${images[index].id}`}>
              <div className="w-[200px] h-[200px]">
                <h2>{images[index].title}</h2>
              </div>
            </Link>
          ) : type == "card" ? (
            <Link
              key={images[index].id}
              className="shadow-md"
              to={`/product/${images[index].id}`}
            >
              <div className="px-3 ">
                <img src={images[index].images[0]} alt={images[index].title} />
                <div className="p-5 bg-white">
                  <small className="text-gray-500">
                    {images[index].category.name}
                  </small>
                  <h3 className="font-bold">
                    {" "}
                    {images[index].title.length > 30
                      ? `${images[index].title.slice(0, 30)}...`
                      : images[index].title}
                  </h3>
                  <div>${images[index].price}</div>
                </div>
              </div>
            </Link>
          ) : type == "home" ? (
            <Link to={img.url} className="cursor-pointer">
              <img
                src={img.image}
                alt={`slide-${index}`}
                className="w-full h-auto md:h-[100dvh] object-cover"
              />
            </Link>
          ) : (
            <img
              src={img}
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
