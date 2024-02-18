import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SideMenu.css';

function SideMenu() {
  return (
    <div className="side-menu">
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/playlist">
            <i className="fas fa-film"></i> PlayList
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <i className="fas fa-user-plus"></i> Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
