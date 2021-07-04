import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Books from '../Categories/Books';
const Categories = () => {
  return (
    <div>
      <Router>
        <section className="categories-icon section-padding bg-drack">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <Link to="/books">
                  <div className="icon-box">
                    <div className="icon">
                      <i class="lni lni-graduation"></i>
                    </div>
                    <h4>Textbooks</h4>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <Link to="/all-ads">
                  <div className="icon-box">
                    <div className="icon">
                      <i class="lni lni-heart"></i>
                    </div>
                    <h4>Novels</h4>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/all-ads">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="lni-book"></i>
                    </div>
                    <h4>Magazines</h4>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Link to="/all-ads">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="lni-video"></i>
                    </div>
                    <h4>Lectures</h4>
                  </div>
                </Link>
              </div>
              
            </div>
          </div>
        </section>

        {/* Routing */}
    {/* <Switch>
          <Route exact path="/books">
            <Books />
          </Route>
         </Switch> */}
      </Router>
    </div>
  );
};

export default Categories;
