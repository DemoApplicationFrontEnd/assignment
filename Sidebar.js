import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaListAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>ByeWind</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <FaListAlt /> Orders List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
