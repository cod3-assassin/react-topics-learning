import React from "react";

const CSSinReact = () => {
  const style = {
    color: "red",

    width: "280px",
  };
  const styleForPTag = {
    color: "blue",
  };
  return (
    <div>
      <h1 style={style}>CSS in react</h1>
      <div>
        <p style={styleForPTag}>
          You can define css style variable in react and aslo put this as style
          ,you can also define inline css use bootstarp , scss ,Tailwind is also
          good option !
        </p>
      </div>
    </div>
  );
};

export default CSSinReact;
