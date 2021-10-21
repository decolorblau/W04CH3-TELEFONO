import PropTypes from "prop-types";
import Action from "./Action/Action";

const Actions = ({ isCalling, disabled }) => {
  return isCalling ? (
    <Action
      textAction={"Hang"}
      className={"hang active"}
      actionOnClick={() => {}}
      disabled="false"
    />
  ) : (
    <Action
      textAction={"Call"}
      className={"call"}
      actionOnClick={() => {}}
      disabled={disabled}
    />
  );
};

Actions.propTypes = {
  isCalling: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Actions;
