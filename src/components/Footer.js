import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { GrPinterest } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-column">
          <h3 className="footer-column-title">Opening Hours</h3>
          <div className="footer-column-content">
            <span className="subtitle">Monday-Wednesday</span>
            <span className="text">12.00-18.00</span>
          </div>
          <div className="footer-column-content">
            <span className="subtitle">Thursday-Friday</span>
            <span className="text">12.00-21.00</span>
          </div>
          <div className="footer-column-content">
            <span className="subtitle">Saturday-Sunday</span>
            <span className="text">12.00-22.00</span>
          </div>
        </div>
        <div className="footer-column links">
          <h3 className="footer-column-title">Useful Links</h3>
          <NavLink
            to="/"
            activeClassName="link-selected"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="link-selected"
          >
            About
          </NavLink>
          <NavLink
            to="/menu"
            activeClassName="link-selected"
          >
            Menu
          </NavLink>
          <NavLink
            to="/gallery"
            activeClassName="link-selected"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="link-selected"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="link-selected"
          >
            Contact
          </NavLink>
        </div>
        <div className="footer-column">
          <h3 className="footer-column-title">Our Information</h3>
          <div className="footer-column-content">
            <span className="subtitle">Address</span>
            <span className="text">54 Queen Street, Australia </span>
          </div>
          <div className="footer-column-content">
            <span className="subtitle">Email</span>
            <span className="text">info@foodz.com</span>
          </div>
          <div className="footer-column-content">
            <span className="subtitle">Phone</span>
            <span className="text">+987 654 321</span>
          </div>

        </div>
        <div className="footer-column">
          <h3 className="footer-column-title">Our Information</h3>
          <div className="footer-column-content">
            <span className="subtitle">Address</span>
            <span className="text">54 Queen Street, Australia </span>
          </div>
          <div className="footer-column-content">
            <span className="subtitle">Email</span>
            <span className="text">info@foodz.com</span>
          </div>
          <div className="footer-column-content">
            <span className="subtitle">Phone</span>
            <span className="text">+987 654 321</span>
          </div>
        </div>
      </div>
      <div className="copyright container">
        <span>Copyright 2021. Foodz . All Right Reserved</span>
        <span className="icons">
          <p>Follow us :</p>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noreferrer"
          >
            <GrPinterest />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
