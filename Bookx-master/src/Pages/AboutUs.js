import React from "react";
import background from "../Assets/images/banner1.jpg";
import AboutImg from "../Assets/images/about.png";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
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
                <h2 className="product-title">About Us</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="#">Home /</a>
                  </li>
                  <li className="current">About Us</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-12">
              <div className="head-faq text-center">
                <h2 className="section-title">About Us</h2>
              </div>
            </div> */}

            <div className="col-md-6 col-lg-6 col-xs-12">
              <div className="about-wrapper">
                <h2 className="intro-title">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit Sed
                  Do
                </h2>
                <p className="intro-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit nostrum, doloremque quaerat sit tempora eius est
                  reiciendis accusamus magnam quae. Explicabo dolore officia,
                  iure a ullam aliquam nemo excepturi, repellat. uod ut delectus
                  ad tempora.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  laboriosam sit nam animi, distinctio maiores possimus!
                  Suscipit officiis reiciendis vitae omnis eligendi? Tempora at
                  ullam repudiandae, magnam nemo fuga omnis.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xs-12">
              <img className="img-fluid" src={AboutImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
