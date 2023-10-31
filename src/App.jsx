import React from "react";
import TitleMessage from "./components/TitleMessage";
import ColorfulMessage from "./components/ColorfulMessage";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickCountDown = () => {
    setNum(num - 1);
  };

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

      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountDown}>カウントダウン</button>
      <p>{num}</p>
    </React.Fragment>
  );
};

export default App;
