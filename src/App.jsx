import React from "react";
// import TitleMessage from "./components/TitleMessage";
import {
  ColorfulMessage,
  SubTitleMessage,
  TitleMessage,
} from "./components/ColorfulMessage";
import { useState, useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickCountDown = () => {
    setNum(num - 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      setFaceShowFlag(true);
    } else {
      setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <React.Fragment>
      <TitleMessage color="red" fontSize="100px">
        タイトルメッセージ
      </TitleMessage>

      <SubTitleMessage color="blue" fontSize="50px">
        分割代入を使ったサブタイトルメッセージ
      </SubTitleMessage>

      <ColorfulMessage color="green" fontSize="50px">
        緑のカラフルメッセージ
      </ColorfulMessage>

      <ColorfulMessage color="pink" fontSize="25px">
        ピンクのカラフルメッセージ
      </ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountDown}>カウントダウン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>Σ('◉⌓◉’)</p>}
    </React.Fragment>
  );
};

export default App;
