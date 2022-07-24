import React from "react";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/history">history</Link>
      <Link to="/list">list</Link>
    </div>
  );
};
export default Header;
