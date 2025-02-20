import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/add">add</Link>
      <div></div>
      <Link to="/items">items</Link>
    </div>
  );
};

export default Header;
