import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            Jobs Adda
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto my-2 mb-lg-0">
            <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="AdminLogin"
                >
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="JobProviderLogin"
                >
                  Job Provider
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="JobSeekerLogin"
                >
                  Job Seeker
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
