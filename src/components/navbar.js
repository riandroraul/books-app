import React, { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container">
        <a className="navbar-brand text-light" href="/">
          Home
        </a>
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
              <a
                className="nav-link text-light"
                aria-current="page"
                href="/books"
              >
                Daftar Buku
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/users">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light"
                href="/logout"
                onclick="return confirm(`yakin akan logout ?`);"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
