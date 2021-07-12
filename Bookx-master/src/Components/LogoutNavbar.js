import React from 'react';
import Logo from ".././Assets/images/img-logo.png";
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

export default function LogoutNavbar() {
  const history=useHistory();
  var loggedUser=JSON.parse( localStorage.getItem('signin')??[]);
  var logedrusernmae=(!(loggedUser.name==null||loggedUser.name==""))?loggedUser.name:"My Account";
  var flag=(loggedUser.name==null||loggedUser.name=="")?false:true;
  function logout() {
    localStorage.setItem('signin', JSON.stringify({name:"",email:"", user_id:""}))

    history.push('/login')
 
  }
    return (
        <div>
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
              <Link to="/" className="navbar-brand">
                <img src={Logo} alt="" />
              </Link>
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
                <li className="nav-item">
                  <Link className="nav-link" to="/my-ads">
                    My ADs
                  </Link>
                </li>
              </ul>
             
              <ul className="sign-in">
                <li className="nav-item dropdown">
                  <Link 
                    className="nav-link dropdown-toggle"
                    href="#"
                    
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    
                  >
                    <i className="lni-user"></i> {logedrusernmae}
                  </Link>
                   <div className="dropdown-menu">
                    <Link className="dropdown-item" onClick={logout}>
                      {/* to="/login" */}
                      <i className="lni-lock"></i> Logout
                    </Link>
                    {/* <Link className="dropdown-item" to="/register">
                      <i className="lni-user"></i> Register
                    </Link> 

                    
                    <a className="dropdown-item"
                      href="account-profile-setting.html">
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
                    <a
                      className="dropdown-item"
                      href="account-archived-ads.html"
                    >
                      <i className="lni-folder"></i> Archived
                    </a>

                    <a className="dropdown-item" href="forgot-password.html">
                      <i className="lni-reload"></i> Forgot Password
                    </a>
                    <a className="dropdown-item" href="account-close.html">
                      <i className="lni-close"></i>Account close
                    </a>  */}
                  </div> 
                </li>
              </ul>
             
              <Link className="tg-btn" to="/post-ads">
                <i className="lni-pencil-alt"></i> Post An Ad
              </Link>
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
            <li className="nav-item">
              <Link className="nav-link" to="/my-ads">
                My ADs
              </Link>
            </li>
            <li>
              <a href="#"  onClick>My Account</a>
              <ul className="dropdown">
                <li>
                  <Link to="/login">
                    <i className="lni-lock"></i> Log In
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <i className="lni-user"></i> Register
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        </div>
    )
}


