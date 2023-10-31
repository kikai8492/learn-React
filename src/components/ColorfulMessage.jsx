import React from "react";

const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: props.fontSize,
  };
  return <p style={contentStyle}>{props.children}</p>; //childrenで表示したい文字列を表示できる
};

export default ColorfulMessage;
