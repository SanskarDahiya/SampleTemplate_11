import React from "react";
import { Link, useNavigate } from "react-router-dom";
import MainModalScreen from "./MainModalScreen";
import { LoginTop, LoginMiddle, LoginBottomButton, LoginBottomLink } from ".//Login";
const methods = [
  {
    name: "New password",
    style: {
      "paddingTop": "8px",
      "paddingBottom": "8px"
    },
    topHeading: "Enter your new password below.",
    topHeadingStyle: {
      "width": "497px",
      "height": "36px",
      paddingBottom: "20px",
      "color": "#303F60",
      "textAlign": "left",
      "font": "normal normal normal 14px/20px Helvetica Neue",
      "letterSpacing": "0px",
      "opacity": "1"
    },
    elemPlaceholder: "Enter your password",
    elemStyle: {
      "width": "480px",
      "height": "35px",
      "border": "1px solid #43AFFF",
      "background": "#E8E8E833 0% 0% no-repeat padding-box",
      "borderRadius": "5px",
      "opacity": "1"
    },
    type: "password"
  },
  {
    name: "Confirm new password",
    style: {
      "paddingTop": "8px",
      "paddingBottom": "8px"
    },
    elemPlaceholder: "Enter your password",
    elemStyle: {
      "width": "480px",
      "height": "35px",
      "border": "1px solid #43AFFF",
      "background": "#E8E8E833 0% 0% no-repeat padding-box",
      "borderRadius": "5px",
      "opacity": "1"
    },
    type: "password"
  }
];

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <MainModalScreen
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
      }}
    >
      <LoginTop
        name="Reset Your Password"
        style={{
          paddingBottom: 0
        }}
      />
      <LoginMiddle param={methods} />
      <LoginBottomButton
        onClick={() => {
          navigate("/resetPasswordSucess");
        }}
        name={"Reset"}
      />
    </MainModalScreen>
  );
};

export default ResetPassword;
