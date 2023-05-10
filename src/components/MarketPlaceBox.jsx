
import PropTypes from "prop-types"

const MarketPlaceBox = ({icon, title, description}) => {
  return (
    <div className="border  p-8 rounded-lg flex flex-col  gap-4 text-[#263959] items-center justify-center h-60 max-w-[80%] shadow-custom  transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer no-tap-highlight">
            {icon}
            <p className="text-[#263959] font-semibold min-w-[8rem] whitespace-nowrap text-center">{title}</p>
            <p>{description}</p>
            
           </div>
  )
}

MarketPlaceBox.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  

export default MarketPlaceBox