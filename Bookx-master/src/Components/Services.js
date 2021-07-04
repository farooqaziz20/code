import React from "react";

const Services = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <h1 className="section-title">Services</h1>
          </div>
          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.2s">
              <div className="icon">
                <i className="lni-book"></i>
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">Buy</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  aut magni perferendis repellat rerum assumenda facere.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.4s">
              <div className="icon">
                <i className="lni-leaf"></i>
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">Sell</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  aut magni perferendis repellat rerum assumenda facere.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.6s">
              <div className="icon">
                <i className="lni-map"></i>
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">Lend</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  aut magni perferendis repellat rerum assumenda facere.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xs-12">
            <div className="services-item wow fadeInRight" data-wow-delay="0.8s">
              <div className="icon">
                <i className="lni-cog"></i>
              </div>
              <div className="services-content">
                <h3>
                  <a href="#">Donate</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                  aut magni perferendis repellat rerum assumenda facere.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
