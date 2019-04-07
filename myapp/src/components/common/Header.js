import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/home" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/table" activeStyle={activeStyle}>
        Table
      </NavLink>
      {" | "}
      <NavLink to="/logout" activeStyle={activeStyle}>
        Logout
      </NavLink>
    </nav>
  );
};

export default Header;
