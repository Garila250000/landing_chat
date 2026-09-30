import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Menu>
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/about">
        About Us
      </Link>

      <Link className="menu-item" to="/tutorial">
        Tutorial
      </Link>

      <Link className="menu-item" to="/creators">
        Creators
      </Link>
    </Menu>
  );
};

export default Sidebar;