import { Dribbble } from "../assets";
import { Behance } from "../assets";
import { Instagram } from "../assets";
import { Github } from "../assets";
import { Stackoverflow } from "../assets";
import "./CompaniesSlider.css"


const CompaniesSlider = () => {
  const companyLogos = [
    { src: Dribbble, alt: "Dribbble" },
    { src: Behance, alt: "Behance" },
    { src: Instagram, alt: "Instagram" },
    { src: Github, alt: "Github" },
    { src: Stackoverflow, alt: "Stackoverflow" },
  ];
  

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="max-w-full w-[90%] m-auto py-8 md:py-12 ">
        <div className="slider flex justify-between gap-10 md:gap-16 lg:gap-20 h-100% ">
          {companyLogos.map((logo, index) => (
            <div key={index} className="slide ">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesSlider;
