import PropTypes from 'prop-types';

const FeatureBlock = ({ title, children }) => {
    return (
      <div className="transform hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer no-tap-highlight">
        <h1 className="font-semibold text-xl pb-4">{title}</h1>
        <p>{children}</p>
      </div>
    );
  };
  
  FeatureBlock.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  export default FeatureBlock;