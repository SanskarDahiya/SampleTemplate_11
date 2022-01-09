import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginBottomButton, LoginMiddle, LoginTop, LoginBottomLink } from "./Login";

import MainModalScreen from "./MainModalScreen";

const customMethods = [
  {
    custom: () => {
      return "sj";
    }
  },
  {
    name: "Full name*",
    style: {
      "paddingTop": "8px",
      "paddingBottom": "16px"
    },
    elemPlaceholder: "Enter your full name",
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
  },
  {
    name: "Email address*",
    style: {
      "paddingTop": "8px",
      "paddingBottom": "16px"
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
  },
  {
    custom: () => {
      return "sj";
    }
  },
  {
    name: "Skills",
    style: {
      "paddingTop": "8px",
      "paddingBottom": "16px"
    },
    elemPlaceholder: "Enter comma separated skills",
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
const CreateAccount = () => {
  const navigate = useNavigate();
  return (
    <MainModalScreen
      style={{
        "height": "711px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
      }}
    >
      <LoginTop name="Signup" />
      <LoginMiddle param={customMethods} />
      <LoginBottomButton
        name="Signup"
        onClick={() => {
          navigate("/SignupSucessFull");
        }}
      />
      <LoginBottomLink baseText={"Have an account?"} linkText={"Login"} to={"/login"} />
    </MainModalScreen>
  );
};

export default CreateAccount;
