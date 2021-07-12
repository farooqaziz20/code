import React from "react";
import background from "../Assets/images/banner1.jpg";
import Img1 from "../Assets/images/product-img1.jpg";
import Img2 from "../Assets/images/product-img2.jpg";
import Img3 from "../Assets/images/product-img3.jpg";
import Navbar from "../Components/Navbar";
const ProductDetails = () => {
  return (
    <div>
         <Navbar/>
          <div className="page-header" style={{ backgroundImage: `url(${background})` }} >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-wrapper">
                <h2 className="product-title">AD Details</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="#">Home /</a>
                  </li>
                  <li className="current">AD-Details</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="section-padding">
      <div className="container">
        <div className="product-info row">
          <div className="col-lg-7 col-md-12 col-xs-12">
            <div className="details-box ads-details-wrapper">
              <div id="owl-demo" className="owl-carousel owl-theme">
                <div className="item">
                  <div className="product-img">
                    <img className="img-fluid" src={Img1} alt="" />
                  </div>
                  <span className="price">Rs. Price</span>
                </div>
                {/* <div className="item">
                  <div className="product-img">
                    <img className="img-fluid" src={Img2} alt="" />
                  </div>
                  <span className="price">$1,550</span>
                </div>
                <div className="item">
                  <div className="product-img">
                    <img className="img-fluid" src={Img3} alt="" />
                  </div>
                  <span className="price">$1,550</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-xs-12">
            <div className="details-box">
              <div className="ads-details-info">
                <h2>Fetch AD Title Here</h2>
                {/* <p className="mb-2">
                  Fetch AD Description Here:  <br></br>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum saepe suscipit debitis neque, laborum! Magni
                  ducimus suscipit modi.
                </p> */}
                <div className="details-meta">
                  {/* <span>
                    <a href="#">
                      <i className="lni-alarm-clock"></i> 7 Jan, 10:10 pm
                    </a>
                  </span> 
                  <span>
                    <a href="#">
                      <i className="lni-map-marker"></i> Fetch City Here
                    </a>
                  </span>
                   <span>
                    <a href="#">
                      <i className="lni-eye"></i> 299 View
                    </a>
                  </span> */}
                </div>
                {/* <h4 className="title-small mb-3">Specification:</h4>
                <ul className="list-specification">
                  <li>
                    <i className="lni-check-mark-circle"></i> 256GB PCIe flash
                    storage
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> 2.7 GHz dual-core
                    Intel Core i5
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Turbo Boost up to
                    3.1GHz
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> Intel Iris
                    Graphics 6100
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> 8GB memory
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> 10 hour battery
                    life
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> 13.3" Retina
                    Display
                  </li>
                  <li>
                    <i className="lni-check-mark-circle"></i> 1 Year
                    international warranty
                  </li>
                </ul> */}
              </div>
              <ul className="advertisement mb-4">
                <li><br /><br />
                  <p>
                    <strong>
                      <i className="lni-folder"></i> Category : 
                    </strong>
                    <span className="pl-2">Fetch Category Here</span>
                  </p>
                </li><br /><br />
                <li>
                  <p>
                    <strong>
                      <i className="lni-archive"></i> Type : 
                    </strong>
                   <span className="pl-2">Fetch Type Here</span>
                  </p>
                </li>
                {/* <li>
                  <p>
                    <strong>
                      <i className="lni-package"></i> Brand:
                    </strong>{" "}
                    <a href="#">Apple</a>
                  </p>
                </li> */}
              </ul>
              <div className="ads-btn mb-4">
                <a href="#" className="btn btn-common">
                  <i className="lni-envelope"></i> Text 
                </a>
                <a href="#" className="btn btn-common">
                  <i className="lni-phone-handset"></i> Call
                </a>
                <a href="#" className="btn btn-common">
                  <i className="lni-phone-handset"></i> Request
                </a>
              </div>
              {/* <div className="share">
                <span>Share: </span>
                <div className="social-link">
                  <a className="facebook" href="#">
                    <i className="lni-facebook-filled"></i>
                  </a>
                  <a className="twitter" href="#">
                    <i className="lni-twitter-filled"></i>
                  </a>
                  <a className="linkedin" href="#">
                    <i className="lni-linkedin-fill"></i>
                  </a>
                  <a className="google" href="#">
                    <i className="lni-google-plus"></i>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="description-info">
          <div className="row">
            <div className="col-lg-8 col-md-6 col-xs-12">
              <div className="description">
                <h4>Description</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="short-info">
                <h4>Owner Info</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="lni-users"></i> Full Name
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-printer"></i> Mobile Number
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-reply"></i> Province
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni-warning"></i>City
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;