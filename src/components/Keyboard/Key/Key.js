import PropTypes from "prop-types";

const Key = ({ textButton, actionOnClick, className, isCalling }) => {
  return isCalling ? (
    <li>
      <button className={className} onClick={actionOnClick} disabled="true">
        {textButton}
      </button>
    </li>
  ) : (
    <li>
      <button className={className} onClick={actionOnClick} disabled="false">
        {textButton}
      </button>
    </li>
  );
};

Key.propTypes = {
  textButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isCalling: PropTypes.bool.isRequired,
};

export default Key;
