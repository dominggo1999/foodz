import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { connect } from 'react-redux';
import { toggleNavbar } from '../redux/navbar/navbarActions';

import Button from './Button';

const Navbar = ({ displayNavbarMobile, toggleNavbar }) => {
  return (
    <nav>
      <div className="container">
        <div className="nav-brand">
          <Link
            to="/"
          >
            Foodz
          </Link>
        </div>

        <div
          className="nav-menu-icon"
          role="button"
          onClick={toggleNavbar}
        >
          <AiOutlineMenu />
        </div>

        {/* Width screen size navbar */}
        <div className={`nav-menu nav-menu-large ${displayNavbarMobile ? 'nav-menu-mobile' : ''}`}>
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

          <div
            className="search-button"

          >
            <AiOutlineSearch />
          </div>
          <div className="nav-button">
            <Button
              type="orange"
            >Order Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  displayNavbarMobile: state.navbar.displayNavbarMobile,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNavbar: () => dispatch(toggleNavbar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
