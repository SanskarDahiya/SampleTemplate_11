import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import ForgetPassword from "./Components/ForgetPassword";
import ResetPassword from "./Components/ResetPassword";
import CreateAccount from "./Components/CreateAccount";
import { User } from "./Redux";

function App() {
  const [user, updateUser] = useState({ active: false });
  user._updateUser = param => {
    // Context Modifier -> Used in <User.Consumer>
    updateUser({ ...user, ...param });
  };
  return (
    <User.Provider value={user}>
      <div style={{ position: "absolute", zIndex: "-1" }}>
        <div
          style={{
            position: "relative",
            top: "0px",
            left: "0px",
            height: "362px",
            width: "1440px",
            background:
              "transparent linear-gradient(253deg, var(--unnamed-color-303f60) 0%, #1A253C 100%) 0% 0% no-repeat padding-box",
            background: "transparent linear-gradient(253deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box",
            opacity: "1"
          }}
        />
        <div
          style={{
            position: "relative",
            top: "0px",
            left: "0px",
            height: "900px",
            width: "1440px",
            background: "#EDF6FF 0% 0% no-repeat padding-box",
            opacity: "1"
          }}
        />
      </div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </User.Provider>
  );
}

export default App;
