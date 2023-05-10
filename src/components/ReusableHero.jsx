import PropTypes from 'prop-types';

const ReusableHero = ({ title, subtitle, buttonText, backgroundImage }) => {
    return (
        <div className="w-full bg-white relative min-h-screen overflow-hidden ">
      <div className="max-w-full w-[90%] m-auto md:flex justify-between    py-8 gap-40">
      <div
        className=" bg-cover bg-top  w-[50%]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        </div>
        <div className=" h-full py-[15rem] text-black">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ">{title}</h1>
          <p className="text-xl md:text-2xl  mt-4">{subtitle}</p>
          <button className="bg-blue-500 hover:bg-blue-600  font-bold py-2 px-4 rounded mt-8">
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
  };
  
  
  export default ReusableHero;