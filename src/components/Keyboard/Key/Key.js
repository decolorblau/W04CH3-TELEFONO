import PropTypes from "prop-types";

const Key = ({ textButton, actionOnClick, className, disabled }) => {
  return (
    <li>
      <button className={className} onClick={actionOnClick} disabled={disabled}>
        {textButton}
      </button>
    </li>
  );
};

Key.propTypes = {
  textButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Key;
