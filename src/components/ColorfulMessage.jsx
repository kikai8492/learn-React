import React from "react";
export const TitleMessage = (props) => {
  const titleStyle = {
    color: props.color,
    fontSize: props.fontSize,
  };
  return <h1 style={titleStyle}>{props.children}</h1>; //childrenで表示したい文字列を表示できる
};

export const SubTitleMessage = (props) => {
  const { color, fontSize, children } = props;
  const subTitleStyle = {
    color: color,
    fontSize: fontSize,
  };
  return <h2 style={subTitleStyle}>{children}</h2>;
};

export const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: props.fontSize,
  };
  return <p style={contentStyle}>{props.children}</p>; //childrenで表示したい文字列を表示できる
};
