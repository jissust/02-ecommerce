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
  responsive
}: {
  images: string[];
  autoplay?: boolean;
  type?: string;
  slidesToShow?:number;
  speed?:number;
  dots?:boolean;
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
    responsive: responsive ?? []
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => ( 
        
        <div key={index}>
          {type === "text" ? (
            <Link to={`/category/${images[index].id}`}>
            <div className="w-[200px] h-[200px] flex items-center justify-center bg-gray-500 text-white text-4xl rounded-[50%] mx-auto cursor-pointer">
              <h2>
              {images[index].title }
              </h2>
            </div>
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
