import "./App.css";
import Actions from "./components/Actions/Actions";
import Context from "./components/Context/Context";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const isCalling = false;

  return (
    <>
      <Info state={true} />
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard isCalling={isCalling} />
        </div>
        <div className="actions">
          <Display number={456} />
          <Actions isCalling={isCalling} disabled={isCalling} />
        </div>
      </main>
    </>
  );
}

export default App;
