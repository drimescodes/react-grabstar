import PropTypes from 'prop-types';

const ReusableHero = ({ title, subtitle, buttonText, backgroundImage, className }) => {
    return (
        <div className={`w-full bg-white relative min-h-screen overflow-hidden ` }>
      <div className={`max-w-full w-[90%] m-auto md:flex justify-between  flex flex-col-reverse   md:gap-x-[15rem] py-12 ${className}`}>
      <div
        className=" bg-cover bg-top h-[25rem] md:h-auto md:w-[50%] "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        </div>
        <div className="min-h-screen  md:h-full pt-16 text-[#263959] md:w-[50%] md:max-w-[40%] flex flex-col gap-y- justify-between items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[4rem]">{title}</h1>
          <p className="text-xl md:text-2xl  ">{subtitle}</p>
          <button className="bg-[#3EE8B5] hover:bg-[#1A906B]  font-bold py-4  px-6 rounded-md transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer no-tap-highlight">
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