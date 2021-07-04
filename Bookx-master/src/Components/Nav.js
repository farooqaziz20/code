import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "../Assets/images/img-logo.png";
const Nav = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-navbar"
              aria-controls="main-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="lni-menu"></span>
              <span className="lni-menu"></span>
              <span className="lni-menu"></span>
            </button>
            <a href="index.html" className="navbar-brand">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/frequently-asked-questions">
                  FAQ
                </Link>
              </li>
            </ul>
            <ul className="sign-in">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="lni-user"></i> My Account
                </a>
                <div className="dropdown-menu">
                  <a
                    className="dropdown-item"
                    href="account-profile-setting.html"
                  >
                    <i className="lni-home"></i> Account Home
                  </a>
                  <a className="dropdown-item" href="account-myads.html">
                    <i className="lni-wallet"></i> My Ads
                  </a>
                  <a
                    className="dropdown-item"
                    href="account-favourite-ads.html"
                  >
                    <i className="lni-heart"></i> Favourite ads
                  </a>
                  <a className="dropdown-item" href="account-archived-ads.html">
                    <i className="lni-folder"></i> Archived
                  </a>
                  <a className="dropdown-item" href="login.html">
                    <i className="lni-lock"></i> Log In
                  </a>
                  <a className="dropdown-item" href="signup.html">
                    <i className="lni-user"></i> Signup
                  </a>
                  <a className="dropdown-item" href="forgot-password.html">
                    <i className="lni-reload"></i> Forgot Password
                  </a>
                  <a className="dropdown-item" href="account-close.html">
                    <i className="lni-close"></i>Account close
                  </a>
                </div>
              </li>
            </ul>
            <a className="tg-btn" href="post-ads.html">
              <i className="lni-pencil-alt"></i> Post An Ad
            </a>
          </div>
        </div>

        <ul className="mobile-menu">
        <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/frequently-asked-questions">
                  FAQ
                </Link>
              </li>
          <li>
            <a href="classixer-1.html">My Account</a>
            <ul className="dropdown">
              <li>
                <a href="account-profile-setting.html">
                  <i className="lni-home"></i> Account Home
                </a>
              </li>
              <li>
                <a href="account-myads.html">
                  <i className="lni-wallet"></i> My Ads
                </a>
              </li>
              <li>
                <a href="account-favourite-ads.html">
                  <i className="lni-heart"></i> Favourite ads
                </a>
              </li>
              <li>
                <a href="account-archived-ads.html">
                  <i className="lni-folder"></i> Archived
                </a>
              </li>
              <li>
                <a href="login.html">
                  <i className="lni-lock"></i> Log In
                </a>
              </li>
              <li>
                <a href="signup.html">
                  <i className="lni-user"></i> Signup
                </a>
              </li>
              <li>
                <a href="forgot-password.html">
                  <i className="lni-reload"></i> Forgot Password
                </a>
              </li>
              <li>
                <a href="account-close.html">
                  <i className="lni-close"></i>Account close
                </a>
              </li>
            </ul>
          </li>
        </ul>

      </nav>
    </Router>
  );
};
export default Nav;
