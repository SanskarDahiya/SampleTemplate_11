import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginBottomButton, LoginMiddle, LoginTop } from "./Login";

import MainModalScreen from "./MainModalScreen";

const methods = [
  {
    name: "Email address",
    style: {
      "paddingTop": "8px"
    },
    topHeading: "Enter the email associated with your account and we’ll send you instructions to reset your password.",
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
    elemPlaceholder: "Enter your email",
    elemStyle: {
      "width": "480px",
      "height": "35px",
      marginTop: "10px",
      "border": "1px solid #43AFFF",
      "background": "#E8E8E833 0% 0% no-repeat padding-box",
      "borderRadius": "5px",
      "opacity": "1"
    },
    type: "text"
  }
];
const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <MainModalScreen
      style={{
        "height": "318px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
      }}
    >
      <LoginTop name="Forgot your password?" />
      <LoginMiddle param={methods} />
      <LoginBottomButton
        name="Submit"
        onClick={() => {
          navigate("/resetPassword");
        }}
      />
    </MainModalScreen>
  );
};

export default ForgetPassword;
