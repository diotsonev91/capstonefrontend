import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="contact-info">
        <h4>Contact Information</h4>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>

      <div className="social-media-links">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="https://www.facebook.com/example">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com/example">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/example">Instagram</a>
          </li>
        </ul>
      </div>

      <div className="doormat-navigation">
        <h4>Doormat Navigation</h4>
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
      </div>

      <div className="logo">
        <img src="path_to_logo.png" alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
