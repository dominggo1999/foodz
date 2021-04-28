import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

import Button from './Button';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-brand">
          <Link
            to="/"
            exact
          >
            Foodz
          </Link>
        </div>

        <div className="nav-menu-icon">
          <AiOutlineMenu />
        </div>

        {/* Width screen size navbar */}
        <div className="nav-menu nav-menu-large">
          <NavLink
            to="/"
            activeClassName="link-selected"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="link-selected"
            exact
          >
            About
          </NavLink>
          <NavLink
            to="/menu"
            activeClassName="link-selected"
            exact
          >
            Menu
          </NavLink>
          <NavLink
            to="/gallery"
            activeClassName="link-selected"
            exact
          >
            Gallery
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="link-selected"
            exact
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="link-selected"
            exact
          >
            Contact
          </NavLink>

          <div className="search-button">
            <AiOutlineSearch />
          </div>
          <div className="nav-button">
            <Button type="orange">Order Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
