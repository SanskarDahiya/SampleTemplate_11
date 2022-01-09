import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainModalScreen from "./MainModalScreen";
import { VerifyLogin } from "./../Apis";
const methods = [
  {
    name: "Email address",
    field: "email", //<< used to store input
    value: "", //<< Default Value
    style: {
      "paddingBottom": "8px"
    },
    elemPlaceholder: "Enter your email",
    elemStyle: {
      "width": "480px",
      "height": "35px",
      "border": "1px solid #43AFFF",
      "background": "#E8E8E833 0% 0% no-repeat padding-box",
      "borderRadius": "5px",
      "opacity": "1"
    },
    type: "text"
  },
  {
    name: "Password",
    field: "password",
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
    button: "Forgot your password?",
    buttonStyle: {
      "textDecoration": "none",
      "color": "#43AFFF",
      "textAlign": "right",
      "font": "normal normal medium 14px/17px Helvetica Neue",
      "letterSpacing": "0px",
      "opacity": "1"
    },
    buttonClickLink: "/forgetPassword",
    type: "password"
  }
];

const Login = () => {
  const navigate = useNavigate();
  const [data, _setData] = useState();
  const [error, _setError] = useState();

  const setData = (field, value, isError) => {
    if (!field || typeof field !== "string") {
      throw new Error("Invalid field value");
    }
    let _data = data || {};
    if (!_data[field]) {
      _data[field] = {};
    }
    _setError();
    if (isError) {
      value = { error: value };
    } else {
      value = { value, error: undefined };
    }
    _setData({ ..._data, [field]: { ..._data[field], ...value } });
  };
  return (
    <MainModalScreen
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
      }}
    >
      <LoginTop name="Login" />
      <LoginMiddle param={methods} setData={setData} error={error} />
      <LoginBottomButton
        onClick={async () => {
          if (error) {
            _setError();
            setTimeout(() => {
              _setError(error);
            }, 10);
            return;
          }
          const { email: { value: email } = {}, password: { value: password } = {} } = data || {};
          if (!email) {
            setData("email", "No value", true);
            _setError("No Value");
          } else if (!password) {
            setData("password", "No value", true);
            _setError("No Value");
          } else {
            const result = await VerifyLogin({ email, password });
            if (result.error) {
              _setError(result.message || "Something Went Wrong");
            } else {
              navigate("/afterLogin");
            }
          }
        }}
        name={"Login"}
      />
      <LoginBottomLink baseText={"New to MyJobs?"} linkText={"Create an account"} to={"/createAccount"} />
    </MainModalScreen>
  );
};

export const LoginTop = props => {
  const render = props.name || props.children;
  return (
    <div
      style={{
        position: "relative",
        "paddingTop": "30px",
        "paddingBottom": "30px",
        "left": "30px",
        "height": "26px",
        "color": "#303F60",
        "textAlign": "left",
        "font": "normal normal medium 22px/27px Helvetica Neue",
        "letterSpacing": "0px",
        "opacity": "1",
        ...props.style
      }}
    >
      {render}
    </div>
  );
};

export const LoginMiddle = props => {
  const elements = props.param || methods;
  const setData = props.setData;
  const error = props.error;
  return (
    <div
      style={{
        position: "relative",
        "paddingBottom": "30px",
        "left": "30px",
        width: "470px",
        "color": "#303F60",
        "textAlign": "left",
        "font": "normal normal normal 14px/16px Helvetica Neue",
        "letterSpacing": "0px",
        "opacity": "1"
      }}
    >
      {elements.map(
        (
          {
            field,
            custom: CustomComponent,
            name,
            style,
            type,
            elemStyle,
            elemPlaceholder,
            button,
            buttonStyle,
            buttonClickLink,
            topHeading,
            topHeadingStyle
          } = {},
          key
        ) => {
          field = field || "input-" + key;
          return (
            <div key={key} style={style}>
              {CustomComponent ? (
                <CustomComponent />
              ) : (
                <React.Fragment>
                  {topHeading && <div style={topHeadingStyle}>{topHeading}</div>}
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>{name}</div>
                    {button && (
                      <Link style={buttonStyle} to={buttonClickLink}>
                        {button}
                      </Link>
                    )}
                  </div>
                  <div>
                    <input
                      onChange={e => {
                        e.preventDefault();
                        setData(field, e.target.value);
                      }}
                      type={type}
                      style={elemStyle}
                      placeholder={elemPlaceholder}
                    />
                  </div>
                </React.Fragment>
              )}
            </div>
          );
        }
      )}
      {error && (
        <div
          style={{
            width: "470px",
            height: "14px",
            textAlign: "right",
            font: "normal normal normal 12px/14px Helvetica Neue",
            letterSpacing: "0px",
            color: "#FF0000",
            opacity: "0.8"
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};
LoginMiddle.defaultProps = {
  setData: () => {}
};

export const LoginBottomButton = props => {
  const render = props.name || props.children;
  return (
    <div
      style={{
        position: "relative",
        left: "204px",
        width: "148px",
        height: "46px",
        marginBottom: "10px",
        background: "#43AFFF 0% 0% no-repeat padding-box",
        border: "1px solid #43AFFF",
        borderRadius: "5px",
        opacity: "1"
      }}
    >
      <div
        onClick={props.onClick}
        style={{
          textDecoration: "none",
          position: "relative",
          top: "13px",
          left: "53px",
          width: "42px",
          height: "19px",
          textAlign: "center",
          font: "normal normal medium 16px/19px Helvetica Neue",
          letterSpacing: "0px",
          color: "#FFFFFF",
          opacity: "1"
        }}
      >
        {render}
      </div>
    </div>
  );
};

export const LoginBottomLink = props => {
  const baseText = props.baseText;
  const linkText = props.linkText;
  const to = props.to || "/";
  return (
    <div
      style={{
        position: "relative",
        "paddingTop": "30px",
        "paddingBottom": "30px",
        left: "147px",
        width: "262px",
        height: "19px",
        textAlign: "center",
        letterSpacing: "0px",
        opacity: "1"
      }}
    >
      <span
        style={{
          "top": "0px",
          "left": "0.2960052490234375px",
          "width": "121px",
          "height": "19px",
          "color": "#303F60",
          "textAlign": "center",
          "font": "normal normal normal 16px/19px Helvetica Neue",
          "letterSpacing": "0px"
        }}
      >
        {baseText}
      </span>
      <Link
        to={to}
        style={{
          "textDecoration": "none",
          "top": "0px",
          "left": "130px",
          "width": "136px",
          "height": "19px",
          "color": "#43AFFF",
          "textAlign": "center",
          "font": "normal normal medium 16px/19px Helvetica Neue",
          "letterSpacing": "0px"
        }}
      >
        {linkText}
      </Link>
    </div>
  );
};

export default Login;
