import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper green">
        <div href="#" className="brand-logo right">
          <Link to="/"> Books App </Link>
        </div>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/books"> Books List </Link>
          </li>
          <li>
            <Link to="/add_book"> Add Book </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
