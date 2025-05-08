import Slider from "react-slick"

function Carousel ({images}:{images: string[]}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
      );
}

export default Carousel;