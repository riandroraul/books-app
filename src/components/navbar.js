import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavUser from "./NavUser";

const Navbar = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear("userLogin");
    localStorage.clear("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container">
        <Link className="navbar-brand text-light" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-2">
            <li className="nav-item">
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/books"
              >
                Daftar Buku
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
            <NavUser nama={"Users"} path={"/users"} />
            <li className="nav-item">
              <Link
                to={"/login"}
                className="nav-link text-light"
                onClick={(event) => {
                  event.preventDefault();
                  onLogout();
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
