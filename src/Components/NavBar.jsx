import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
};

export default NavBar;
