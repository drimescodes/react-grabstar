import PropTypes from 'prop-types';

const FeatureBlock = ({ title, children }) => {
    return (
      <div>
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