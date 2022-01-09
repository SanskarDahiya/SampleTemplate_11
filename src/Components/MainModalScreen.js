import React from "react";

const MainModalScreen = props => {
  return (
    <div
      style={{
        position: "relative",
        "top": "160px",
        "left": "442px",
        "width": "557px",
        "height": "427px",
        "background": "#FFFFFF 0% 0% no-repeat padding-box",
        "boxShadow": "0px 30px 36px #557DA526",
        "borderRadius": "20px",
        "opacity": "1",
        ...props.style
      }}
    >
      {props.children}
    </div>
  );
};

export default MainModalScreen;
