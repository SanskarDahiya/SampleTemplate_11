import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User } from "../Redux";

const defaultStyles = {
  position: "relative"
};
const HeaderName = [
  { name: "My", style: { color: "#FFFFFF" } },
  { name: "Jobs", style: { color: "#43AFFF" } }
];

const ShowLoginAvatar = () => {
  const currentPathName = useLocation().pathname;
  if (currentPathName === "/login") {
    return <React.Fragment />;
  }
  return (
    <Link
      to="/login"
      style={{
        textDecoration: "none",
        position: "relative",
        top: "12px",
        right: "70px",
        width: "148px",
        height: "46px",
        background: "#43AFFF33 0% 0% no-repeat padding-box",
        border: "1px solid #43AFFF",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: "1"
      }}
    >
      <div
        style={{
          textAlign: "center",
          font: "normal normal bold 16px/19px Helvetica Neue",
          letterSpacing: "0px",
          color: "#FFFFFF",
          opacity: "1"
        }}
      >
        Login/Signup
      </div>
    </Link>
  );
};

const ShowUserAvatar = () => {
  // TODO:
  return "AVATAR";
};

const Header = () => {
  const user = useContext(User);
  const activeUser = user.active;
  const navigate = useNavigate();
  return (
    <div style={{ position: "relative", height: "70px", width: "1440px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          onClick={() => {
            navigate("/");
          }}
          style={{
            position: "relative",
            top: "22px",
            left: "70px",
            width: "82px",
            height: "46px",
            textAlign: "left",
            font: "normal normal bold 22px/27px Helvetica Neue",
            letterSpacing: "0px",
            opacity: "1",
            display: "flex"
          }}
        >
          {HeaderName.map(({ name, style }, key) => (
            <div key={key} style={{ ...defaultStyles, ...style }}>
              {name}
            </div>
          ))}
        </div>
        {activeUser ? <ShowUserAvatar user={activeUser} /> : <ShowLoginAvatar />}
      </div>
      <div
        style={{
          position: "relative",
          top: "22px",
          opacity: "1",
          margin: "0 70px",
          borderBottom: "1px solid grey"
        }}
      />
    </div>
  );
};

export default Header;
