import React from "react";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/history">product</Link>
    </div>
  );
};
export default Header;
