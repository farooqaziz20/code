import React from "react";
import background from "../Assets/images/banner1.jpg";
import Navbar from "../Components/Navbar";
const ContactUs = () => {
  return (
    <div>
              <Navbar/>

      <div
        className="page-header"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-wrapper">
                <h2 className="product-title">Contact Us</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="#">Home /</a>
                  </li>
                  <li className="current">Contact Us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="content" className="section-padding">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-12">
              <div className="head-faq text-center">
                <h2 className="section-title">Contact Us</h2>
              </div>
            </div> */}
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
              <h2 className="contact-title">Send Message to Us</h2>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe1xB9ykXuTA9Svd3RojKAypyThQAKvuU10Q5g_YCRcqercOA/viewform?embedded=true" width="640" height="1000" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
              {/* <form
                id="contactForm"
                className="contact-form"
                data-toggle="validator"
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            data-error="Please enter your name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            required
                            data-error="Please enter your email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="msg_subject"
                            name="subject"
                            placeholder="Subject"
                            required
                            data-error="Please enter your subject"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Massage"
                            rows="10"
                            data-error="Write your message"
                            required
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      id="submit"
                      className="btn btn-common"
                    >
                      Submit Now
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form> */}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <h2 className="contact-title">Get In Touch</h2>
              <div className="information">
                <p>
                  Lorem Ipsum Is simply dummy text of the printing and
                  typesetting Industry. Lorem Ipsum has been the Industry's
                </p>
                <div className="contact-datails">
                  <div className="icon">
                    <i className="lni-map-marker icon-radius"></i>
                  </div>
                  <div className="info">
                    <h3>Address</h3>
                    <span className="detail">
                      Department of Computer Science <br /> University of
                      Agriculture, FSD
                    </span>
                  </div>
                </div>
                <div className="contact-datails">
                  <div className="icon">
                    <i className="lni-pointer icon-radius"></i>
                  </div>
                  <div className="info">
                    <h3>Have any Questions?</h3>
                    <span className="detail">
                      <a className="__cf_email__">iNomanWaleed@gmai.com</a>
                    </span>
                  </div>
                </div>
                <div className="contact-datails">
                  <div className="icon">
                    <i className="lni-phone-handset icon-radius"></i>
                  </div>
                  <div className="info">
                    <h3>Call Us &amp; Hire us</h3>
                    <span className="detail">+92 304 4476734</span>
                  </div>
                </div>
                {/* <div className="contact-datails">
                  <div className="icon">
                    <i className="lni-phone icon-radius"></i>
                  </div>
                  <div className="info">
                    <h3>Telephone</h3>
                    <span className="detail">(+88) 112345678 912</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
