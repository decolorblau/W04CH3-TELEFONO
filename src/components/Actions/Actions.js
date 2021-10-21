import Action from "./Action/Action";
import { useContext } from "react";
import Context from "../../Context/Context.js";

const Actions = () => {
  const { calling, hang, isCalling, disabled } = useContext(Context);

  const callAction = (event) => {
    event.preventDefault();
    calling();
  };

  const hangAction = (event) => {
    event.preventDefault();
    hang();
  };

  return (
    <>
      {isCalling ? (
        <Action
          href={"Hang"}
          textAction={"Hang"}
          className={"hang active"}
          actionOnClick={hangAction}
          disabled="false"
        />
      ) : (
        <Action
          href={"Call"}
          textAction={"Call"}
          className={disabled ? "call" : "call active"}
          actionOnClick={callAction}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default Actions;
