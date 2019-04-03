import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/table" activeStyle={activeStyle}>
        Table
      </NavLink>
      {" | "}
      <NavLink to="/form" activeStyle={activeStyle}>
        Login
      </NavLink>
      {" | "}
      <NavLink to="/signup" activeStyle={activeStyle}>
        Sign up
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        Logout
      </NavLink>
    </nav>
  );
};

export default Header;
