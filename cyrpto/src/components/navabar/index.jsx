import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
      <Link className="link-style" to="/">Home</Link>
      <Link className="link-style" to="/favorites">Favorites</Link>
    </nav>
  );
};

export default Navbar;
