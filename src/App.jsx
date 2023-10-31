import React from "react";
import TitleMessage from "./components/TitleMessage";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <React.Fragment>
      <TitleMessage color="red" fontSize="100px">
        React App
      </TitleMessage>

      <ColorfulMessage color="green" fontSize="50px">
        React
      </ColorfulMessage>

      <ColorfulMessage color="pink" fontSize="25px">
        React.js
      </ColorfulMessage>

      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;
