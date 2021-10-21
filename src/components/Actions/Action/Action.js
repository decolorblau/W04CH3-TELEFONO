import PropTypes from "prop-types";

const Action = ({ textAction, actionOnClick, className, disabled }) => {
  return (
    <a
      href="ActionButton"
      className={className}
      onClick={actionOnClick}
      disabled={disabled}
    >
      {textAction}
    </a>
  );
};

Action.propTypes = {
  textButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Action;
