import PropTypes from "prop-types";
import { useContext } from "react";
import Context from "../../../Context/Context";

const Key = ({ textButton, className }) => {
  const { captureNumbers, deleteNumbers, isCalling } = useContext(Context);

  return (
    <li>
      <button
        className={className}
        onClick={
          textButton === "Delete"
            ? (event) => deleteNumbers(event)
            : (event) => captureNumbers(event)
        }
        disabled={isCalling}
      >
        {textButton}
      </button>
    </li>
  );
};

Key.propTypes = {
  textButton: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Key;
