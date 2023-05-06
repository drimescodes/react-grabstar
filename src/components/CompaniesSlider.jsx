import { Dribbble } from "../assets";
import { Behance } from "../assets";
import { Instagram } from "../assets";
import { GitHub } from "../assets";
import { Stackoverflow } from "../assets";
import "./CompaniesSlider.css";

const CompaniesSlider = () => {
  const companyLogos = [
    { src: Dribbble, alt: "Dribbble" },
    { src: Behance, alt: "Behance" },
    { src: Instagram, alt: "Instagram" },
    { src: GitHub, alt: "GitHub" },
    { src: Stackoverflow, alt: "Stackoverflow" },
    // Duplicate the logos to create an infinite effect
    
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="max-w-full w-[90%] m-auto  py-4 md:py-12 ">
        <div className="slider ">
          {companyLogos.map((logo, index) => (
            <div key={index} className="slide">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesSlider;
