import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

const Navbar = () => {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("token"));

  function logout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <Link className="navbar-brand me-2" to="/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height={16}
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </Link>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {localStorage.getItem("token") ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/addtransaction">
                    Add Transaction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/showtransaction">
                    Show Transaction
                  </Link>
                </li>
              </ul>
            ) : (
              <div className="d-flex align-items-center">
                <Link to="login" className="btn btn-primary mx-2">
                  Login
                </Link>

                <Link to="signup" className="btn btn-primary">
                  Sign up
                </Link>
              </div>
            )}

            {/* Left links */}

            {/* Left links */}
          </div>
          {localStorage.getItem("token") ? (
            <nav>
              <NavDropdown title={user.data.name}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </nav>
          ) : null}
          {/* Collapsible wrapper */}
        </div>

        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;
