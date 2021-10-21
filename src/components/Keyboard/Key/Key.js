import PropTypes from "prop-types";

const Key = ({ number, actionOnClick }) => {
  return (
    <button className="key" onClick={actionOnClick}>
      {number}
    </button>
  );
};

export default Key;

Key.propTypes = {
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
