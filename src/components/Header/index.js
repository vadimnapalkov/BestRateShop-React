import "./style.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import DropdownUser from "../DropdownUser";
import ButtonLogin from "../ButtonLogin";

const Header = ({ user, onLogoutUser, onLoginUser, onRegisterUser }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      BestRateShop
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-5 ">
        <li className="nav-item">
          <NavLink
            exact
            to="/home"
            className="nav-link"
            activeClassName="active"
          >
            Home <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/home/features"
            className="nav-link"
            activeClassName="active"
          >
            Features
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/home/pricing"
            className="nav-link"
            activeClassName="active"
          >
            Pricing
          </NavLink>
        </li>
      </ul>
    </div>
    {user.id ? (
      <DropdownUser user={user} onLogoutUser={onLogoutUser} />
    ) : (
      <ButtonLogin
        user={user}
        onLoginUser={onLoginUser}
        onRegisterUser={onRegisterUser}
      />
    )}
  </nav>
);

export default Header;
