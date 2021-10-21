import PropTypes from "prop-types";

const Action = ({ href, textAction, actionOnClick, className, disabled }) => {
  return (
    <a
      href={href}
      className={className}
      onClick={actionOnClick}
      disabled={disabled}
    >
      {textAction}
    </a>
  );
};

Action.propTypes = {
  href: PropTypes.string.isRequired,
  textAction: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
};

export default Action;
