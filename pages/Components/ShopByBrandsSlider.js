import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ShopByBrandsSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <h1 style={{borderBottom: '2px solid red'}} className="flex justify-center pb-4 mx-2 my-4 text-2xl md:text-3xl lg:text-4xl">Shops By Brand</h1>
      <div>
      <Slider {...settings}>
        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>

        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>

        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>

        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>

        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>

        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>
        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>
        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>
        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>
        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>
        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>
        <div>
          <img
            className=""
            src="https://w7.pngwing.com/pngs/2/19/png-transparent-logo-samsung-electronics-organization-samsung-galaxy-samsung-blue-company-label.png"
            alt="Shoes"
          />
        </div>
      </Slider>
    </div>
    </div>
    
  );
};

export default ShopByBrandsSlider;
