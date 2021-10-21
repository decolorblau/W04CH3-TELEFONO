import { useState, useRef } from "react";
import "./App.css";
import Actions from "./components/Actions/Actions";
import Context from "./Context/Context";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [display, setDisplay] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [disabled, setDisable] = useState(true);
  const timer = useRef(null);

  const captureNumbers = (event) => {
    if (display.length < 9) setDisplay(display + event.target.textContent);
    else {
      setDisable(false);
    }
  };

  const deleteNumbers = () => {
    setDisplay("");
  };

  const finishCall = () => {
    setIsCalling(false);
    setDisplay("");
    setDisable(true);
  };
  const calling = () => {
    if (display.length === 9) {
      setIsCalling(true);
      timer.current = setTimeout(() => {
        finishCall();
      }, 5000);
    } else {
      finishCall();
    }
  };

  const hang = () => {
    finishCall();
    clearTimeout(timer.current);
  };

  return (
    <div className="container">
      <Context.Provider
        value={{
          display,
          captureNumbers,
          deleteNumbers,
          isCalling,
          calling,
          hang,
          disabled,
        }}
      >
        <Info state={isCalling} />
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard />
          </div>
          <div className="actions">
            <Display number={display} />
            <Actions />
          </div>
        </main>
      </Context.Provider>
    </div>
  );
}

export default App;
