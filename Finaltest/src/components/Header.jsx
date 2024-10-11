import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>#todo</h1>
      <ul className="nav nav-underline justify-content-around">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            All
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/active">
            Active
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/completed">
            Completed
          </Link>
        </li>
      </ul>

      <hr className="mt-0 mb-3" />
    </div>
  );
};

export default Header;
