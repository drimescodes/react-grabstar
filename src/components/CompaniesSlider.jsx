import { Dribbble } from "../assets";
import { Behance } from "../assets";
import { Instagram } from "../assets";
import { GitHub } from "../assets";
import { Stackoverflow } from "../assets";

import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const CompaniesSlider = () => {
  const companyLogos = [
    { src: Dribbble, alt: "Dribbble" },
    { src: Behance, alt: "Behance" },
    { src: Instagram, alt: "Instagram" },
    { src: GitHub, alt: "GitHub" },
    { src: Stackoverflow, alt: "Stackoverflow" },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-full w-[90%] m-auto py-12">
        <Swiper
          spaceBetween={10}
          slidesPerView={4} // Change this value according to the number of visible slides you want
          speed={1000} // Adjust the slide transition speed (in ms)
          autoplay={{
            delay: 1000, // Adjust the delay between slides (in ms)
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {companyLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo.src} alt={logo.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CompaniesSlider;
