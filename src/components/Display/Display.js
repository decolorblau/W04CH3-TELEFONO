import PropTypes from "prop-types";

const Display = ({ number }) => {
  return (
    <span data-testid="display" className="number">
      {number}
    </span>
  );
};

Display.propTypes = {
  number: PropTypes.string.isRequired,
};
export default Display;
