import React from "react";
import { Link } from "react-router";

const DropdownUser = ({ user, LogoutUser }) => (
  <ul className="navbar-nav navbar-right">
    <li className="dropdown">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-toggle="dropdown"
      >
        <i className="fas fa-user" />
        <strong> {user.full_name}</strong>
      </button>
      <ul className="dropdown-menu dropdown-menu-right">
        <li>
          <div className="navbar-login">
            <div className="row">
              <div className="col-lg-4">
                <p className="text-center">
                  {user.photo ? (
                    <img src={user.photo} alt="userPhoto" />
                  ) : (
                    <i
                      className="fas fa-user fa-7x"
                      style={{ color: "#343a40" }}
                    />
                  )}
                </p>
              </div>
              <div className="col-lg-8">
                <p className="text-left">
                  <strong>{user.name}</strong>
                </p>
                <p className="text-left small">{user.email}</p>
                <p className="text-left">
                  <button
                    className="btn btn-primary btn-block btn-sm"
                    onClick={LogoutUser}
                  >
                    Logout
                  </button>
                </p>
              </div>
            </div>
          </div>
        </li>
        <div className="dropdown-divider" />
        <li>
          <div className="navbar-login navbar-login-session">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  <Link href="/profile" className="btn btn-primary btn-block">
                    My Profile
                  </Link>
                  <a href="/" className="btn btn-danger btn-block">
                    Change Password
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
);

export default DropdownUser;
