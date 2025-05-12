import React from "react";
import Slider from "react-slick";

function Carousel({
  images,
  autoplay,
  type,
  slidesToShow,
  speed,
  dots,
}: {
  images: string[];
  autoplay?: boolean;
  type?: string;
  slidesToShow?:number;
  speed?:number;
  dots?:boolean
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
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          {type === "text" ? (
            <div className="w-[200px] h-[200px] flex items-center justify-center bg-gray-500 text-white text-4xl rounded-[50%]">
              <h2>
              {img}
              </h2>
            </div>
          ) : (
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-auto object-cover"
            />
          )}
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
