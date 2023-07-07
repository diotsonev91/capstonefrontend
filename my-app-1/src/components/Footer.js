import React from "react";
import "./styles/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="path_to_logo.png" alt="Logo" />
      </div>
      <div className="column">
        <h4>Contact Information</h4>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Email: info@example.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>
      <div className="column copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
      </div>
      <div className="column">
        <h4 className="follow">Follow Us</h4>
        <a href="#" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="#" className="social-icon">
          <FaTwitter />
        </a>
        <a href="#" className="social-icon">
          <FaInstagram />
        </a>
        <a href="#" className="social-icon">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
