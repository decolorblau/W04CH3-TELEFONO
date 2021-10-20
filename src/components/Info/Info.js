import PropTypes from "prop-types";

const Info = ({ state }) => {
  return (
    <span data-testid="info" className={`message ${state ? "" : "off"}`}>
      Calling...
    </span>
  );
};

export default Info;

Info.propTypes = {
  state: PropTypes.bool.isRequired,
};
