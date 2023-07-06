import React from "react";

const Nav = () => {
  return (
    <nav>
      <img src="path_to_little_lemon_logo.png" alt="Little Lemon Logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
