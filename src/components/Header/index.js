import React from "react";
import { NavLink, Link } from "react-router-dom";
import DropdownUser from "../DropdownUser";
import ButtonLogin from "../ButtonLogin";

const Header = ({ user, LogoutUser, LoginUser, RegisterUser }) => (
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
            activeClassName="nav-link active"
          >
            Home <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/home/features"
            className="nav-link"
            activeClassName="nav-link active"
          >
            Features
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/home/pricing"
            className="nav-link"
            activeClassName="nav-link active"
          >
            Pricing
          </NavLink>
        </li>
      </ul>
    </div>
    {user.id ? (
      <DropdownUser user={user} LogoutUser={LogoutUser} />
    ) : (
      <ButtonLogin
        user={user}
        LoginUser={LoginUser}
        RegisterUser={RegisterUser}
      />
    )}
  </nav>
);

export default Header;
