import React from "react";
import { Link } from "react-router-dom";
import "./styles/Nav.css";
import Logo from "../assets/little-lemo-logo.png"
const Nav = () => {
  return (
    <nav className="navigation">
      <img src={Logo}alt="Little Lemon Logo" />
      <ul>
        <li className="button">
          <Link to="/">Home</Link>
        </li>
        <li className="button">
          <Link to="/about">About</Link>
        </li>
        <li className="button">
          <Link to="/specials">Menu</Link>
        </li>
        <li className="button">
          <Link to="/contact">Reservations</Link>
        </li>
        <li className="button">
          <Link to="/order-online">Order online</Link>
        </li>
        <li className="button">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
