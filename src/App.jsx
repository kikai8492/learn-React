import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px",
  };

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>React App</h1>
      <ColorfulMessage color="green" message="React" />
      <ColorfulMessage color="pink" message="React.js学習中" />

      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;
