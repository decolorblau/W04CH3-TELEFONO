import Key from "./Key/Key";
import PropTypes from "prop-types";

const Keyboard = (isCalling) => {
  const keyboardNumbers = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    "Delete",
  ];
  return (
    <ol className="keyboard">
      {keyboardNumbers.map((number, i) => (
        <Key
          key={i}
          textButton={number}
          className={`key${number === "Delete" ? " big" : ""}`}
          actionOnClick={() => {}}
          isCalling={isCalling}
        />
      ))}
    </ol>
  );
};

Keyboard.propTypes = {
  isCalling: PropTypes.bool.isRequired,
};

export default Keyboard;
