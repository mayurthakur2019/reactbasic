import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            MyApp
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active bg-warning text-dark"
                      : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active bg-warning text-dark"
                      : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active bg-warning text-dark"
                      : "nav-link"
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/post/mobile"
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active bg-warning text-dark"
                      : "nav-link"
                  }
                >
                  Post
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
