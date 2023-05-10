import PropTypes from 'prop-types';

const ReusableHero = ({ title, subtitle, buttonText, backgroundImage, className }) => {
    return (
        <div className={`w-full bg-white relative min-h-screen overflow-hidden ` }>
      <div className={`max-w-full w-[90%] m-auto flex flex-col-reverse md:flex md:flex-row justify-between  items-center  py-8 gap-8 md:gap-40 ${className}`}>
      

        <img

        src={backgroundImage}
        className=" md:w-[50%] "
        />

        <div className="  md:h-full pt-16 text-[#263959] md:w-[50%] md:max-w-[40%] flex flex-col gap-y-8 md:gap-y-16 justify-between items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[4rem]">{title}</h1>
          <p className="text-xl md:text-2xl  ">{subtitle}</p>
          <button className="bg-[#3EE8B5] hover:bg-[#1A906B] shadow-custom font-bold py-4  px-6 rounded-md transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer no-tap-highlight">
            {buttonText}
          </button>
        </div>
      
      </div>
      </div>

    );
  };

  ReusableHero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    className: PropTypes.string
  };
  
  
  export default ReusableHero;